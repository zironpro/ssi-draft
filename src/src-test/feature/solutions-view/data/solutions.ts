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
    heroImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
    heroSubtitle: "Take control of your indoor climate.",
    descriptionTitle: "Efficient thermal management.",
    descriptionParagraphs: [
      "Uncontrolled solar heat can make spaces uninhabitable and drastically increase energy costs.",
      "Our solar control solutions mitigate these issues at the source—the glass—providing instant relief and long-term savings."
    ],
    descriptionImage: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2070&auto=format&fit=crop",
    subSolutions: {
      "heat-reduction": {
        name: "Heat Reduction",
        slug: "heat-reduction",
        shortDescription: "Lower interior temperatures by rejecting solar infrared rays.",
        subtitle: "Keep your space cool and your energy bills low.",
        heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Advanced Thermal Rejection",
        descriptionParagraphs: [
          "Our heat reduction solutions utilize advanced spectrally selective technology to target the specific wavelengths of light responsible for heat gain.",
          "By bouncing this energy away before it enters the building, HVAC systems operate more efficiently, resulting in massive energy savings."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        stats: [
          { label: "Heat Rejected", value: "Up to 82%" },
          { label: "Cooling Cost Drop", value: "Up to 30%" },
          { label: "ROI Timeframe", value: "2-5 Years" }
        ],
        features: [
          { title: "Energy Savings", desc: "Drastically reduces AC load and wear.", icon: "Zap" },
          { title: "Consistent Temps", desc: "Eliminates hot and cold spots.", icon: "Sun" },
          { title: "Carbon Reduction", desc: "Lowers your building's carbon footprint.", icon: "Layers" }
        ],
        specs: [
          { label: "Solution Type", value: "Thermal Reflection/Absorption" },
          { label: "Total Solar Energy Rejected (TSER)", value: "Up to 82%" },
          { label: "Solar Heat Gain Coefficient (SHGC)", value: "0.24" },
          { label: "U-Value", value: "0.98" },
          { label: "Durability", value: "Scratch-Resistant Hardcoat" }
        ]
      },
      "glare-reduction": {
        name: "Glare Reduction",
        slug: "glare-reduction",
        shortDescription: "Eliminate blinding light and screen glare.",
        subtitle: "Improve comfort and productivity.",
        heroImage: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Soften the Light, Save Your Eyes",
        descriptionParagraphs: [
          "Direct sunlight can make computer screens unreadable and cause severe eye strain.",
          "Our glare reduction solutions filter out harsh light while maintaining optical clarity, creating a comfortable environment for work and relaxation."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Glare Reduced", value: "Up to 93%" },
          { label: "Clarity", value: "High Optic" },
          { label: "Eye Strain", value: "Reduced 80%" }
        ],
        features: [
          { title: "Screen Clarity", desc: "No more squinting at monitors.", icon: "Sun" },
          { title: "True Colors", desc: "Maintains exterior color accuracy.", icon: "Layers" },
          { title: "Soft Lighting", desc: "Diffuses harsh, direct sunlight.", icon: "Shield" }
        ],
        specs: [
          { label: "Solution Type", value: "Light Filtration / Tinting" },
          { label: "Glare Reduction Rating", value: "93%" },
          { label: "Visible Light Transmitted (VLT)", value: "5% - 45%" },
          { label: "Visible Light Reflected", value: "Low Interior Reflection" },
          { label: "Material", value: "Dyed / Ceramic Hybrid" }
        ]
      },
      "uv-protection": {
        name: "UV Protection",
        slug: "uv-protection",
        shortDescription: "Block harmful ultraviolet rays.",
        subtitle: "Preserve your health and your interiors.",
        heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Total UV Defense",
        descriptionParagraphs: [
          "UV rays are the leading cause of fading for furniture, hardwood floors, and artwork. They also pose significant skin health risks.",
          "Our solutions block over 99% of these harmful rays, functioning like a permanent sunscreen for your building."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "UV Blocked", value: "99.9%" },
          { label: "Fade Reduction", value: "Significant" },
          { label: "SPF Equivalent", value: "285+" }
        ],
        features: [
          { title: "Anti-Fade", desc: "Protects valuable furnishings from sun damage.", icon: "Shield" },
          { title: "Skin Safe", desc: "Recommended by the Skin Cancer Foundation.", icon: "Sun" },
          { title: "Invisible", desc: "Available in completely clear variants.", icon: "Layers" }
        ],
        specs: [
          { label: "Solution Type", value: "UV Rejection Coating" },
          { label: "UV Spectrum Blocked", value: "300 - 380 nm" },
          { label: "UV Rejection %", value: "99.9%" },
          { label: "Visible Light Transmitted", value: "Up to 89%" },
          { label: "Warranty", value: "Lifetime" }
        ]
      }
    }
  },
  "safety-and-security": {
    name: "Safety & Security",
    slug: "safety-and-security",
    shortDescription: "Comprehensive protection for life and property.",
    heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    heroSubtitle: "Mitigate threats from break-ins, accidents, and severe weather.",
    descriptionTitle: "Fortify your glass surfaces.",
    descriptionParagraphs: [
      "Glass is naturally fragile, making it the most vulnerable entry point of any structure.",
      "Our security solutions reinforce glass, turning it into a robust barrier against external threats."
    ],
    descriptionImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    subSolutions: {
      "glass-protection": {
        name: "Glass Protection",
        slug: "glass-protection",
        shortDescription: "Shield delicate glass surfaces from scratching and vandalism.",
        subtitle: "Preserve the pristine condition of your windows.",
        heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Sacrificial Defense",
        descriptionParagraphs: [
          "Glass protection solutions provide a sacrificial layer that takes the brunt of scratches, graffiti, and acid etching.",
          "When damaged, the layer is simply peeled away and replaced, saving the immense cost of replacing the actual glass panel."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Cost Savings", value: "High" },
          { label: "Thickness", value: "4-6 Mil" },
          { label: "Clarity", value: "100%" }
        ],
        features: [
          { title: "Replaceable", desc: "Easily swapped out after vandalism.", icon: "Layers" },
          { title: "Anti-Graffiti", desc: "Resists acid etching and spray paint.", icon: "Shield" },
          { title: "Cost Effective", desc: "Cheaper than replacing glass panes.", icon: "Zap" }
        ],
        specs: [
          { label: "Solution Type", value: "Sacrificial Surface Protection" },
          { label: "Film Thickness", value: "4 Mil or 6 Mil" },
          { label: "Adhesive Type", value: "Removable Clear Acrylic" },
          { label: "Hardcoat", value: "Anti-Scratch Polyurethane" },
          { label: "Acid Resistance", value: "High" }
        ]
      },
      "shatter-protection": {
        name: "Shatter Protection",
        slug: "shatter-protection",
        shortDescription: "Prevent hazardous glass shards from causing injury.",
        subtitle: "Essential safety for accidental impacts and extreme weather.",
        heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Containment and Safety",
        descriptionParagraphs: [
          "When standard glass breaks, it splinters into jagged, dangerous shards.",
          "Our shatter protection solutions hold these broken pieces tightly together via high-strength adhesives, preventing injury during accidents, earthquakes, or storms."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1541888045612-9c3fdf9bc3b6?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Safety Rating", value: "Class A" },
          { label: "Impact Resist", value: "High" },
          { label: "Thickness", value: "4-8 Mil" }
        ],
        features: [
          { title: "Shard Containment", desc: "Holds broken glass securely in the frame.", icon: "Shield" },
          { title: "Code Compliance", desc: "Meets human impact standards.", icon: "Zap" },
          { title: "Invisible", desc: "Clear films provide invisible defense.", icon: "Layers" }
        ],
        specs: [
          { label: "Solution Type", value: "Impact Resistance / Containment" },
          { label: "Standards Met", value: "ANSI Z97.1, CPSC 16 CFR 1201" },
          { label: "Tensile Strength", value: "28,000 psi" },
          { label: "Peel Strength", value: "> 5 lbs/inch" },
          { label: "Break Strength", value: "115 lbs/inch" }
        ]
      },
      "security": {
        name: "Security",
        slug: "security",
        shortDescription: "Delay forced entry and deter burglars.",
        subtitle: "Heavy-duty fortification against break-ins.",
        heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Passive Security perimeters.",
        descriptionParagraphs: [
          "Intruders rely on quick access. Our security solutions vastly increase the time and effort required to breach a glass door or window.",
          "By delaying entry, you provide crucial time for alarms to sound and authorities to respond, often causing the attacker to abandon the attempt entirely."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
        stats: [
          { label: "Entry Delay", value: "Up to 3 Mins" },
          { label: "Thickness", value: "8-14 Mil" },
          { label: "Attachment", value: "Silicone" }
        ],
        features: [
          { title: "Tear Resistant", desc: "Multi-layered strength resists blunt force.", icon: "Shield" },
          { title: "Blast Mitigation", desc: "Absorbs shockwaves from explosions.", icon: "Zap" },
          { title: "Intruder Deterrent", desc: "Makes glass entry prohibitively difficult.", icon: "Layers" }
        ],
        specs: [
          { label: "Solution Type", value: "Forced Entry Deterrence" },
          { label: "Film Thickness", value: "8 Mil to 14 Mil" },
          { label: "Tensile Strength", value: "> 30,000 psi" },
          { label: "Tear Resistance", value: "Multi-layered micro-laminate" },
          { label: "Attachment System", value: "Wet Glaze Structural Silicone Compatible" }
        ]
      }
    }
  },
  "privacy": {
    name: "Privacy",
    slug: "privacy",
    shortDescription: "Control visibility without sacrificing aesthetic appeal.",
    heroImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
    heroSubtitle: "Tailored privacy solutions for every environment.",
    descriptionTitle: "Discrete spaces, brilliant design.",
    descriptionParagraphs: [
      "Whether you need to obscure a boardroom or add daytime privacy to your living room, we offer tailored solutions.",
      "Achieve the exact level of opacity and light transmission your space demands."
    ],
    descriptionImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop",
    subSolutions: {
      "office-privacy": {
        name: "Office Privacy",
        slug: "office-privacy",
        shortDescription: "Obscure glass partitions and meeting rooms.",
        subtitle: "Maintain an open feel while protecting sensitive information.",
        heroImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Corporate Discretion.",
        descriptionParagraphs: [
          "Modern offices love glass walls, but they lack confidentiality. Our office privacy solutions provide sandblasted and frosted aesthetics.",
          "You can obscure meeting rooms and HR departments without blocking the flow of natural light across the floorplan."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1574360773954-477005e83a65?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Privacy Level", value: "24/7 Total" },
          { label: "Light Trans", value: "Diffused" },
          { label: "Texture", value: "Sandblast" }
        ],
        features: [
          { title: "Diffused Light", desc: "Keeps the office bright and welcoming.", icon: "Sun" },
          { title: "Distraction Bands", desc: "Can be cut into modern stripes.", icon: "Layers" },
          { title: "Professional", desc: "Clean, corporate aesthetic.", icon: "Shield" }
        ],
        specs: [
          { label: "Solution Type", value: "Translucent Frost" },
          { label: "Opacity", value: "High (24/7 Privacy)" },
          { label: "Light Transmission", value: "Diffused Ambient Light" },
          { label: "Finish", value: "Sandblasted Matte" },
          { label: "Customization", value: "Plotter Cut Compatible" }
        ]
      },
      "residential-privacy": {
        name: "Residential Privacy",
        slug: "residential-privacy",
        shortDescription: "Keep prying eyes out of your home.",
        subtitle: "Daytime and nighttime solutions for ultimate comfort.",
        heroImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Your home is your sanctuary.",
        descriptionParagraphs: [
          "Enjoy your views without feeling like you are living in a fishbowl. Our residential solutions utilize reflective technologies to create daytime privacy.",
          "For bathrooms and street-facing windows, we offer beautiful frosted and textured options for 24-hour obscurity."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1542868840-7521094dc152?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Privacy Effect", value: "One-Way Mirror" },
          { label: "Light Trans", value: "25-35%" },
          { label: "Heat Block", value: "High" }
        ],
        features: [
          { title: "Unobstructed Views", desc: "See out while they can't see in.", icon: "Layers" },
          { title: "Cooler Rooms", desc: "Rejects massive amounts of heat.", icon: "Sun" },
          { title: "Bathroom Frost", desc: "Available for 24/7 night privacy.", icon: "Shield" }
        ],
        specs: [
          { label: "Solution Type", value: "Reflective / Textured" },
          { label: "Daytime Privacy", value: "Excellent (Reflective)" },
          { label: "Nighttime Privacy", value: "Requires Blinds (Reflective) or Frost" },
          { label: "Visible Reflectance", value: "Up to 60% Exterior" },
          { label: "Total Energy Rejected", value: "Up to 70%" }
        ]
      },
      "commercial-privacy": {
        name: "Commercial Privacy",
        slug: "commercial-privacy",
        shortDescription: "Hide storage, construction, and mechanical areas.",
        subtitle: "Clean, uniform facades for commercial properties.",
        heroImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Clean up your exterior aesthetic.",
        descriptionParagraphs: [
          "Commercial properties often need to hide dropped ceilings, messy stockrooms, or active construction sites.",
          "Our completely opaque blackout and whiteout solutions provide a solid, clean architectural finish from the outside while blocking 100% of the view."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Light Trans", value: "0%" },
          { label: "Opacity", value: "Total Block" },
          { label: "Finish", value: "Solid" }
        ],
        features: [
          { title: "Total Blockout", desc: "Solid architectural finish.", icon: "Shield" },
          { title: "Hides Mess", desc: "Perfect for spandrel glass.", icon: "Layers" },
          { title: "Uniform Exterior", desc: "Creates a cohesive building facade.", icon: "Zap" }
        ],
        specs: [
          { label: "Solution Type", value: "Opaque Masking" },
          { label: "Visible Light Transmitted", value: "0%" },
          { label: "Privacy Level", value: "Total 100% Two-Way" },
          { label: "Thickness", value: "2 Mil" },
          { label: "Colors", value: "Deep Black / Pure White" }
        ]
      }
    }
  },
  "decorative": {
    name: "Decorative",
    slug: "decorative",
    shortDescription: "Transform ordinary glass into extraordinary design features.",
    heroImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop",
    heroSubtitle: "Endless creative possibilities for architectural glass.",
    descriptionTitle: "Customized aesthetics without the custom glass price.",
    descriptionParagraphs: [
      "Why replace expensive glass when you can upgrade it? Our decorative solutions allow for endless manipulation of glass surfaces.",
      "Incorporate branding, wayfinding, or striking visual patterns directly onto your existing windows and partitions."
    ],
    descriptionImage: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=2070&auto=format&fit=crop",
    subSolutions: {
      "glass-design": {
        name: "Glass Design",
        slug: "glass-design",
        shortDescription: "Apply patterns, gradients, and textures to flat glass.",
        subtitle: "Architectural intrigue applied seamlessly.",
        heroImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Patterns and Gradients.",
        descriptionParagraphs: [
          "Choose from hundreds of pre-designed patterns including stripes, geometric shapes, and elegant fading gradients.",
          "These designs break up the monotony of clear glass while also serving as critical safety distraction markers."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1542665952-66b1dd6f4209?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Options", value: "100+" },
          { label: "Lifespan", value: "Long Term" },
          { label: "Style", value: "Modern" }
        ],
        features: [
          { title: "Visual Appeal", desc: "Elevates interior design instantly.", icon: "Layers" },
          { title: "Safety Marker", desc: "Prevents glass collisions.", icon: "Shield" },
          { title: "Cost Effective", desc: "Cheaper than etched glass.", icon: "Zap" }
        ],
        specs: [
          { label: "Solution Type", value: "Patterned Film" },
          { label: "Design Options", value: "Stripes, Dots, Gradients, Textures" },
          { label: "Light Transmission", value: "Varies Highly by Pattern" },
          { label: "Removability", value: "Clean Removal for Leases" },
          { label: "Thickness", value: "2 Mil" }
        ]
      },
      "branding": {
        name: "Branding",
        slug: "branding",
        shortDescription: "Incorporate logos and typography onto your glass surfaces.",
        subtitle: "Make your office space distinctly yours.",
        heroImage: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Corporate Identity Integration.",
        descriptionParagraphs: [
          "We can computer-cut your corporate logos, mottos, and typography out of high-quality frosted or colored films.",
          "Applied to boardroom doors or main entrances, it provides a highly professional, permanent-looking brand presence that can be easily removed when leases end."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Custom", value: "Infinite" },
          { label: "Precision", value: "Laser/Plotter" },
          { label: "Finish", value: "Frost/Color" }
        ],
        features: [
          { title: "Precision Cut", desc: "Exact brand matching for typography.", icon: "Zap" },
          { title: "Professional", desc: "Looks like custom frosted glass.", icon: "Shield" },
          { title: "Wayfinding", desc: "Great for suite numbers and arrows.", icon: "Layers" }
        ],
        specs: [
          { label: "Solution Type", value: "Plotted Graphics" },
          { label: "Cutting Method", value: "Precision Vinyl Plotter" },
          { label: "Materials", value: "Frosted, Dusted, Opaque, Translucent" },
          { label: "Transfer Method", value: "Application Tape System" },
          { label: "Durability", value: "5+ Years Interior" }
        ]
      },
      "custom-designs": {
        name: "Custom Designs",
        slug: "custom-designs",
        shortDescription: "Full-color printed murals and bespoke graphics.",
        subtitle: "If you can imagine it, we can print and install it.",
        heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Turn glass into a canvas.",
        descriptionParagraphs: [
          "Utilizing advanced optically clear printable films, we can print full-color photographs, complex artwork, and custom murals directly for glass application.",
          "This allows for breathtaking visual displays in retail environments, museums, and creative agencies."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Color", value: "Full CMYK" },
          { label: "Resolution", value: "Photo Quality" },
          { label: "Scale", value: "Massive" }
        ],
        features: [
          { title: "High Res", desc: "Photo-quality printing direct to film.", icon: "Sun" },
          { title: "Optically Clear", desc: "Unprinted areas remain invisible.", icon: "Layers" },
          { title: "Impactful", desc: "Massive murals for lobbies and retail.", icon: "Zap" }
        ],
        specs: [
          { label: "Solution Type", value: "Printed Optically Clear Film" },
          { label: "Print Method", value: "UV / Latex Inkjet" },
          { label: "Color Gamut", value: "CMYK + White Ink" },
          { label: "Substrate", value: "Optically Clear PET" },
          { label: "Warranty", value: "Varies by Sun Exposure" }
        ]
      }
    }
  },
  "health-and-hygiene": {
    name: "Health & Hygiene",
    slug: "health-and-hygiene",
    shortDescription: "Active surface protection for healthier environments.",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    heroSubtitle: "Mitigate the spread of pathogens on high-touch surfaces.",
    descriptionTitle: "Continuous, 24/7 microbial inhibition.",
    descriptionParagraphs: [
      "In a world increasingly conscious of hygiene, regular cleaning protocols aren't always enough.",
      "Our solutions provide an active layer of defense that works around the clock to inhibit bacterial growth between routine cleanings."
    ],
    descriptionImage: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2070&auto=format&fit=crop",
    subSolutions: {
      "antimicrobial": {
        name: "Antimicrobial",
        slug: "antimicrobial",
        shortDescription: "Silver ion technology to inhibit bacteria and mold.",
        subtitle: "Essential protection for hospitals, schools, and public transport.",
        heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
        descriptionTitle: "Self-cleaning surface engineering.",
        descriptionParagraphs: [
          "Antimicrobial films are infused with silver ion technology. When bacteria land on the surface, the silver ions disrupt their cellular function, preventing them from multiplying.",
          "Applied to touchscreens, door handles, and reception desks, it drastically reduces the overall microbial load in the facility."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Efficacy", value: "99.9%" },
          { label: "Active", value: "24/7" },
          { label: "Safe", value: "Non-Toxic" }
        ],
        features: [
          { title: "Silver Ion", desc: "Safe, natural antibacterial agent.", icon: "Shield" },
          { title: "Continuous", desc: "Works between physical cleanings.", icon: "Zap" },
          { title: "Durable", desc: "Withstands heavy use on touchscreens.", icon: "Layers" }
        ],
        specs: [
          { label: "Solution Type", value: "Antimicrobial Coating" },
          { label: "Active Agent", value: "Silver Ion (Ag+)" },
          { label: "Efficacy Rate", value: "99.9% Microbial Reduction" },
          { label: "Tested Against", value: "Staph, E. Coli, MRSA" },
          { label: "Cleaning Compatibility", value: "Withstands Hospital-Grade Disinfectants" }
        ]
      }
    }
  },
  "interior-enhancement": {
    name: "Interior Enhancement",
    slug: "interior-enhancement",
    shortDescription: "Renovate surfaces without demolition.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    heroSubtitle: "Transform spaces with hyper-realistic architectural finishes.",
    descriptionTitle: "Upcycle and upgrade.",
    descriptionParagraphs: [
      "Why tear down walls or replace expensive casework when you can resurface them?",
      "Our interior enhancement solutions utilize advanced vinyls to completely change the look and feel of existing surfaces."
    ],
    descriptionImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    subSolutions: {
      "interior-wrapping": {
        name: "Interior Wrapping",
        slug: "interior-wrapping",
        shortDescription: "Apply wood, metal, and stone textures to existing surfaces.",
        subtitle: "The sustainable, cost-effective alternative to traditional renovation.",
        heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Architectural alchemy.",
        descriptionParagraphs: [
          "Using conformable architectural wraps like 3M DI-NOC, we can take a standard metal door and make it look and feel exactly like rich mahogany.",
          "These finishes feature tactile textures, are highly durable, and can be applied rapidly without the dust, noise, and downtime of traditional construction."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
        stats: [
          { label: "Finishes", value: "500+" },
          { label: "Speed", value: "Fast Install" },
          { label: "Waste", value: "Zero Demo" }
        ],
        features: [
          { title: "Tactile", desc: "Feels like real wood, metal or stone.", icon: "Layers" },
          { title: "Sustainable", desc: "Upcycle rather than throw away.", icon: "Zap" },
          { title: "No Downtime", desc: "Installs quietly during business hours.", icon: "Shield" }
        ],
        specs: [
          { label: "Solution Type", value: "Architectural Vinyl Wrapping" },
          { label: "Material Composition", value: "Calendered PVC with Air-Release" },
          { label: "Fire Rating", value: "Class A (ASTM E84)" },
          { label: "Thickness", value: "8 Mil (Heavy Duty)" },
          { label: "Conformability", value: "3D Heat Conformable" }
        ]
      }
    }
  }
};
