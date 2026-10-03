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

  // Replace text-5xl md:text-7xl lg:text-8xl ... tracking-tighter
  content = content.replace(/text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter/g, 'text-[40px] md:text-[60px] lg:text-[70px] font-heading font-semibold tracking-[0.15em] uppercase');
  
  // Replace just the sizes if tracking-tighter is missing or separated
  content = content.replace(/text-5xl md:text-7xl lg:text-8xl([^"]*)/g, (match, p1) => {
    if (p1.includes('font-heading')) return match; // already updated
    return `text-[40px] md:text-[60px] lg:text-[70px] font-heading font-semibold tracking-[0.15em] uppercase ${p1.replace(/tracking-tighter/g, '').replace(/font-semibold/g, '').replace(/font-bold/g, '')}`;
  });

  // Replace 4xl md:text-5xl
  content = content.replace(/text-4xl md:text-5xl font-semibold([^"]*)/g, (match, p1) => {
      if (p1.includes('font-heading')) return match;
      return `text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] uppercase ${p1.replace(/tracking-tight/g, '')}`;
  });

  // Fix any double spaces or duplicate classes caused by the naive replace
  content = content.replace(/uppercase uppercase/g, 'uppercase');
  content = content.replace(/font-heading font-semibold font-heading font-semibold/g, 'font-heading font-semibold');
  content = content.replace(/tracking-\[0\.15em\] tracking-\[0\.15em\]/g, 'tracking-[0.15em]');
  content = content.replace(/  +/g, ' ');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
});
