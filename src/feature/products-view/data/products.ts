export interface SubProduct {
 name: string;
 slug: string;
 shortDescription: string;
 subtitle: string;
 heroImage: string;
 descriptionTitle: string;
 descriptionParagraphs: string[];
 descriptionImage: string;
 stats: { label: string; value: string }[];
 features: { title: string; desc: string; icon: string }[];
 specs: { label: string; value: string }[];
}

export interface Category {
 name: string;
 slug: string;
 shortDescription: string;
 heroImage: string;
 heroSubtitle: string;
 descriptionTitle: string;
 descriptionParagraphs: string[];
 descriptionImage: string;
 subProducts: Record<string, SubProduct>;
}

export const productsData: Record<string, Category> = {
"safety-and-security": {
 name: "Solar Safety Film",
 slug: "safety-and-security",
 shortDescription: "Stop break-ins and flying glass.",
 heroImage: "/products/safety-and-security.png",
 heroSubtitle: "Films that hold shattered glass together.",
 descriptionTitle: "Invisible armor for your windows.",
 descriptionParagraphs: [
"Glass is the weakest point in building security. Our films make windows tougher.",
"On impact, explosion, or storm, the film holds glass shards together and slows burglars.",
"The film is optically clear and does not change how your property looks."
 ],
 descriptionImage: "/products/safety-and-security.png",
 subProducts: {
"clear-safety-film": {
 name: "Clear Safety Film",
 slug: "clear-safety-film",
 shortDescription: "Clear protection against impact and shattering.",
 subtitle: "Clear glass. Industrial-strength protection.",
 heroImage: "/sub-products/clear-safety-film.png",
 descriptionTitle: "Round-the-clock protection against forced entry and accidents.",
 descriptionParagraphs: [
"Heavy-duty polyester and strong adhesive form an invisible shield on your glass.",
"It delays intruders during a break-in and keeps glass shards contained in storms and accidents."
 ],
 descriptionImage: "/sub-products/clear-safety-film.png",
 stats: [
 { label: "Shatter Resistance", value: "Class A" },
 { label: "Visibility", value: "Clear" },
 { label: "UV Block", value: "99%" }
 ],
 features: [
 { title: "Tear Resistant", desc: "Multi-layer build resists tearing.", icon: "Shield" },
 { title: "Optically Clear", desc: "Nearly invisible once installed.", icon: "Layers" },
 { title: "UV Protection", desc: "Blocks 99% of UV rays.", icon: "Sun" }
 ],
 specs: [
 { label: "Thickness Options", value: "4 Mil, 7 Mil, 8 Mil, 14 Mil" },
 { label: "Tensile Strength", value: "32,000 psi" },
 { label: "Peel Strength", value: "> 7 lbs/inch" },
 { label: "Break Strength", value: "100 - 350 lbs/inch" },
 { label: "Puncture Strength", value: "93 lbs" },
 { label: "Visible Light Transmitted", value: "89%" },
 { label: "UV Rejection", value: "99%" },
 { label: "Warranty", value: "12 Years Commercial" }
 ]
 },
"anchor-systems": {
 name: "Anchor Systems",
 slug: "anchor-systems",
 shortDescription: "Anchoring for maximum structural strength.",
 subtitle: "Bonds the film to the frame.",
 heroImage: "/sub-products/anchor-systems.png",
 descriptionTitle: "Secure the glass to the frame.",
 descriptionParagraphs: [
"Under severe impact, the whole pane can blow out of its frame. Anchor Systems stop this.",
"Structural silicone or mechanical profiles attach the filmed glass to the frame.",
"Best for government buildings, schools, and high-risk commercial properties."
 ],
 descriptionImage: "/sub-products/anchor-systems.png",
 stats: [
 { label: "Blast Mitigation", value: "GSA Level C" },
 { label: "Wind Load", value: "High" },
 { label: "Installation", value: "Wet/Dry Glaze" }
 ],
 features: [
 { title: "Structural Bond", desc: "Binds filmed glass to the frame.", icon: "Shield" },
 { title: "Blast Resistant", desc: "Absorbs blast energy.", icon: "Zap" },
 { title: "Custom Fit", desc: "Profiles to match your frames.", icon: "Layers" }
 ],
 specs: [
 { label: "System Type", value: "Wet Glaze / Mechanical Attachment" },
 { label: "Tensile Strength", value: "350 psi (Silicone)" },
 { label: "Elongation", value: "400% stretch before breaking" },
 { label: "Compatibility", value: "All 8+ Mil Safety Films" },
 { label: "Warranty", value: "10 Years" }
 ]
 },
"safety-films": {
 name: "Safety Films",
 slug: "safety-films",
 shortDescription: "Tinted safety films for privacy and protection.",
 subtitle: "Security plus solar control.",
 heroImage: "/sub-products/safety-films.png",
 descriptionTitle: "Shatter resistance and heat control in one film.",
 descriptionParagraphs: [
"Tinted Safety Films give the tear resistance of clear security film and also reject heat and glare.",
"Ideal for secure buildings with strong sun. The tint adds daytime privacy.",
"Available in several shades and reflectivity levels."
 ],
 descriptionImage: "/sub-products/safety-films.png",
 stats: [
 { label: "Solar Energy Rejected", value: "Up to 70%" },
 { label: "Thickness", value: "8 Mil" },
 { label: "Privacy", value: "Daytime" }
 ],
 features: [
 { title: "Dual Action", desc: "Security and heat rejection together.", icon: "Shield" },
 { title: "Glare Reduction", desc: "Darker tints cut eye strain.", icon: "Sun" },
 { title: "Daytime Privacy", desc: "Reflective exterior blocks outside views.", icon: "Layers" }
 ],
 specs: [
 { label: "Thickness", value: "8 Mil" },
 { label: "Total Solar Energy Rejected", value: "45% - 70%" },
 { label: "Visible Light Transmitted", value: "20% - 50%" },
 { label: "UV Rejection", value: "99%" },
 { label: "Warranty", value: "12 Years Commercial" }
 ]
 }
 }
 },
"solar-control": {
 name: "Solar Control",
 slug: "solar-control",
 shortDescription: "Reject up to 82% of solar energy and cut cooling costs.",
 heroImage: "/products/dsolar-control.png",
 heroSubtitle: "Reject heat and save energy. Keep the natural light.",
 descriptionTitle: "Turn your glass into a heat shield.",
 descriptionParagraphs: [
"Our flagship Solar Control series cuts solar heat and glare while keeping natural light.",
"It blocks up to 99% of UV rays, protecting skin and reducing fading of furniture, floors, and art.",
"It improves comfort, saves energy, and preserves interiors."
 ],
 descriptionImage: "/products/dsolar-control.png",
 subProducts: {
"lx-series": {
 name: "LX Series",
 slug: "lx-series",
 shortDescription: "Premium ceramic film for maximum heat rejection.",
 subtitle: "Top clarity and strong infrared heat rejection.",
 heroImage: "/sub-products/lx-series.png",
 descriptionTitle: "Peak optical clarity and performance.",
 descriptionParagraphs: [
"Nano-ceramic technology blocks infrared heat and UV and lets visible light through.",
"No dyes or metals, so it never fades, corrodes, or blocks 5G, Wi-Fi, or cellular signals.",
"Best for luxury homes and commercial spaces that keep their original look."
 ],
 descriptionImage: "/sub-products/lx-series.png",
 stats: [
 { label: "UV Rejection", value: "99%" },
 { label: "Max Heat Control", value: "Yes" },
 { label: "Warranty", value: "Lifetime" }
 ],
 features: [
 { title: "Nano-Ceramic", desc: "Non-metalized. No signal interference.", icon: "Layers" },
 { title: "Spectrally Selective", desc: "Blocks infrared heat without darkening glass.", icon: "Sun" },
 { title: "Zero Corrosion", desc: "Suits coastal and humid areas.", icon: "Shield" }
 ],
 specs: [
 { label: "Visible Light Transmitted", value: "70%" },
 { label: "Visible Light Reflected", value: "9% (Interior / Exterior)" },
 { label: "Total Solar Energy Rejected", value: "55%" },
 { label: "Infrared Rejection", value: "95%" },
 { label: "Solar Heat Gain Coefficient (SHGC)", value: "0.45" },
 { label: "U-Value", value: "1.04" },
 { label: "UV Rejection", value: ">99%" },
 { label: "Thickness", value: "2 Mil" },
 { label: "Warranty", value: "Lifetime Residential / 15 Yrs Commercial" }
 ]
 },
"magnum-ir": {
 name: "Magnum IR",
 slug: "magnum-ir",
 shortDescription: "Strong infrared rejection with clear visibility.",
 subtitle: "Hybrid film for glare reduction and thermal comfort.",
 heroImage: "/sub-products/magnum-ir.png",
 descriptionTitle: "Heat control for demanding environments.",
 descriptionParagraphs: [
"Infrared-absorbing particles cut the heat entering your building.",
"A neutral tint reduces glare and keeps the outside view natural.",
"Ideal for offices and properties with strong afternoon sun."
 ],
 descriptionImage: "/sub-products/magnum-ir.png",
 stats: [
 { label: "IR Rejection", value: "85%" },
 { label: "Glare Control", value: "High" },
 { label: "Warranty", value: "10 Years" }
 ],
 features: [
 { title: "Hybrid Tech", desc: "Dyed and ceramic technologies combined.", icon: "Layers" },
 { title: "Glare Reduction", desc: "Less eye strain for screen workers.", icon: "Sun" },
 { title: "Neutral Hue", desc: "Keeps natural colors inside and out.", icon: "Shield" }
 ],
 specs: [
 { label: "Visible Light Transmitted", value: "35%" },
 { label: "Total Solar Energy Rejected", value: "62%" },
 { label: "Infrared Rejection", value: "85%" },
 { label: "UV Rejection", value: ">99%" },
 { label: "Thickness", value: "1.5 Mil" },
 { label: "Warranty", value: "10 Years Commercial" }
 ]
 },
"magnum-black": {
 name: "Magnum Black",
 slug: "magnum-black",
 shortDescription: "Maximum privacy and glare reduction in deep black.",
 subtitle: "Top glare control with a sleek black look.",
 heroImage: "/sub-products/magnum-black.png",
 descriptionTitle: "Maximum shading. Maximum comfort.",
 descriptionParagraphs: [
"Magnum Black gives strong glare reduction and daytime privacy. Its deep black color gives facades a modern look.",
"It absorbs and reflects a large share of solar energy and keeps interiors cool.",
"Best for server rooms, media rooms, and projects that need a dark, uniform exterior."
 ],
 descriptionImage: "/sub-products/magnum-black.png",
 stats: [
 { label: "Glare Reduction", value: "93%" },
 { label: "Privacy", value: "Maximum" },
 { label: "Aesthetic", value: "Deep Black" }
 ],
 features: [
 { title: "Extreme Glare Control", desc: "Removes almost all glare on screens.", icon: "Sun" },
 { title: "Daytime Privacy", desc: "Blocks outside views in daylight.", icon: "Shield" },
 { title: "Modern Look", desc: "Uniform dark finish for exteriors.", icon: "Layers" }
 ],
 specs: [
 { label: "Visible Light Transmitted", value: "5%" },
 { label: "Visible Light Reflected", value: "5% (Interior)" },
 { label: "Total Solar Energy Rejected", value: "72%" },
 { label: "Solar Heat Gain Coefficient (SHGC)", value: "0.28" },
 { label: "Glare Reduction", value: "93%" },
 { label: "Emissivity", value: "0.84" },
 { label: "UV Rejection", value: "99%" },
 { label: "Thickness", value: "1.5 Mil" },
 { label: "Warranty", value: "10 Years" }
 ]
 },
"grey-silver-grey": {
 name: "Grey / Silver / Grey",
 slug: "grey-silver-grey",
 shortDescription: "Dual-tone solar control film that cuts heat and blocks UV.",
 subtitle: "Dual-tone comfort and energy savings.",
 heroImage: "/sub-products/grey-silver-grey.png",
 descriptionTitle: "Grey / Silver / Grey Series \u2013 Dual-Tone Solar Control Film",
 descriptionParagraphs: [
"This film cuts heat, blocks UV, and improves comfort in homes and commercial spaces. It suits high-sun regions like Dubai.",
"It prevents UV fading of interiors and helps hold glass together if it breaks.",
"Less solar heat means lower air conditioning use and lower energy costs."
 ],
 descriptionImage: "/sub-products/grey-silver-grey.png",
 stats: [
 { label: "Glare Reduction", value: "94%" },
 { label: "Total Solar Energy Rejected", value: "70%" },
 { label: "UV Blocked", value: ">99%" }
 ],
 features: [
 { title: "Dual-Tone Construction", desc: "Grey / Silver / Grey multilayer build.", icon: "Layers" },
 { title: "Heat & UV Rejection", desc: "Strong heat rejection. Blocks 99% of UV.", icon: "Sun" },
 { title: "Durable & Versatile", desc: "Fits commercial, office, and home windows.", icon: "Shield" }
 ],
 specs: [
 { label: "Visible Light Transmission", value: "8%" },
 { label: "Exterior Reflectance", value: "10%" },
 { label: "Interior Reflectance", value: "10%" },
 { label: "Glare Reduction", value: "94%" },
 { label: "Total Solar Energy Rejected", value: "70%" },
 { label: "Solar Heat Gain Coefficient", value: "0.30" },
 { label: "UV Light Blocked", value: ">99%" },
 { label: "Film Thickness", value: "50 microns" },
 { label: "Appearance", value: "Dark neutral grey with silver layer" },
 { label: "Best Use", value: "Maximum heat & glare reduction with strong privacy" }
 ]
 }
 }
 },
"privacy": {
 name: "Privacy Films",
 slug: "privacy",
 shortDescription: "Full or partial light block-out with textured and opaque films.",
 heroImage: "/products/privacy.png",
 heroSubtitle: "Privacy without walls or blinds.",
 descriptionTitle: "Control what people see.",
 descriptionParagraphs: [
"Open offices and glass-heavy homes lack privacy. Our films replace heavy curtains and costly frosted glass.",
"Hide a conference room, a storage area, or a bathroom window with the level of privacy you choose.",
"The films are durable, easy to clean, and removable."
 ],
 descriptionImage: "/products/privacy.png",
 subProducts: {
"frosted-film": {
 name: "Frosted Film",
 slug: "frosted-film",
 shortDescription: "Classic sandblasted look for privacy.",
 subtitle: "Sandblasted glass look at a fraction of the cost.",
 heroImage: "/sub-products/frosted-film.png",
 descriptionTitle: "Soft light. Private spaces.",
 descriptionParagraphs: [
"Frosted film copies acid-etched or sandblasted glass. It gives 24-hour privacy and lets soft light through.",
"Ideal for glass partitions, conference rooms, and bathroom windows.",
"It can be cut into bands, logos, or shapes."
 ],
 descriptionImage: "/sub-products/frost-film.png",
 stats: [
 { label: "Light Transmission", value: "High" },
 { label: "Privacy Level", value: "24/7" },
 { label: "Texture", value: "Matte" }
 ],
 features: [
 { title: "Diffuses Light", desc: "Softens harsh light. Room stays bright.", icon: "Sun" },
 { title: "24-Hour Privacy", desc: "Blocks views day and night.", icon: "Shield" },
 { title: "Fingerprint Resistant", desc: "Easier to clean than sandblasted glass.", icon: "Layers" }
 ],
 specs: [
 { label: "Appearance", value: "Matte Frost" },
 { label: "Visible Light Transmitted", value: "65%" },
 { label: "Visible Light Reflected", value: "18%" },
 { label: "Shading Coefficient", value: "0.77" },
 { label: "UV Rejection", value: "95%" },
 { label: "Thickness", value: "2 Mil" },
 { label: "Tensile Strength", value: "25,000 psi" },
 { label: "Warranty", value: "5 Years" }
 ]
 },
"opaque-film": {
 name: "Opaque Film",
 slug: "opaque-film",
 shortDescription: "Total light block-out and full two-way privacy.",
 subtitle: "Blackout and Whiteout films.",
 heroImage: "/sub-products/opaque-film.png",
 descriptionTitle: "No light. No visibility.",
 descriptionParagraphs: [
"Opaque Films block all views and all light. Choose Blackout or Whiteout.",
"Use them to hide dropped ceilings, mask construction areas, or create dark rooms.",
"They give 100% two-way privacy."
 ],
 descriptionImage: "/sub-products/opaque-film.png",
 stats: [
 { label: "Light Transmission", value: "0%" },
 { label: "Privacy Level", value: "Total" },
 { label: "Finish", value: "Solid" }
 ],
 features: [
 { title: "Complete Blockout", desc: "0% visible light transmission.", icon: "Sun" },
 { title: "Hides Clutter", desc: "Masks storage and mechanical rooms.", icon: "Shield" },
 { title: "High Contrast", desc: "Solid, uniform finish.", icon: "Layers" }
 ],
 specs: [
 { label: "Colors Available", value: "Black, White" },
 { label: "Visible Light Transmitted", value: "0%" },
 { label: "UV Rejection", value: "100%" },
 { label: "Thickness", value: "2 Mil" },
 { label: "Warranty", value: "5 Years" }
 ]
 },
"frost-film": {
 name: "Frost Film",
 slug: "frost-film",
 shortDescription: "Textured translucent finish with modern appeal.",
 subtitle: "A modern take on privacy glass.",
 heroImage: "/sub-products/frost-film.png",
 descriptionTitle: "Refined translucency.",
 descriptionParagraphs: [
"Frost Film has a sparkle or crystal texture that catches light.",
"It gives strong privacy and suits high-end retail, luxury offices, and modern bathrooms.",
"The texture reduces glare and hotspots from interior lights."
 ],
 descriptionImage: "/sub-products/frost-film.png",
 stats: [
 { label: "Aesthetic", value: "Crystal Texture" },
 { label: "Privacy Level", value: "High" },
 { label: "Light Trans.", value: "Medium" }
 ],
 features: [
 { title: "Textured Finish", desc: "Adds depth to flat glass.", icon: "Layers" },
 { title: "Glare Reduction", desc: "Diffuses spotlights and direct sun.", icon: "Sun" },
 { title: "Elegant Privacy", desc: "Hides details. Lets light glow through.", icon: "Shield" }
 ],
 specs: [
 { label: "Appearance", value: "Sparkle / Crystal Frost" },
 { label: "Visible Light Transmitted", value: "55%" },
 { label: "UV Rejection", value: "90%" },
 { label: "Thickness", value: "2 Mil" },
 { label: "Warranty", value: "5 Years" }
 ]
 }
 }
 },
"decorative": {
 name: "Decorative Films",
 slug: "decorative",
 shortDescription: "Frosted and patterned designs for privacy and style.",
 heroImage: "/products/decorative.png",
 heroSubtitle: "Add patterns and branding to interior glass.",
 descriptionTitle: "Custom glass design at a low price.",
 descriptionParagraphs: [
"Decorative films add texture, pattern, and color to glass.",
"Apply them to existing glass and update them when you rebrand or redesign.",
"Options range from distraction bands to full-color printed murals."
 ],
 descriptionImage: "/products/decorative.png",
 subProducts: {
"decorative-film": {
 name: "Decorative Film",
 slug: "decorative-film",
 shortDescription: "Custom patterns, lines, and gradients.",
 subtitle: "Lines, dots, gradients, and geometric patterns.",
 heroImage: "/sub-products/decorative-film.png",
 descriptionTitle: "Patterned privacy and distraction markers.",
 descriptionParagraphs: [
"Patterned films add privacy without blocking the whole view. Choose from hundreds of patterns, including stripes, dots, squares, and gradients.",
"They also work as distraction markers, making clear glass visible and preventing collisions.",
"We can cut custom patterns, logos, and text to match your brand."
 ],
 descriptionImage: "/sub-products/decorative-film.png",
 stats: [
 { label: "Patterns", value: "100+ Options" },
 { label: "Customizable", value: "Yes" },
 { label: "Application", value: "Interior Glass" }
 ],
 features: [
 { title: "Visual Interest", desc: "Breaks up large clear glass areas.", icon: "Layers" },
 { title: "Safety Compliance", desc: "Meets glass manifestation codes.", icon: "Shield" },
 { title: "Removable", desc: "Easy to change when branding changes.", icon: "Zap" }
 ],
 specs: [
 { label: "Design Types", value: "Stripes, Dots, Gradients, Rice Paper, Geometric" },
 { label: "Visible Light Transmitted", value: "Varies by Pattern" },
 { label: "Thickness", value: "2 Mil" },
 { label: "Warranty", value: "5 Years" }
 ]
 },
"coloured-film": {
 name: "Coloured Film",
 slug: "coloured-film",
 shortDescription: "Vibrant colors to match your brand.",
 subtitle: "Clear, vibrant translucent colors.",
 heroImage: "/sub-products/coloured-film.png",
 descriptionTitle: "Paint your glass with light.",
 descriptionParagraphs: [
"Coloured films add transparent color to interior or exterior glass. Layer colors to match your corporate Pantone.",
"They keep full clarity and visibility through the glass.",
"Ideal for retail storefronts, creative agencies, museums, and accents."
 ],
 descriptionImage: "/sub-products/coloured-film.png",
 stats: [
 { label: "Clarity", value: "Optically Clear" },
 { label: "Colors", value: "Unlimited Combos" },
 { label: "Durability", value: "Scratch Resistant" }
 ],
 features: [
 { title: "Vibrant Hues", desc: "Turns plain glass into stained glass.", icon: "Sun" },
 { title: "Layerable", desc: "Combine for custom shades.", icon: "Layers" },
 { title: "Brand Matching", desc: "Match interiors to your brand colors.", icon: "Zap" }
 ],
 specs: [
 { label: "Colors Available", value: "Red, Blue, Yellow, Green, Custom" },
 { label: "Visible Light Transmitted", value: "Varies by Color" },
 { label: "UV Rejection", value: ">90%" },
 { label: "Thickness", value: "2 Mil" },
 { label: "Warranty", value: "5 Years" }
 ]
 }
 }
 },
"specialty": {
 name: "Decorative Wraps",
 slug: "specialty",
 shortDescription: "Antimicrobial layers and luxury interior wraps.",
 heroImage: "/products/speciality.png",
 heroSubtitle: "Specialized films for specialized spaces.",
 descriptionTitle: "Beyond standard glass tinting.",
 descriptionParagraphs: [
"Our Specialty line solves problems beyond solar control and privacy.",
"Create sterile healthcare environments or refinish surfaces without demolition."
 ],
 descriptionImage: "/products/speciality.png",
 subProducts: {
"antimicrobial-films": {
 name: "Antimicrobial Films",
 slug: "antimicrobial-films",
 shortDescription: "Continuous germ protection on high-touch surfaces.",
 subtitle: "Active surface protection for a healthier space.",
 heroImage: "/sub-products/antimicrobial-film.png",
 descriptionTitle: "Germ protection for high-traffic areas.",
 descriptionParagraphs: [
"Silver ions in the film inhibit bacteria, mold, and mildew on its surface.",
"Apply it to doors, touchscreens, elevator buttons, and reception desks for 24/7 protection alongside regular cleaning.",
"It is transparent and scratch-resistant. Ideal for hospitals, clinics, schools, and public transport."
 ],
 descriptionImage: "/sub-products/antimicrobial-film.png",
 stats: [
 { label: "Efficacy", value: "99.9% Reduction" },
 { label: "Active Agent", value: "Silver Ions" },
 { label: "Visibility", value: "Optically Clear" }
 ],
 features: [
 { title: "24/7 Protection", desc: "Constantly inhibits bacterial growth.", icon: "Shield" },
 { title: "Safe & Non-Toxic", desc: "Uses silver ions, not harsh chemicals.", icon: "Sun" },
 { title: "Scratch Resistant", desc: "Handles heavy cleaning and traffic.", icon: "Layers" }
 ],
 specs: [
 { label: "Technology", value: "Silver Ion (Ag+)" },
 { label: "Tested Against", value: "E. Coli, Staph, MRSA" },
 { label: "Application", value: "Glass, Smooth Plastics, Metal" },
 { label: "Thickness", value: "2 Mil" },
 { label: "Lifespan", value: "Up to 5 Years (Active)" }
 ]
 },
"luxury-interior-wrapping": {
 name: "Luxury Interior Wrapping",
 slug: "luxury-interior-wrapping",
 shortDescription: "Premium textured wraps for any surface.",
 subtitle: "Finishes that look like wood, metal, stone, and leather.",
 heroImage: "/sub-products/luxury-interior-wrapping.png",
 descriptionTitle: "Renovate without demolition.",
 descriptionParagraphs: [
"Architectural wraps (like DI-NOC) transform doors, columns, walls, and casework without noise, dust, or demolition cost.",
"The durable textured vinyl copies wood grain, marble, brushed aluminum, and leather.",
"It stretches over complex 3D curves and finishes in a fraction of the time a rebuild takes."
 ],
 descriptionImage: "/sub-products/luxury-interior-wrapping.png",
 stats: [
 { label: "Textures", value: "500+ Options" },
 { label: "Application", value: "3D Conformable" },
 { label: "Durability", value: "High Traffic" }
 ],
 features: [
 { title: "Ultra-Realistic", desc: "Textures you can feel.", icon: "Layers" },
 { title: "Eco-Friendly", desc: "Reuses furniture and cuts landfill waste.", icon: "Sun" },
 { title: "Fire Rated", desc: "Meets commercial flammability codes.", icon: "Shield" }
 ],
 specs: [
 { label: "Material", value: "Textured PVC / Vinyl" },
 { label: "Finishes", value: "Wood, Metal, Stone, Carbon, Leather" },
 { label: "Installation", value: "Heat-Conformable, Air-Release Adhesive" },
 { label: "Thickness", value: "8 Mil" },
 { label: "Warranty", value: "5-10 Years" }
 ]
 }
 }
 }
};