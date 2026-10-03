const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walkDir(file));
        } else if (file.endsWith('hero.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir('src/feature');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    // We want to replace the HTML img element with a div that has background-image
    // Original:
    // <img
    //   ref={imageRef}
    //   src="/hero/blog-hero.jpg"
    //   alt="Blog Hub"
    //   className="w-full h-full object-cover origin-center"
    // />
    
    // Using a regex to match the img element and extract the src
    const imgRegex = /<img[\s\n]*ref=\{imageRef\}[\s\n]*src="([^"]+)"[\s\n]*alt="([^"]*)"[\s\n]*className="w-full h-full object-cover origin-center"[\s\n]*\/>/g;
    
    if (imgRegex.test(content)) {
        content = content.replace(imgRegex, (match, src, alt) => {
            return `<div ref={imageRef} className="w-full h-full bg-cover bg-center origin-center" style={{ backgroundImage: \`url('\${src}')\` }} />`;
        });
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content);
        console.log('Fixed:', file);
    }
});
