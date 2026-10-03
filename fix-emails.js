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
const emailPattern = /[a-zA-Z0-9._%+-]+@(solarsafetyfilms\.com|ssifilms\.com)/g;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    if (emailPattern.test(content)) {
        content = content.replace(emailPattern, 'sales@solarsafety.ae');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content);
        console.log('Updated emails in:', file);
    }
});
