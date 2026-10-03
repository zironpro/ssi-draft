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

    // Remove word boundaries where they break because of brackets
    content = content.replace(/(sm:|md:|lg:|xl:|2xl:)?rounded-\[\d+px\]/g, '$1rounded-lg');
    content = content.replace(/(sm:|md:|lg:|xl:|2xl:)?rounded-\[\d+rem\]/g, '$1rounded-lg');
    
    // Also catch some stray text-xl or 2xl that might have missed
    content = content.replace(/(sm:|md:|lg:|xl:|2xl:)?rounded-2xl/g, '$1rounded-lg');
    content = content.replace(/(sm:|md:|lg:|xl:|2xl:)?rounded-3xl/g, '$1rounded-lg');
    content = content.replace(/(sm:|md:|lg:|xl:|2xl:)?rounded-xl/g, '$1rounded-lg');

    // Clean up duplicates
    content = content.replace(/rounded-lg (sm:|md:|lg:|xl:|2xl:)?rounded-lg/g, 'rounded-lg');
    content = content.replace(/(sm:|md:|lg:|xl:|2xl:)?rounded-lg rounded-lg/g, 'rounded-lg');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated rounding in ${filePath}`);
    }
  });
});
