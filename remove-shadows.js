const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDirs = ['./src/feature', './src/components'];

targetDirs.forEach(dir => {
  walkDir(dir, function(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // Remove shadow classes
    content = content.replace(/\b(hover:|focus:)?shadow-(sm|md|lg|xl|2xl|inner|none)\b/g, '');
    content = content.replace(/\b(hover:|focus:)?shadow\b/g, '');
    
    // Remove drop-shadow classes
    content = content.replace(/\b(hover:|focus:)?drop-shadow-(sm|md|lg|xl|2xl|none)\b/g, '');
    content = content.replace(/\b(hover:|focus:)?drop-shadow\b/g, '');

    // Cleanup extra spaces left by removal
    content = content.replace(/className=" +/g, 'className="');
    content = content.replace(/ +"/g, '"');
    content = content.replace(/  +/g, ' ');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Removed shadows from ${filePath}`);
    }
  });
});
