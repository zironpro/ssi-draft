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
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir('src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    const patterns = [
        /\+971 4 123 4567/g,
        /\+971 50 987 6543/g,
        /\+971 50 123 4567/g,
        /\+971 50 1234567/g
    ];
    
    patterns.forEach(p => {
        if (p.test(content)) {
            // Need to re-replace because test advances lastIndex or we can just replace directly
            // String.prototype.replace with global regex ignores test() state
            content = content.replace(p, '+971 55 840 8421');
            changed = true;
        }
    });

    if (content.includes('tel:')) {
        let newContent = content
            .replace(/tel:\+971501234567/g, 'tel:+971558408421')
            .replace(/tel:\+97141234567/g, 'tel:+971558408421')
            .replace(/tel:\+971509876543/g, 'tel:+971558408421');
        if (newContent !== content) {
            content = newContent;
            changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(file, content);
        console.log('Fixed:', file);
    }
});
