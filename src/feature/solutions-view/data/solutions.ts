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
      "Uncontrolled solar heat gain burdens HVAC equipment and drastically drives up cooling energy costs in extreme climates like the UAE.",
      "Solar Gard spectrally selective window films reject up to 82% of solar heat and 99% of harmful UV rays directly at the glass envelope, delivering consistent indoor comfort and rapid energy savings."
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
          "Standard glazing allows excessive infrared radiation to enter, creating hot spots and escalating air conditioning loads.",
          "Our nano-ceramic and metallized films reflect up to 82% of infrared heat while preserving natural light, reducing cooling costs by up to 30% with ROI in 2-5 years."
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
          "Intense sunlight causes blinding reflections on screens and monitors, resulting in eye strain and reduced workplace productivity.",
          "Solar Gard glare reduction films filter out up to 93% of harsh glare without dark interior shadowing, preserving true exterior views."
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
          "Ultraviolet radiation degrades expensive flooring, leather furniture, merchandise, and artwork while posing skin health risks.",
          "Our museum-grade UV films block 99.9% of damaging UVA and UVB rays (SPF 285+ equivalent), protecting interior assets permanently."
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
    name: "Solar Safety Film",
    slug: "safety-and-security",
    shortDescription: "Certified anti-shatter defense against impacts, forced entry, and severe storms.",
    heroImage: "/solutions/safety-and-security.png",
    heroSubtitle: "Engineered defense systems designed to hold shattered glass intact under extreme pressure.",
    descriptionTitle: "Fortify glass surfaces into certified anti-shatter safety barriers.",
    descriptionParagraphs: [
      "Glass is the most vulnerable component of any building envelope during accidents, severe storms, or forced entry attempts.",
      "Certified Solar Gard Solar Safety Film reinforces existing glazing with high-tensile polyester layers, binding shattered glass fragments firmly together to eliminate flying shard hazards and deter intrusion."
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
          "High-traffic glass, mirrors, and storefronts are susceptible to scratches, acid etching, and graffiti vandalism.",
          "Our optically clear sacrificial films absorb surface damage and can be quickly replaced at a fraction of the cost of new glass."
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
        name: "Anti-Shatter Protection",
        slug: "shatter-protection",
        shortDescription: "Prevent hazardous flying glass shards from causing severe injury.",
        subtitle: "Essential, invisible safety for accidental impacts and extreme weather.",
        heroImage: "/sub-solutions/shatter-protection.png",
        descriptionTitle: "Critical Containment and Life Safety",
        descriptionParagraphs: [
          "Unprotected annealed glass shatters into razor-sharp projectiles that present severe hazards to occupants during impacts or blasts.",
          "Solar Gard anti-shatter films use high-tack adhesives to hold fractured glass safely within the frame, meeting ANSI Z97.1 and CPSC safety glazing standards."
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
        subtitle: "Heavy-duty fortification against severe kinetic threats.",
        heroImage: "/sub-solutions/security.png",
        descriptionTitle: "Impenetrable Passive Security Perimeters",
        descriptionParagraphs: [
          "Smash-and-grab intruders rely on instant glass breakage for rapid unauthorized entry.",
          "Heavy-duty multi-laminate security films combined with structural silicone attachments delay forced entry by up to 3 minutes, giving security personnel critical response time."
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
    name: "Privacy Films",
    slug: "privacy",
    shortDescription: "Control visibility without sacrificing aesthetic appeal or natural light.",
    heroImage: "/solutions/privacy.png",
    heroSubtitle: "Tailored privacy solutions for every environment—from boardrooms to bathrooms.",
    descriptionTitle: "Discrete spaces, brilliant architectural design.",
    descriptionParagraphs: [
      "Modern glass architecture requires thoughtful balancing of external openness with essential interior confidentiality.",
      "Our privacy film solutions provide customized daytime one-way visibility, soft translucent frosting, or total blackout without bulky window coverings."
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
          "Glass meeting rooms and executive suites frequently lack visual privacy for sensitive discussions and presentations.",
          "Frosted and dusted films diffuse ambient daylight across floorplans while obscuring sightlines, available in custom distraction bands and branded patterns."
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
          "Dense living environments compromise residential seclusion unless windows are covered with heavy blinds.",
          "Dual-reflective films provide a daytime one-way mirror effect for outdoor privacy with crystal-clear outward visibility and heat control."
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
          "Commercial properties and retail spaces require clean concealment of storage areas, MEP fixtures, and construction zones.",
          "Complete opaque blackout and whiteout films block 100% of visible light, creating uniform, sleek exterior spandrel facades."
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
    name: "Decorative Films",
    slug: "decorative",
    shortDescription: "Transform ordinary glass into extraordinary bespoke design features.",
    heroImage: "/solutions/decorative.png",
    heroSubtitle: "Endless creative possibilities for architectural glass and blank walls.",
    descriptionTitle: "Customized premium aesthetics without the custom glass price tag.",
    descriptionParagraphs: [
      "Custom glass styling often comes with exorbitant lead times and the high cost of factory-etched glass.",
      "Our architectural decorative films transform standard flat glass on-site with frosted textures, geometric gradients, and custom plotted graphics with clean removability."
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
          "Clear glass partitions can look stark and create walk-through safety hazards in busy environments.",
          "Choose from hundreds of patterns, gradients, and textures that serve both as high-end aesthetic features and visible safety distraction markers."
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
          "Incorporate crisp corporate identities, logos, and wayfinding directly onto glazed entrances and conference rooms.",
          "Precision plotter-cut frosted and colored vinyls provide a permanent custom-etched appearance that remains simple to update when rebranding."
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
          "Large-scale murals and photo-quality displays can be printed directly onto ultra-clear architectural polyester films.",
          "Unprinted negative space remains optically clear, creating the visual impression of graphics floating seamlessly within the glass pane."
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
      "High-touch surfaces in public facilities, clinics, and offices require continuous hygiene protection between routine janitorial cycles.",
      "Our antimicrobial surface films utilize active silver ion (Ag+) technology to continuously inhibit bacterial and fungal proliferation 24/7."
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
          "Touchscreens, handrails, and door hardware can harbor pathogens within minutes of standard cleaning.",
          "Infused with silver ions, our antimicrobial films deliver a 99.9% reduction in microbes (ISO 22196 tested) while resisting hospital-grade chemical disinfectants."
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
    name: "Decorative Wraps",
    slug: "interior-enhancement",
    shortDescription: "Radically renovate and upcycle surfaces without demolition.",
    heroImage: "/solutions/interior-enhancement.png",
    heroSubtitle: "Transform spaces overnight with hyper-realistic architectural finishes.",
    descriptionTitle: "Sustainable upcycling and premium visual upgrades.",
    descriptionParagraphs: [
      "Traditional architectural renovation causes disruptive demolition, excessive noise, dust, and significant landfill waste.",
      "Our decorative wraps utilize 3D-conformable architectural vinyls to upcycle existing walls, doors, casework, and elevators with luxury finishes overnight."
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
          "Elevate dated interior surfaces with authentic wood grain, brushed metal, concrete, and stone textures.",
          "These durable, Class A fire-rated architectural vinyls apply quietly without dust or business disruption, delivering major savings over full replacement."
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
