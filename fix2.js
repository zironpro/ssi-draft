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
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir('src/feature');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // We need to fix style={{ backgroundImage: `url('${src}')` }}
    // by guessing the correct image based on the path
    if (content.includes("url('${src}')")) {
        let replacement = "/hero/home-hero.jpg"; // fallback
        
        if (file.includes('blog')) replacement = "/hero/blog-hero.jpg";
        else if (file.includes('about')) replacement = "/hero/about-hero.jpg";
        else if (file.includes('contact')) replacement = "/hero/contact-hero.jpg";
        else if (file.includes('industries')) replacement = "/hero/industries-hero.jpg";
        else if (file.includes('products')) replacement = "/hero/products-hero.png";
        else if (file.includes('quote')) replacement = "/hero/quote-hero.jpg";
        else if (file.includes('services')) replacement = "/hero/services-hero.jpg";
        else if (file.includes('solutions')) replacement = "/hero/solutions-hero.jpg";
        
        // Also fix the unescaped backticks that caused the JS to have literal ${src}
        content = content.replace(/url\('\$\{src\}'\)/g, `url('${replacement}')`);
        
        fs.writeFileSync(file, content);
        console.log('Fixed:', file, '->', replacement);
    }
});
