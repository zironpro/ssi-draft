export interface IndustryData {
 name: string;
 slug: string;
 shortDescription: string;
 heroImage: string;
 heroSubtitle: string;
 descriptionTitle: string;
 descriptionParagraphs: string[];
 descriptionImage: string;
 stats: { label: string; value: string }[];
}

export const industriesData: Record<string, IndustryData> = {
"commercial-offices": {
 name:"Commercial Offices",
 slug:"commercial-offices",
 shortDescription:"Enhance tenant comfort, improve energy efficiency, and elevate the aesthetic appeal of corporate environments.",
 heroImage:"/industries/commercial-offices.png",
 heroSubtitle:"Optimizing the modern workplace.",
 descriptionTitle:"Smarter workspaces through advanced glass technology.",
 descriptionParagraphs: [
"Commercial office buildings feature extensive glass facades and interior partitions. While this creates a bright, open atmosphere, it also brings significant challenges like solar heat gain, extreme glare, and lack of privacy.",
"Our solutions transform your existing glass. Solar control films drastically reduce HVAC loads, earning points toward LEED certification while keeping tenants comfortable. Privacy films obscure meeting rooms without blocking natural light, and safety films protect against break-ins or severe weather.",
"Invest in solutions that provide an immediate return on investment while elevating the professional aesthetic of your building."
 ],
 descriptionImage:"/industries/commercial-offices.png",
 stats: [
 { label:"Energy Savings", value:"Up to 30%" },
 { label:"Tenant Comfort", value:"Maximized" },
 { label:"ROI", value:"2-5 Years" }
 ]
 },
"residential": {
 name:"Residential",
 slug:"residential",
 shortDescription:"Protect your home from UV rays and increase privacy without sacrificing natural light.",
 heroImage:"/industries/residential.png",
 heroSubtitle:"Your home, perfectly protected.",
 descriptionTitle:"Comfort, privacy, and protection for your sanctuary.",
 descriptionParagraphs: [
"Your home is your largest investment, and large windows are a major selling point. But they can also let in damaging UV rays, excessive heat, and prying eyes.",
"Residential window films act as a permanent, invisible shield. They reject up to 99.9% of UV rays, preventing the fading of your hardwood floors, artwork, and expensive furnishings.",
"Whether you want a virtually clear heat-rejecting film for your living room or a beautiful frosted finish for your bathroom, we offer solutions that improve your home's comfort and security without altering its exterior appearance."
 ],
 descriptionImage:"/industries/residential.png",
 stats: [
 { label:"UV Protection", value:"99.9%" },
 { label:"Fading", value:"Prevented" },
 { label:"Privacy", value:"Day & Night" }
 ]
 },
"retail-and-storefronts": {
 name:"Retail & Storefronts",
 slug:"retail-and-storefronts",
 shortDescription:"Secure merchandise and create inviting displays with clear, protective films.",
 heroImage:"/industries/retail-and-storefronts.png",
 heroSubtitle:"Inviting on the outside. Secure on the inside.",
 descriptionTitle:"Protecting your inventory and your brand.",
 descriptionParagraphs: [
"For retail storefronts, large windows are essential for merchandising and attracting foot traffic. Unfortunately, they are also the primary target for smash-and-grab burglaries and vandalism.",
"Our Clear Safety and Security films reinforce your glass, vastly increasing the time and effort required to break in, often causing burglars to abandon the attempt.",
"Additionally, our UV blocking films ensure that your display merchandise doesn't suffer from sun fading, while Anti-Graffiti films protect the glass from expensive scratching and acid etching."
 ],
 descriptionImage:"/industries/retail-and-storefronts.png",
 stats: [
 { label:"Smash & Grab", value:"Deterred" },
 { label:"Inventory", value:"Protected" },
 { label:"Visibility", value:"100% Clear" }
 ]
 },
"healthcare": {
 name:"Healthcare",
 slug:"healthcare",
 shortDescription:"Maintain hygienic, private spaces using antimicrobial and decorative solutions.",
 heroImage:"/industries/healthcare.png",
 heroSubtitle:"Engineered for sterile, comfortable environments.",
 descriptionTitle:"Advanced solutions for critical care facilities.",
 descriptionParagraphs: [
"Healthcare facilities demand the highest standards of hygiene, privacy, and patient comfort. Our window film solutions address all three.",
"Antimicrobial films applied to high-touch surfaces like doors and touchscreens provide 24/7 active inhibition of bacteria and mold. Frosted and opaque films provide essential HIPAA-compliant privacy for patient rooms and surgical suites.",
"Solar control films ensure that patients recovery rooms maintain a consistent, comfortable temperature while reducing harsh glare for sensitive eyes."
 ],
 descriptionImage:"/industries/healthcare.png",
 stats: [
 { label:"Hygiene", value:"Antimicrobial" },
 { label:"Privacy", value:"HIPAA Compliant" },
 { label:"Comfort", value:"Optimized" }
 ]
 },
"education": {
 name:"Education",
 slug:"education",
 shortDescription:"Upgrade campus security and create distraction-free learning environments.",
 heroImage:"/industries/education.png",
 heroSubtitle:"Safe, secure, and focused campuses.",
 descriptionTitle:"Protecting students and faculty.",
 descriptionParagraphs: [
"The safety of students and staff is the top priority for any educational institution. Our Security Films and anchoring systems are critical components of a modern campus security perimeter, designed to delay forced entry during active threat situations.",
"Beyond security, our solar control and glare reduction films create better learning environments. By eliminating harsh glare on whiteboards and computer screens, students can focus better without eye strain.",
"Decorative films can also be used to brand the campus, display school colors, or obscure ground-floor classroom windows from outside distractions."
 ],
 descriptionImage:"/industries/education.png",
 stats: [
 { label:"Security", value:"Enhanced" },
 { label:"Glare", value:"Eliminated" },
 { label:"Environment", value:"Distraction-Free" }
 ]
 },
"hospitality-and-travel": {
 name:"Hospitality & Travel",
 slug:"hospitality-and-travel",
 shortDescription:"Offer guests premium comfort and safety across hotels and transit hubs.",
 heroImage:"/industries/hospitality-and-travel.png",
 heroSubtitle:"Luxury, privacy, and impeccable design.",
 descriptionTitle:"Elevating the guest experience.",
 descriptionParagraphs: [
"In the hospitality industry, guest comfort is everything. Solar control films ensure that hotel rooms and lobby areas never become uncomfortably hot or blinded by glare, while significantly reducing the building's massive HVAC expenses.",
"Architectural and decorative films offer high-end aesthetics for bathrooms, restaurants, and spa areas, providing luxurious frosted privacy at a fraction of the cost of etched glass.",
"For transit hubs and airports, our safety and blast-mitigation films provide crucial, code-compliant protection for thousands of daily travelers."
 ],
 descriptionImage:"/industries/hospitality-and-travel.png",
 stats: [
 { label:"Guest Comfort", value:"Premium" },
 { label:"Energy Savings", value:"Massive" },
 { label:"Aesthetic", value:"Luxury" }
 ]
 }
};
