export interface SubSolution {
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

export interface SolutionCategory {
  name: string;
  slug: string;
  shortDescription: string;
  heroImage: string;
  heroSubtitle: string;
  descriptionTitle: string;
  descriptionParagraphs: string[];
  descriptionImage: string;
  subSolutions: Record<string, SubSolution>;
}

export const solutionsData: Record<string, SolutionCategory> = {
  "solar-and-heat-control": {
    name: "Solar & Heat Control",
    slug: "solar-and-heat-control",
    shortDescription: "Solve excessive heat and glare problems in residential and commercial spaces.",
    heroImage: "/solutions/solar-and-heat-control.png",
    heroSubtitle: "Take absolute control of your indoor climate, reduce energy costs, and enhance comfort.",
    descriptionTitle: "Efficient thermal management engineered for modern architecture.",
    descriptionParagraphs: [
      "Uncontrolled solar heat can rapidly make interior spaces uninhabitable, placing a tremendous burden on HVAC systems and drastically increasing energy costs. In extreme climates like the UAE, managing this solar heat gain is not just a luxury—it is an architectural necessity.",
      "Our premium solar control solutions mitigate these issues directly at the source: the glass. By utilizing advanced spectrally selective technologies, we reject heat-causing infrared rays before they penetrate the building envelope.",
      "The result is immediate, tangible relief. Occupants enjoy consistent, comfortable temperatures free from hot and cold spots, while property owners benefit from significant, long-term savings on cooling expenses and reduced wear on mechanical systems."
    ],
    descriptionImage: "/solutions/solar-and-heat-control.png",
    subSolutions: {
      "heat-reduction": {
        name: "Heat Reduction",
        slug: "heat-reduction",
        shortDescription: "Lower interior temperatures by rejecting up to 82% of solar infrared rays.",
        subtitle: "Keep your space consistently cool and your energy bills remarkably low.",
        heroImage: "/sub-solutions/heat-reduction.png",
        descriptionTitle: "Advanced Thermal Rejection Technology",
        descriptionParagraphs: [
          "Standard glass acts as a magnifying glass for solar energy, trapping heat indoors and creating an uncomfortable greenhouse effect. Our heat reduction films act as an invisible thermal shield.",
          "Utilizing advanced nano-ceramic and metallized technologies, these films target and reflect the specific wavelengths of light responsible for heat gain (Infrared) while allowing desirable visible light to pass through.",
          "By bouncing this energy away before it enters the building, HVAC systems operate far more efficiently. This leads to massive energy savings, a significantly lowered carbon footprint, and a rapid return on investment, typically paying for itself within 2 to 5 years."
        ],
        descriptionImage: "/sub-solutions/heat-reduction.png",
        stats: [
          { label: "Heat Rejected", value: "Up to 82%" },
          { label: "Cooling Cost Drop", value: "Up to 30%" },
          { label: "ROI Timeframe", value: "2-5 Years" }
        ],
        features: [
          { title: "Energy Savings", desc: "Drastically reduces AC load and mechanical wear, saving thousands annually.", icon: "Zap" },
          { title: "Consistent Temps", desc: "Eliminates uncomfortable hot and cold spots near window areas.", icon: "Sun" },
          { title: "Carbon Reduction", desc: "Significantly lowers your building's overall carbon footprint.", icon: "Layers" }
        ],
        specs: [
          { label: "Solution Type", value: "Thermal Reflection & Absorption Hybrid" },
          { label: "Total Solar Energy Rejected (TSER)", value: "Up to 82%" },
          { label: "Solar Heat Gain Coefficient (SHGC)", value: "0.24 to 0.35" },
          { label: "U-Value (Insulating Property)", value: "0.98" },
          { label: "Durability", value: "Multi-layer Scratch-Resistant Hardcoat" }
        ]
      },
      "glare-reduction": {
        name: "Glare Reduction",
        slug: "glare-reduction",
        shortDescription: "Eliminate blinding light and screen glare without losing your view.",
        subtitle: "Dramatically improve comfort and workplace productivity.",
        heroImage: "/sub-solutions/glare-reduction.png",
        descriptionTitle: "Soften the Light, Save Your Eyes",
        descriptionParagraphs: [
          "Direct, unfiltered sunlight can render computer screens unreadable, wash out presentations, and cause severe eye strain and headaches for employees and residents alike.",
          "Traditional solutions like blinds or curtains force you to choose between comfort and natural light, completely blocking your view of the outside world.",
          "Our glare reduction films act like premium sunglasses for your building. They filter out harsh, blinding light while maintaining pristine optical clarity, creating a softly lit, comfortable environment perfect for modern screen-heavy workspaces and relaxing living rooms."
        ],
        descriptionImage: "/sub-solutions/glare-reduction.png",
        stats: [
          { label: "Glare Reduced", value: "Up to 93%" },
          { label: "Optical Clarity", value: "High Def" },
          { label: "Eye Strain", value: "Reduced 80%" }
        ],
        features: [
          { title: "Screen Clarity", desc: "No more squinting at monitors or closing the blinds during the day.", icon: "Sun" },
          { title: "True Colors", desc: "Maintains accurate exterior color rendition and natural views.", icon: "Layers" },
          { title: "Soft Lighting", desc: "Diffuses harsh, direct sunlight into a comfortable ambient glow.", icon: "Shield" }
        ],
        specs: [
          { label: "Solution Type", value: "Light Filtration / Selective Tinting" },
          { label: "Glare Reduction Rating", value: "Up to 93%" },
          { label: "Visible Light Transmitted (VLT)", value: "5% - 45% variants available" },
          { label: "Visible Light Reflected", value: "Low Interior Reflectivity (Non-Mirrored)" },
          { label: "Material Composition", value: "Dyed / Nano-Ceramic Hybrid" }
        ]
      },
      "uv-protection": {
        name: "UV Protection",
        slug: "uv-protection",
        shortDescription: "Block 99.9% of harmful ultraviolet rays to protect health and assets.",
        subtitle: "Preserve your health, your flooring, and your valuable interiors.",
        heroImage: "/sub-solutions/uv-protection.png",
        descriptionTitle: "Total Ultraviolet Defense",
        descriptionParagraphs: [
          "Ultraviolet (UV) rays are the silent destroyers of interior spaces. They are the leading cause of fading and degradation for expensive hardwood floors, designer furniture, retail merchandise, and irreplaceable artwork.",
          "More importantly, unfiltered UV rays pose significant long-term skin health risks to occupants sitting near windows for extended periods.",
          "Our UV protection solutions block over 99.9% of both UVA and UVB rays. Operating like a permanent, invisible sunscreen for your building (SPF 285+), they extend the life of your interior investments and provide peace of mind for your health."
        ],
        descriptionImage: "/sub-solutions/uv-protection.png",
        stats: [
          { label: "UV Blocked", value: "99.9%" },
          { label: "Fade Reduction", value: "Maximized" },
          { label: "SPF Equivalent", value: "285+" }
        ],
        features: [
          { title: "Anti-Fade", desc: "Protects valuable furnishings, art, and floors from sun damage.", icon: "Shield" },
          { title: "Skin Safe", desc: "Recommended by the Skin Cancer Foundation for daily protection.", icon: "Sun" },
          { title: "Invisible Defense", desc: "Available in completely clear, undetectable variants.", icon: "Layers" }
        ],
        specs: [
          { label: "Solution Type", value: "UV Rejection Coating" },
          { label: "UV Spectrum Blocked", value: "Broadband (300 - 380 nm)" },
          { label: "UV Rejection %", value: "99.9% (Museum Grade)" },
          { label: "Visible Light Transmitted", value: "Up to 89% (Optically Clear)" },
          { label: "Warranty", value: "Comprehensive Lifetime Coverage" }
        ]
      }
    }
  },
  "safety-and-security": {
    name: "Safety & Security",
    slug: "safety-and-security",
    shortDescription: "Comprehensive protection for life and property against severe impacts.",
    heroImage: "/solutions/safety-and-security.png",
    heroSubtitle: "Mitigate threats from break-ins, catastrophic accidents, and severe weather events.",
    descriptionTitle: "Fortify your glass surfaces into impenetrable barriers.",
    descriptionParagraphs: [
      "Glass is naturally fragile and brittle, making it the most vulnerable entry point and the weakest link in the security of any residential or commercial structure.",
      "When subjected to force—whether from a burglar's tool, flying storm debris, or a blast wave—standard glass shatters into lethal projectiles.",
      "Our advanced safety and security solutions reinforce existing glass with high-tensile, micro-layered polyesters. This turns standard windows into robust, flexible barriers that hold shattered glass tightly together, delaying forced entry, protecting against environmental threats, and saving lives."
    ],
    descriptionImage: "/solutions/safety-and-security.png",
    subSolutions: {
      "glass-protection": {
        name: "Anti-Graffiti & Glass Protection",
        slug: "glass-protection",
        shortDescription: "Shield delicate glass surfaces from scratching, gouging, and vandalism.",
        subtitle: "Preserve the pristine condition of your windows and mirrors cost-effectively.",
        heroImage: "/sub-solutions/glass-protection.png",
        descriptionTitle: "Sacrificial Defense Systems",
        descriptionParagraphs: [
          "Public-facing glass, mirrors, and transit windows are constant targets for vandalism, including key scratching, acid etching, and spray paint graffiti. Replacing these damaged panels is an exorbitant ongoing expense.",
          "Our glass protection solutions provide a robust, completely clear sacrificial layer that takes the brunt of the damage. It acts as an invisible shield over your pristine surfaces.",
          "When vandals strike, the damaged film is simply peeled away by our technicians and replaced for a fraction of the cost of new glass, instantly restoring the surface to perfect condition with zero operational downtime."
        ],
        descriptionImage: "/sub-solutions/glass-protection.png",
        stats: [
          { label: "Replacement Cost", value: "1/10th of Glass" },
          { label: "Thickness", value: "4-6 Mil" },
          { label: "Optical Clarity", value: "100% Clear" }
        ],
        features: [
          { title: "Rapid Replacement", desc: "Easily swapped out after an incident with zero construction mess.", icon: "Layers" },
          { title: "Acid & Scratch Resist", desc: "Formulated to resist deep gouges and chemical etching.", icon: "Shield" },
          { title: "Extreme ROI", desc: "Significantly cheaper and faster than replacing tempered glass panes.", icon: "Zap" }
        ],
        specs: [
          { label: "Solution Type", value: "Sacrificial Surface Protection" },
          { label: "Film Thickness", value: "4 Mil or 6 Mil options" },
          { label: "Adhesive Type", value: "Clean-Removal Clear Acrylic" },
          { label: "Hardcoat", value: "Anti-Scratch Polyurethane Topcoat" },
          { label: "Chemical Resistance", value: "High (Resists standard acid etching)" }
        ]
      },
      "shatter-protection": {
        name: "Shatter Protection",
        slug: "shatter-protection",
        shortDescription: "Prevent hazardous flying glass shards from causing severe injury.",
        subtitle: "Essential, invisible safety for accidental impacts and extreme weather.",
        heroImage: "/sub-solutions/shatter-protection.png",
        descriptionTitle: "Critical Containment and Life Safety",
        descriptionParagraphs: [
          "When standard annealed glass breaks, it splinters into jagged, dagger-like shards that pose a massive risk of severe lacerations or death during an accident.",
          "Our shatter protection solutions are engineered with aggressive, high-strength adhesives that bond tightly to the glass. In the event of an impact, earthquake, or severe storm, the glass may break, but the film holds every piece securely within the frame.",
          "This brings non-tempered glass up to strict human-impact safety codes, ensuring peace of mind for schools, daycares, homes, and high-traffic commercial environments."
        ],
        descriptionImage: "/sub-solutions/shatter-protection.png",
        stats: [
          { label: "Safety Rating", value: "Class A Compliance" },
          { label: "Impact Resist", value: "Heavy Duty" },
          { label: "Thickness", value: "4-8 Mil" }
        ],
        features: [
          { title: "Shard Containment", desc: "Holds broken glass securely in the frame, preventing hazardous fallout.", icon: "Shield" },
          { title: "Code Compliance", desc: "Upgrades standard glass to meet rigorous ANSI and CPSC human impact standards.", icon: "Zap" },
          { title: "Invisible Armor", desc: "Optically clear films provide life-saving defense without altering aesthetics.", icon: "Layers" }
        ],
        specs: [
          { label: "Solution Type", value: "Impact Resistance / Shard Containment" },
          { label: "Standards Met", value: "ANSI Z97.1, CPSC 16 CFR 1201 (Category II)" },
          { label: "Tensile Strength", value: "28,000 psi" },
          { label: "Peel Strength", value: "> 5 lbs/inch" },
          { label: "Break Strength", value: "115 lbs/inch" }
        ]
      },
      "security": {
        name: "Forced Entry Security",
        slug: "security",
        shortDescription: "Delay forced entry, deter burglars, and mitigate blast hazards.",
        subtitle: "Heavy-duty, military-grade fortification against severe kinetic threats.",
        heroImage: "/sub-solutions/security.png",
        descriptionTitle: "Impenetrable Passive Security Perimeters",
        descriptionParagraphs: [
          "Intruders and smash-and-grab thieves rely on quick, unimpeded access. A standard glass door can be breached in seconds with a heavy object.",
          "Our security solutions utilize multi-layered, micro-laminated polyesters that are exceptionally tear-resistant. When paired with structural silicone attachment systems, they lock the glass into the frame.",
          "This vastly increases the time, effort, and noise required to breach the perimeter. By delaying entry by up to 3 minutes, you provide crucial time for alarms to sound and rapid response teams to arrive, frequently causing the attacker to abandon the attempt entirely."
        ],
        descriptionImage: "/sub-solutions/security.png",
        stats: [
          { label: "Entry Delay", value: "Up to 3 Minutes" },
          { label: "Thickness", value: "8-14 Mil" },
          { label: "Attachment", value: "Structural Silicone" }
        ],
        features: [
          { title: "Tear Resistant", desc: "Cross-woven micro-layers resist blunt force and sustained attacks.", icon: "Shield" },
          { title: "Blast Mitigation", desc: "Absorbs and dissipates deadly shockwaves from explosive events.", icon: "Zap" },
          { title: "Intruder Deterrent", desc: "Turns easy smash-and-grab targets into impenetrable barriers.", icon: "Layers" }
        ],
        specs: [
          { label: "Solution Type", value: "Forced Entry Deterrence & Blast Mitigation" },
          { label: "Film Thickness", value: "8 Mil to 14 Mil Multi-laminate" },
          { label: "Tensile Strength", value: "> 30,000 psi" },
          { label: "Tear Resistance", value: "Exceptional (Cross-woven micro-laminate)" },
          { label: "Attachment System", value: "Wet Glaze Structural Silicone (Dow Corning 995)" }
        ]
      }
    }
  },
  "privacy": {
    name: "Privacy Solutions",
    slug: "privacy",
    shortDescription: "Control visibility without sacrificing aesthetic appeal or natural light.",
    heroImage: "/solutions/privacy.png",
    heroSubtitle: "Tailored privacy solutions for every environment—from boardrooms to bathrooms.",
    descriptionTitle: "Discrete spaces, brilliant architectural design.",
    descriptionParagraphs: [
      "In modern open-plan architecture, balancing the desire for natural light with the need for confidentiality is a constant challenge.",
      "Whether you need to obscure a corporate boardroom, add daytime reflective privacy to your living room, or completely black out a construction zone, we offer a massive catalog of tailored solutions.",
      "Achieve the exact level of opacity, light transmission, and aesthetic finish your specific space demands without resorting to heavy, dust-collecting blinds."
    ],
    descriptionImage: "/solutions/privacy.png",
    subSolutions: {
      "office-privacy": {
        name: "Corporate Office Privacy",
        slug: "office-privacy",
        shortDescription: "Obscure glass partitions and meeting rooms beautifully.",
        subtitle: "Maintain an open, airy feel while protecting highly sensitive information.",
        heroImage: "/sub-solutions/office-privacy.png",
        descriptionTitle: "Corporate Discretion & Aesthetics",
        descriptionParagraphs: [
          "Modern corporate offices love floor-to-ceiling glass walls, but they inherently lack confidentiality. Our office privacy solutions provide stunning sandblasted, frosted, and dusted aesthetics at a fraction of the cost of factory-etched glass.",
          "You can selectively obscure meeting rooms, HR departments, and executive suites from prying eyes without blocking the flow of ambient natural light across the floorplan.",
          "Furthermore, these films can be custom-cut into distraction bands, modern stripes, or complex geometric patterns to elevate the interior design."
        ],
        descriptionImage: "/sub-solutions/office-privacy.png",
        stats: [
          { label: "Privacy Level", value: "24/7 Translucent" },
          { label: "Light Trans", value: "Softly Diffused" },
          { label: "Texture Options", value: "Sandblast/Dusted" }
        ],
        features: [
          { title: "Diffused Light", desc: "Obscures vision but keeps the office bright, welcoming, and energized.", icon: "Sun" },
          { title: "Distraction Bands", desc: "Can be precisely cut into modern stripes for safety and style.", icon: "Layers" },
          { title: "Professional", desc: "Provides a clean, high-end corporate aesthetic instantly.", icon: "Shield" }
        ],
        specs: [
          { label: "Solution Type", value: "Translucent Frost & Decorative" },
          { label: "Opacity", value: "High (Prevents detailed viewing 24/7)" },
          { label: "Light Transmission", value: "High (Diffuses ambient light)" },
          { label: "Finish", value: "Sandblasted Matte / Dusted Crystal" },
          { label: "Customization", value: "Precision Plotter Cut Compatible" }
        ]
      },
      "residential-privacy": {
        name: "Residential Privacy",
        slug: "residential-privacy",
        shortDescription: "Keep prying eyes out of your sanctuary while enjoying the view.",
        subtitle: "Daytime and nighttime solutions for ultimate comfort and security.",
        heroImage: "/sub-solutions/residential-privacy.png",
        descriptionTitle: "Your home is your sanctuary.",
        descriptionParagraphs: [
          "Living in densely populated areas often means compromising your view for the sake of privacy. You shouldn't have to live in a fishbowl or keep your curtains drawn all day.",
          "Our residential solutions utilize advanced reflective and dual-reflective technologies to create a one-way mirror effect. During the day, you enjoy completely unobstructed views of the outside, while passersby see only a reflection of the sky.",
          "For bathrooms, front doors, and street-facing lower windows, we also offer beautiful frosted and textured options that guarantee 24-hour obscurity, even with the lights on at night."
        ],
        descriptionImage: "/sub-solutions/residential-privacy.png",
        stats: [
          { label: "Privacy Effect", value: "One-Way Mirror" },
          { label: "Light Trans", value: "25-35%" },
          { label: "Heat Block", value: "Exceptional" }
        ],
        features: [
          { title: "Unobstructed Views", desc: "See out perfectly while they can't see in during daytime hours.", icon: "Layers" },
          { title: "Cooler Rooms", desc: "Dual-benefit: Rejects massive amounts of solar heat as well.", icon: "Sun" },
          { title: "Bathroom Frost", desc: "Translucent options available for 24/7 silhouette-only night privacy.", icon: "Shield" }
        ],
        specs: [
          { label: "Solution Type", value: "Dual-Reflective / Textured Frost" },
          { label: "Daytime Privacy", value: "Excellent (Exterior Reflection)" },
          { label: "Nighttime Privacy", value: "Requires Blinds (Reflective) or guarantees privacy (Frost)" },
          { label: "Visible Reflectance", value: "Up to 60% Exterior / Low Interior" },
          { label: "Total Energy Rejected", value: "Up to 70%" }
        ]
      },
      "commercial-privacy": {
        name: "Total Opaque Blackout",
        slug: "commercial-privacy",
        shortDescription: "Completely hide storage, construction, and mechanical areas.",
        subtitle: "Create clean, uniform facades for commercial properties.",
        heroImage: "/sub-solutions/commercial-privacy.png",
        descriptionTitle: "Clean up your exterior architectural aesthetic.",
        descriptionParagraphs: [
          "Commercial properties, retail storefronts, and hospitals frequently need to completely hide dropped ceilings, messy stockrooms, or active construction sites from public view.",
          "Standard window tint is not enough. Our completely opaque blackout and whiteout solutions provide a solid, clean architectural finish from the outside while blocking 100% of the view and light.",
          "These specialized films are engineered to integrate seamlessly into spandrel glass systems, creating a cohesive, professional building facade without the need for expensive structural changes."
        ],
        descriptionImage: "/sub-solutions/commercial-privacy.png",
        stats: [
          { label: "Light Trans", value: "Absolute 0%" },
          { label: "Opacity", value: "Total Block" },
          { label: "Finish", value: "Solid Gloss/Matte" }
        ],
        features: [
          { title: "Total Blockout", desc: "Lets zero light through, providing a solid architectural finish.", icon: "Shield" },
          { title: "Hides Mess", desc: "Perfect for hiding plenum spaces, inventory, and back-of-house operations.", icon: "Layers" },
          { title: "Uniform Exterior", desc: "Creates a highly cohesive and professional building facade.", icon: "Zap" }
        ],
        specs: [
          { label: "Solution Type", value: "Opaque Architectural Masking" },
          { label: "Visible Light Transmitted", value: "0% (Complete block)" },
          { label: "Privacy Level", value: "Total 100% Two-Way Obscurity" },
          { label: "Thickness", value: "2 Mil to 4 Mil options" },
          { label: "Colors", value: "Deep Gloss Black / Pure Matte White" }
        ]
      }
    }
  },
  "decorative": {
    name: "Decorative & Graphics",
    slug: "decorative",
    shortDescription: "Transform ordinary glass into extraordinary bespoke design features.",
    heroImage: "/solutions/decorative.png",
    heroSubtitle: "Endless creative possibilities for architectural glass and blank walls.",
    descriptionTitle: "Customized premium aesthetics without the custom glass price tag.",
    descriptionParagraphs: [
      "Why undergo the massive expense and hassle of replacing glass with factory-etched or custom-patterned panes when you can upgrade your existing surfaces on-site?",
      "Our decorative solutions allow for endless, rapid manipulation of glass and wall surfaces. Whether you are an interior designer looking to add subtle geometric textures or a marketing director wanting to wrap an entire lobby, we have the material.",
      "Incorporate crisp corporate branding, critical wayfinding, or breathtaking striking visual murals directly onto your existing environment, with the added benefit of clean removability when trends or leases change."
    ],
    descriptionImage: "/solutions/decorative.png",
    subSolutions: {
      "glass-design": {
        name: "Patterned Glass Design",
        slug: "glass-design",
        shortDescription: "Apply elegant patterns, gradients, and textures to flat glass.",
        subtitle: "Architectural intrigue applied seamlessly and rapidly.",
        heroImage: "/sub-solutions/glass-design.png",
        descriptionTitle: "Bespoke Patterns and Fading Gradients.",
        descriptionParagraphs: [
          "Choose from a massive catalog of hundreds of pre-designed premium patterns, including pinstripes, geometric grids, rice paper textures, and elegant fading gradients.",
          "These designs beautifully break up the monotony of clear glass, adding depth and character to modern office spaces and upscale hospitality venues.",
          "Crucially, these patterns also serve as critical safety distraction markers, preventing painful and litigious collisions with seemingly invisible glass walls."
        ],
        descriptionImage: "/sub-solutions/glass-design.png",
        stats: [
          { label: "Options", value: "100+ Patterns" },
          { label: "Lifespan", value: "Long Term" },
          { label: "Style", value: "Ultra Modern" }
        ],
        features: [
          { title: "Visual Appeal", desc: "Elevates standard interior design instantly into premium territory.", icon: "Layers" },
          { title: "Safety Marker", desc: "Visually indicates glass presence, preventing severe walk-through collisions.", icon: "Shield" },
          { title: "Cost Effective", desc: "A fraction of the cost and lead-time of factory-etched glass.", icon: "Zap" }
        ],
        specs: [
          { label: "Solution Type", value: "Pre-Patterned Decorative Film" },
          { label: "Design Options", value: "Stripes, Dots, Gradients, Organic Textures" },
          { label: "Light Transmission", value: "Varies Highly by Pattern Density" },
          { label: "Removability", value: "Leaves no residue upon lease expiration" },
          { label: "Thickness", value: "2 Mil Polyester" }
        ]
      },
      "branding": {
        name: "Corporate Branding",
        slug: "branding",
        shortDescription: "Incorporate pristine logos and typography onto your glass surfaces.",
        subtitle: "Make your office space distinctly and unforgettably yours.",
        heroImage: "/sub-solutions/branding.png",
        descriptionTitle: "Seamless Corporate Identity Integration.",
        descriptionParagraphs: [
          "Your brand is your most valuable asset. We can computer-cut your corporate logos, motivational mottos, and precise typography out of high-quality frosted, dusted, or solidly colored vinyl films.",
          "Applied flawlessly to boardroom doors, main reception entrances, or glass dividing walls, it provides a highly professional, permanent-looking brand presence.",
          "Unlike painted or etched glass, our precision-cut graphics can be easily removed or updated when your branding evolves or when relocating to a new suite."
        ],
        descriptionImage: "/sub-solutions/branding.png",
        stats: [
          { label: "Customization", value: "Infinite" },
          { label: "Precision", value: "Laser/Plotter" },
          { label: "Finish", value: "Frost/Color Match" }
        ],
        features: [
          { title: "Precision Cut", desc: "Exact vector-based brand matching for complex typography.", icon: "Zap" },
          { title: "Professional Finish", desc: "Looks indistinguishable from expensive custom frosted glass.", icon: "Shield" },
          { title: "Wayfinding", desc: "Perfect for clear, stylish suite numbers, directories, and arrows.", icon: "Layers" }
        ],
        specs: [
          { label: "Solution Type", value: "Plotted / Cut Graphics" },
          { label: "Cutting Method", value: "Precision Computerized Vinyl Plotter" },
          { label: "Materials", value: "Frosted, Dusted Crystal, Opaque, Translucent Colors" },
          { label: "Transfer Method", value: "Pre-masked Application Tape System" },
          { label: "Durability", value: "5 to 10 Years Interior" }
        ]
      },
      "custom-designs": {
        name: "Custom Printed Murals",
        slug: "custom-designs",
        shortDescription: "Full-color, high-resolution printed murals and bespoke graphics.",
        subtitle: "If you can imagine it, we can print and flawlessly install it.",
        heroImage: "/sub-solutions/custom-designs.png",
        descriptionTitle: "Turn any glass wall into a stunning canvas.",
        descriptionParagraphs: [
          "Utilizing advanced, optically clear printable polyester films and cutting-edge UV/Latex printing technology, we can print full-color photography, complex vector artwork, and massive custom murals directly for glass application.",
          "The unprinted areas of the film remain perfectly, optically clear, creating an illusion that the graphics are floating directly on or within the glass itself.",
          "This technology allows for breathtaking visual displays in retail storefronts, museum exhibits, creative agency offices, and modern hospital pediatric wards."
        ],
        descriptionImage: "/sub-solutions/custom-designs.png",
        stats: [
          { label: "Color Gamut", value: "Full CMYK+W" },
          { label: "Resolution", value: "Photo Quality HD" },
          { label: "Scale", value: "Unlimited" }
        ],
        features: [
          { title: "High Res", desc: "Flawless photo-quality printing direct to durable film.", icon: "Sun" },
          { title: "Optically Clear", desc: "Unprinted negative space areas remain completely invisible.", icon: "Layers" },
          { title: "Impactful", desc: "Allows for massive, multi-panel murals for lobbies and retail.", icon: "Zap" }
        ],
        specs: [
          { label: "Solution Type", value: "Printed Optically Clear Film" },
          { label: "Print Method", value: "High-Def UV / Latex Inkjet" },
          { label: "Color Gamut", value: "CMYK + High-Opacity White Ink" },
          { label: "Substrate", value: "Ultra-Clear PET Polyester" },
          { label: "Warranty", value: "Varies heavily based on UV Sun Exposure" }
        ]
      }
    }
  },
  "health-and-hygiene": {
    name: "Health & Hygiene",
    slug: "health-and-hygiene",
    shortDescription: "Active surface protection for healthier, safer environments.",
    heroImage: "/solutions/health-and-hygiene.png",
    heroSubtitle: "Proactively mitigate the spread of pathogens on high-touch surfaces.",
    descriptionTitle: "Continuous, 24/7 active microbial inhibition.",
    descriptionParagraphs: [
      "In a world increasingly conscious of hygiene and public health, routine physical cleaning protocols, while essential, are not always enough. Surfaces can become re-contaminated the moment they are touched.",
      "Our cutting-edge hygiene solutions provide an active, invisible layer of defense that works around the clock to inhibit bacterial and fungal growth between your routine facility cleanings.",
      "These specialized films are critical infrastructure for hospitals, mass transit systems, schools, and high-traffic retail environments looking to protect their patrons and staff."
    ],
    descriptionImage: "/solutions/health-and-hygiene.png",
    subSolutions: {
      "antimicrobial": {
        name: "Antimicrobial Surface Films",
        slug: "antimicrobial",
        shortDescription: "Advanced silver ion technology to actively inhibit bacteria and mold.",
        subtitle: "Essential, continuous protection for high-touch public areas.",
        heroImage: "/sub-solutions/antimicrobial.png",
        descriptionTitle: "Self-cleaning surface engineering.",
        descriptionParagraphs: [
          "Our antimicrobial films are infused at the manufacturing level with powerful silver ion (Ag+) technology. When bacteria or mold land on the surface, the silver ions aggressively disrupt their cellular function, preventing them from multiplying and surviving.",
          "This technology is completely non-toxic to humans but devastating to microbes. Because the silver is embedded in the film, it cannot be washed off and remains active 24/7.",
          "When applied to highly trafficked touchscreens, door handles, push plates, and reception desks, it drastically reduces the overall microbial load in the facility, providing a significantly safer environment."
        ],
        descriptionImage: "/sub-solutions/antimicrobial.png",
        stats: [
          { label: "Efficacy", value: "99.9% Kill Rate" },
          { label: "Active State", value: "24/7 Continuous" },
          { label: "Safety", value: "100% Non-Toxic" }
        ],
        features: [
          { title: "Silver Ion Tech", desc: "Utilizes a safe, natural, and highly effective antibacterial agent.", icon: "Shield" },
          { title: "Continuous Action", desc: "Actively works to destroy microbes between physical janitorial cleanings.", icon: "Zap" },
          { title: "Highly Durable", desc: "Withstands heavy, abrasive use on public touchscreens and handles.", icon: "Layers" }
        ],
        specs: [
          { label: "Solution Type", value: "Antimicrobial Protective Coating" },
          { label: "Active Agent", value: "Embedded Silver Ion (Ag+)" },
          { label: "Efficacy Rate", value: "99.9% Microbial Reduction (ISO 22196)" },
          { label: "Tested Against", value: "Staphylococcus aureus, E. Coli, MRSA" },
          { label: "Cleaning Compatibility", value: "Withstands aggressive Hospital-Grade Disinfectants" }
        ]
      }
    }
  },
  "interior-enhancement": {
    name: "Interior Enhancement",
    slug: "interior-enhancement",
    shortDescription: "Radically renovate and upcycle surfaces without the demolition.",
    heroImage: "/solutions/interior-enhancement.png",
    heroSubtitle: "Transform spaces overnight with hyper-realistic architectural finishes.",
    descriptionTitle: "Sustainable upcycling and premium visual upgrades.",
    descriptionParagraphs: [
      "Why tear down solid walls, rip out elevators, or replace expensive casework just because the finish is outdated? Demolition is expensive, noisy, dusty, and environmentally wasteful.",
      "Our interior enhancement solutions utilize advanced, 3D-conformable architectural vinyls to completely change the look, feel, and texture of existing surfaces in a fraction of the time.",
      "By upcycling your existing infrastructure, you save massive amounts of capital budget, avoid operational downtime, and prevent tons of waste from entering local landfills."
    ],
    descriptionImage: "/solutions/interior-enhancement.png",
    subSolutions: {
      "interior-wrapping": {
        name: "Architectural Interior Wrapping",
        slug: "interior-wrapping",
        shortDescription: "Apply rich wood, metal, and stone textures directly to existing surfaces.",
        subtitle: "The sustainable, hyper-realistic, and cost-effective alternative to traditional renovation.",
        heroImage: "/sub-solutions/interior-wrapping.png",
        descriptionTitle: "True Architectural Alchemy.",
        descriptionParagraphs: [
          "Using highly conformable, premium architectural wraps (such as 3M DI-NOC or Belbien), we can take a standard, scratched metal elevator door and make it look and feel exactly like rich, textured mahogany or brushed champagne steel.",
          "These finishes are not just flat prints; they feature deeply embossed, tactile textures that fool both the eye and the hand. They are highly durable, water-resistant, and fire-rated for commercial use.",
          "Best of all, they can be applied rapidly and quietly. A hotel lobby or corporate elevator bank can be completely transformed overnight without disrupting business operations or generating a single speck of construction dust."
        ],
        descriptionImage: "/sub-solutions/interior-wrapping.png",
        stats: [
          { label: "Available Finishes", value: "1000+ Textures" },
          { label: "Install Speed", value: "Overnight Rapid" },
          { label: "Demo Waste", value: "Zero (Upcycled)" }
        ],
        features: [
          { title: "Tactile Realism", desc: "Deeply embossed; feels exactly like real wood, metal, leather, or stone.", icon: "Layers" },
          { title: "Highly Sustainable", desc: "Upcycle and modernize existing assets rather than throwing them away.", icon: "Zap" },
          { title: "Zero Downtime", desc: "Installs cleanly and quietly, even during normal business hours.", icon: "Shield" }
        ],
        specs: [
          { label: "Solution Type", value: "Architectural Vinyl Surface Wrapping" },
          { label: "Material Composition", value: "Premium Calendered PVC with Comply Air-Release" },
          { label: "Fire Rating", value: "Class A (ASTM E84) for Commercial Use" },
          { label: "Thickness", value: "8 Mil (Heavy Duty & Impact Resistant)" },
          { label: "Conformability", value: "Complex 3D Heat Conformable for compound curves" }
        ]
      }
    }
  }
};
