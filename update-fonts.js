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

  // 1. Hero Headings
  content = content.replace(/heading-fluid-hero font-serif/g, 'text-[40px] md:text-[60px] lg:text-[70px] font-heading font-semibold tracking-[0.15em] uppercase');
  
  // 2. Large Headings
  content = content.replace(/heading-fluid-lg font-serif/g, 'text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] leading-tight uppercase');
  
  // 3. Medium Headings
  content = content.replace(/heading-fluid-md font-serif/g, 'text-[24px] md:text-[32px] lg:text-[40px] font-heading font-semibold tracking-[0.15em] leading-tight uppercase');
  
  // 4. Catch-all for remaining font-serif
  content = content.replace(/font-serif/g, 'font-heading font-semibold');
  
  // 5. Downgrade extrabold to semibold for an elegant look
  content = content.replace(/font-extrabold/g, 'font-semibold');

  // 6. Add font-sans to sections
  content = content.replace(/className="([^"]*)section-master([^"]*)"/g, (match, p1, p2) => {
    if (!p1.includes('font-sans') && !p2.includes('font-sans')) {
      return `className="${p1}section-master${p2} font-sans"`;
    }
    return match;
  });

  content = content.replace(/className="([^"]*)hero-master([^"]*)"/g, (match, p1, p2) => {
    if (!p1.includes('font-sans') && !p2.includes('font-sans')) {
      return `className="${p1}hero-master${p2} font-sans"`;
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
});
