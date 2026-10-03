const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src/feature', function(filePath) {
  if (!filePath.endsWith('.tsx') || filePath.includes('\\home\\') || filePath.includes('/home/')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Change hero subtitle font sizes
  content = content.replace(/text-xl md:text-3xl/g, 'text-base md:text-lg');
  content = content.replace(/text-lg md:text-2xl/g, 'text-base md:text-lg');
  content = content.replace(/text-lg md:text-xl/g, 'text-base md:text-lg');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
});
