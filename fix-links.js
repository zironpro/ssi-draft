const fs = require('fs');

// Fix Footer.tsx
let footer = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
footer = footer.replace('{ name:"Residential Film", href:"#" }', '{ name:"Residential Film", href:"/products" }');
footer = footer.replace('{ name:"Commercial Film", href:"#" }', '{ name:"Commercial Film", href:"/products" }');
footer = footer.replace('{ name:"Automotive Film", href:"#" }', '{ name:"Automotive Film", href:"/products" }');
footer = footer.replace('{ name:"Safety & Security", href:"#" }', '{ name:"Safety & Security", href:"/solutions" }');
footer = footer.replace('{ name:"About Us", href:"#" }', '{ name:"About Us", href:"/about" }');
footer = footer.replace('{ name:"Our Projects", href:"#" }', '{ name:"Our Projects", href:"/industries" }');
footer = footer.replace('{ name:"Resources", href:"#" }', '{ name:"Resources", href:"/blog" }');
footer = footer.replace('{ name:"Contact", href:"#" }', '{ name:"Contact", href:"/contact" }');
footer = footer.replace(/href="#"/g, 'href="/"'); // Fallback for privacy/terms
fs.writeFileSync('src/components/layout/Footer.tsx', footer);

// Fix performance.tsx
let perf = fs.readFileSync('src/feature/home/sections/performance.tsx', 'utf8');
perf = perf.replace(/href="#"/g, 'href="/quote"');
fs.writeFileSync('src/feature/home/sections/performance.tsx', perf);

// Fix blog detail content
let blog = fs.readFileSync('src/feature/blog-view/sections/detail-content.tsx', 'utf8');
blog = blog.replace(/href="#"/g, 'href="/blog"');
fs.writeFileSync('src/feature/blog-view/sections/detail-content.tsx', blog);

let blog2 = fs.readFileSync('src/feature/blog/sections/detail-content.tsx', 'utf8');
blog2 = blog2.replace(/href="#"/g, 'href="/blog"');
fs.writeFileSync('src/feature/blog/sections/detail-content.tsx', blog2);

// Fix contact methods
let contact = fs.readFileSync('src/feature/contact-view/sections/contact-methods.tsx', 'utf8');
contact = contact.replace(/<a href="#"/g, '<a href="#social"');
fs.writeFileSync('src/feature/contact-view/sections/contact-methods.tsx', contact);

let contact2 = fs.readFileSync('src/feature/contact/sections/contact-methods.tsx', 'utf8');
contact2 = contact2.replace(/<a href="#"/g, '<a href="#social"');
fs.writeFileSync('src/feature/contact/sections/contact-methods.tsx', contact2);

console.log('Fixed dummy links.');
