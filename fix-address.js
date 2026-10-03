const fs = require('fs');

let footer = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
footer = footer.replace('{ name: "123 Architectural Avenue", href: "#" },\n    { name: "Business Bay, Dubai, UAE", href: "#" },', '{ name: "X4QF+VR4 Dubai", href: "#" },\n    { name: "United Arab Emirates", href: "#" },');
fs.writeFileSync('src/components/layout/Footer.tsx', footer);

function fixContact(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    content = content.replace('123 Architectural Avenue<br />\n                  Business Bay, Dubai, UAE', 'X4QF+VR4 Dubai - United Arab Emirates');
    fs.writeFileSync(filepath, content);
}

fixContact('src/feature/contact-view/sections/contact-methods.tsx');
fixContact('src/feature/contact/sections/contact-methods.tsx');

let loc1 = fs.readFileSync('src/feature/contact/sections/location.tsx', 'utf8');
loc1 = loc1.replace(/123 Architectural Avenue, Business Bay\\nDubai, United Arab Emirates/g, 'X4QF+VR4 Dubai - United Arab Emirates');
fs.writeFileSync('src/feature/contact/sections/location.tsx', loc1);

console.log('Fixed address');
