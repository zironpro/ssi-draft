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
    name: "Safety & Security",
    slug: "safety-and-security",
    shortDescription: "Deter unwanted entries and protect against flying glass.",
    heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    heroSubtitle: "Engineered defense systems designed to hold shattered glass intact under extreme pressure.",
    descriptionTitle: "Invisible armor for your most vulnerable points of entry.",
    descriptionParagraphs: [
      "Glass is the weakest link in any building's security perimeter. Our Safety & Security films transform standard windows into highly resilient barriers.",
      "In the event of an impact, explosion, or severe weather, these heavy-duty films hold the shattered shards tightly together, preventing dangerous flying glass and deterring smash-and-grab burglaries.",
      "Completely optically clear, these films provide peace of mind without altering the appearance of your property."
    ],
    descriptionImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    subProducts: {
      "clear-safety-film": {
        name: "Clear Safety Film",
        slug: "clear-safety-film",
        shortDescription: "Optically clear protection against impact and shattering.",
        subtitle: "Uncompromising clarity meets industrial-strength protection.",
        heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "24/7 passive protection against forced entry and accidents.",
        descriptionParagraphs: [
          "Manufactured using heavy-duty polyester bonded by the industry's strongest adhesives, our Clear Safety Film creates an invisible shield on your windows.",
          "It buys crucial time during a break-in attempt, often deterring intruders entirely when the glass fails to yield immediately.",
          "It also provides life-saving protection during severe storms or accidental impacts by keeping hazardous glass shards contained."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Shatter Resistance", value: "Class A" },
          { label: "Visibility", value: "Clear" },
          { label: "UV Block", value: "99%" }
        ],
        features: [
          { title: "Tear Resistant", desc: "Multi-laminate construction resists tearing under stress.", icon: "Shield" },
          { title: "Optically Clear", desc: "Virtually undetectable once professionally installed.", icon: "Layers" },
          { title: "UV Protection", desc: "Blocks 99% of UV rays despite being completely clear.", icon: "Sun" }
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
        shortDescription: "Advanced anchoring for maximum structural integrity.",
        subtitle: "The ultimate reinforcement binding film to frame.",
        heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Securing the perimeter beyond the glass.",
        descriptionParagraphs: [
          "Safety film alone holds broken glass together, but if the impact is severe enough, the entire pane can be blown out of the window frame. Anchor Systems solve this problem.",
          "By physically attaching the safety-filmed glass to the window frame using structural silicone or mechanical profiles, anchor systems create a continuous, highly resistant barrier.",
          "This is the highest level of security available, recommended for government buildings, schools, and high-risk commercial properties."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1541888045612-9c3fdf9bc3b6?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Blast Mitigation", value: "GSA Level C" },
          { label: "Wind Load", value: "High" },
          { label: "Installation", value: "Wet/Dry Glaze" }
        ],
        features: [
          { title: "Structural Bond", desc: "Binds the filmed glass directly to the window frame.", icon: "Shield" },
          { title: "Blast Resistant", desc: "Absorbs and dissipates explosive blast energy.", icon: "Zap" },
          { title: "Custom Fit", desc: "Available in various profiles to match your existing window frames.", icon: "Layers" }
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
        shortDescription: "Heavy-duty tinted films designed for privacy and protection.",
        subtitle: "Dual-purpose protection: security meets solar control.",
        heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Combining shatter resistance with climate control.",
        descriptionParagraphs: [
          "Our tinted Safety Films offer a two-in-one solution. They provide the extreme tear resistance of our clear security films while simultaneously rejecting solar heat and glare.",
          "These films are perfect for facilities that require enhanced security but also suffer from intense sun exposure. The tinted finish adds daytime privacy, preventing outsiders from viewing interior layouts or valuables.",
          "Available in various shades and reflectivity levels to suit your aesthetic and performance needs."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
        stats: [
          { label: "Solar Energy Rejected", value: "Up to 70%" },
          { label: "Thickness", value: "8 Mil" },
          { label: "Privacy", value: "Daytime" }
        ],
        features: [
          { title: "Dual Action", desc: "Provides security and heat rejection simultaneously.", icon: "Shield" },
          { title: "Glare Reduction", desc: "Darker tints drastically reduce eye strain.", icon: "Sun" },
          { title: "Daytime Privacy", desc: "Reflective exterior prevents prying eyes.", icon: "Layers" }
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
    shortDescription: "Reject up to 82% of solar energy and significantly reduce air conditioning costs.",
    heroImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
    heroSubtitle: "The ultimate solution for heat rejection and energy efficiency without compromising natural light.",
    descriptionTitle: "Transform your glass into an invisible heat shield.",
    descriptionParagraphs: [
      "Our flagship Solar Control series represents the pinnacle of architectural window film technology. Designed to drastically reduce solar heat gain and eliminate harsh glare, this film allows you to enjoy natural light without the uncomfortable side effects.",
      "By rejecting up to 99% of harmful UV rays, it protects occupants' skin and significantly reduces the fading of interior furnishings, hardwood floors, and valuable artwork.",
      "It is an investment in comfort, energy efficiency, and aesthetic preservation."
    ],
    descriptionImage: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2070&auto=format&fit=crop",
    subProducts: {
      "lx-series": {
        name: "LX Series",
        slug: "lx-series",
        shortDescription: "Premium ceramic technology for maximum heat rejection.",
        subtitle: "Unmatched clarity combined with extraordinary infrared heat rejection.",
        heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "The absolute pinnacle of optical clarity and performance.",
        descriptionParagraphs: [
          "The LX Series utilizes advanced nano-ceramic technology to selectively filter the sun's spectrum. It blocks out the infrared heat and UV radiation while letting visible light pass through almost entirely undisturbed.",
          "Unlike traditional metalized films, the LX Series contains no dyes or metals, meaning it will never fade, corrode, or interfere with 5G, Wi-Fi, or cellular signals.",
          "It's the perfect choice for luxury residences and commercial spaces where preserving the original architectural aesthetic is paramount."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        stats: [
          { label: "UV Rejection", value: "99%" },
          { label: "Max Heat Control", value: "Yes" },
          { label: "Warranty", value: "Lifetime" }
        ],
        features: [
          { title: "Nano-Ceramic", desc: "Non-metalized construction ensures zero signal interference.", icon: "Layers" },
          { title: "Spectrally Selective", desc: "Targets infrared heat without darkening the glass.", icon: "Sun" },
          { title: "Zero Corrosion", desc: "Perfect for coastal and high-humidity environments.", icon: "Shield" }
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
        shortDescription: "Superior infrared rejection with clear visibility.",
        subtitle: "A balanced hybrid film offering exceptional glare reduction and thermal comfort.",
        heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        descriptionTitle: "Intelligent heat management for demanding environments.",
        descriptionParagraphs: [
          "Magnum IR is designed to tackle the most intense solar challenges. By integrating specialized infrared-absorbing particles, this film dramatically cuts down the heat entering your building.",
          "It features a subtle, neutral tint that reduces eye-straining glare while maintaining a highly natural view of the outside world.",
          "Ideal for office buildings and properties facing intense afternoon sun where cooling costs are a major concern."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "IR Rejection", value: "85%" },
          { label: "Glare Control", value: "High" },
          { label: "Warranty", value: "10 Years" }
        ],
        features: [
          { title: "Hybrid Tech", desc: "Combines dyed and ceramic technologies for superior performance.", icon: "Layers" },
          { title: "Glare Reduction", desc: "Significantly reduces eye strain for screen workers.", icon: "Sun" },
          { title: "Neutral Hue", desc: "Maintains the natural colors of your interior and exterior views.", icon: "Shield" }
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
        shortDescription: "Ultimate privacy and glare reduction in a deep black finish.",
        subtitle: "Unparalleled glare control with a sleek, architectural black aesthetic.",
        heroImage: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Maximum shading for maximum comfort.",
        descriptionParagraphs: [
          "Magnum Black is engineered for spaces that require intense glare reduction and a high degree of daytime privacy. Its deep, rich black color provides a striking modern look to any exterior façade.",
          "By absorbing and reflecting a massive amount of solar energy, it creates incredibly cool, comfortable interiors even in the harshest summer conditions.",
          "Perfect for server rooms, media rooms, and architectural projects demanding a dark, uniform exterior aesthetic."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Glare Reduction", value: "93%" },
          { label: "Privacy", value: "Maximum" },
          { label: "Aesthetic", value: "Deep Black" }
        ],
        features: [
          { title: "Extreme Glare Control", desc: "Eliminates almost all harsh glare on screens and monitors.", icon: "Sun" },
          { title: "Daytime Privacy", desc: "Prevents outsiders from seeing in during daylight hours.", icon: "Shield" },
          { title: "Modern Look", desc: "Provides a sleek, uniform dark finish to building exteriors.", icon: "Layers" }
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
        shortDescription: "Dual-Tone Solar Control Window Film designed to reduce heat and block harmful UV rays.",
        subtitle: "Advanced dual-tone solution for enhanced comfort and energy efficiency.",
        heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Grey / Silver / Grey Series \u2013 Dual Tone Solar Control Window Film",
        descriptionParagraphs: [
          "Solar Control Window Film is an advanced solution designed to reduce heat, block harmful UV rays, and improve indoor comfort in both residential and commercial spaces. In regions like Dubai, where sunlight intensity is high throughout the year, installing solar control films is essential.",
          "With modern technology, solar control window films not only enhance comfort but also protect interiors from fading caused by UV exposure. They also provide an added layer of safety by helping hold glass fragments together in case of breakage.",
          "By minimizing the amount of solar heat entering a building, these films help maintain cooler indoor temperatures, reducing the need for excessive air conditioning and lowering energy costs, contributing to more sustainable building practices."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Glare Reduction", value: "94%" },
          { label: "Total Solar Energy Rejected", value: "70%" },
          { label: "UV Blocked", value: ">99%" }
        ],
        features: [
          { title: "Dual-Tone Construction", desc: "Dual-Tone Grey / Silver / Grey Multilayer Construction for enhanced aesthetics.", icon: "Layers" },
          { title: "Heat & UV Rejection", desc: "Strong solar heat rejection and blocks 99% of harmful UV rays.", icon: "Sun" },
          { title: "Durable & Versatile", desc: "Durable construction suitable for commercial, office, and residential windows.", icon: "Shield" }
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
    name: "Privacy",
    slug: "privacy",
    shortDescription: "Achieve total or partial light block-out with premium textured and opaque films.",
    heroImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
    heroSubtitle: "Elegant solutions for isolating spaces without resorting to walls or blinds.",
    descriptionTitle: "Control your environment, control your visibility.",
    descriptionParagraphs: [
      "In modern open-plan offices and glass-heavy homes, privacy can become a luxury. Our privacy films offer a sleek, architectural alternative to heavy curtains or expensive frosted glass.",
      "Whether you need to obscure a conference room, hide a storage area, or add a subtle frost to a bathroom window, our films provide customized visibility control.",
      "They are durable, easily cleanable, and can be updated or removed if the purpose of the room changes."
    ],
    descriptionImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop",
    subProducts: {
      "frosted-film": {
        name: "Frosted Film",
        slug: "frosted-film",
        shortDescription: "Classic sandblasted look for elegant privacy.",
        subtitle: "The look of expensive sandblasted glass at a fraction of the cost.",
        heroImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Diffused light and discrete spaces.",
        descriptionParagraphs: [
          "Frosted film is the staple of commercial interior design. It perfectly mimics the look of acid-etched or sandblasted glass, providing 24-hour privacy while still allowing soft, diffused natural light to pass through.",
          "It is ideal for glass partitions, conference rooms, and exterior bathroom windows. It eliminates the feeling of being closed in while ensuring complete obscurity from both sides of the glass.",
          "Can be computer-cut into bands, logos, or geometric shapes for a custom aesthetic."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1574360773954-477005e83a65?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Light Transmission", value: "High" },
          { label: "Privacy Level", value: "24/7" },
          { label: "Texture", value: "Matte" }
        ],
        features: [
          { title: "Diffuses Light", desc: "Softens harsh lighting while keeping the room bright.", icon: "Sun" },
          { title: "24-Hour Privacy", desc: "Obscures views day and night, regardless of lighting.", icon: "Shield" },
          { title: "Fingerprint Resistant", desc: "Easier to clean than actual sandblasted glass.", icon: "Layers" }
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
        shortDescription: "Total light block-out and complete two-way privacy.",
        subtitle: "Blackout and Whiteout solutions for complete visual and luminous isolation.",
        heroImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Zero light, zero visibility.",
        descriptionParagraphs: [
          "When you need to completely block a view and stop all light transmission, our Opaque Films are the answer. Available in solid Blackout or bright Whiteout options.",
          "These films are commonly used to hide dropped ceilings, mask unsightly construction areas, or create dark rooms for media viewing and photography.",
          "They provide 100% two-way privacy, ensuring that absolutely nothing can be seen through the glass from either side."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1542868840-7521094dc152?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Light Transmission", value: "0%" },
          { label: "Privacy Level", value: "Total" },
          { label: "Finish", value: "Solid" }
        ],
        features: [
          { title: "Complete Blockout", desc: "Allows 0% visible light transmission.", icon: "Sun" },
          { title: "Hides Clutter", desc: "Perfect for masking storage rooms or mechanical spaces.", icon: "Shield" },
          { title: "High Contrast", desc: "Provides a solid, uniform architectural finish.", icon: "Layers" }
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
        shortDescription: "Textured translucent finish for a modern appeal.",
        subtitle: "A subtle, contemporary take on standard privacy glass.",
        heroImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Sophisticated translucency.",
        descriptionParagraphs: [
          "Frost Film offers a slightly different aesthetic than standard frosted film. It often features a subtle sparkle or a textured crystal finish that catches the light beautifully.",
          "It provides excellent privacy while elevating the interior design of the space, making it a popular choice for high-end retail, luxury offices, and modern residential bathrooms.",
          "The textured surface minimizes glare and hotspots from interior lighting."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Aesthetic", value: "Crystal Texture" },
          { label: "Privacy Level", value: "High" },
          { label: "Light Trans.", value: "Medium" }
        ],
        features: [
          { title: "Textured Finish", desc: "Adds depth and visual interest to flat glass.", icon: "Layers" },
          { title: "Glare Reduction", desc: "Diffuses harsh spotlights and direct sun.", icon: "Sun" },
          { title: "Elegant Privacy", desc: "Obscures details while letting light glow through.", icon: "Shield" }
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
    name: "Decorative",
    slug: "decorative",
    shortDescription: "Enhance privacy and elevate aesthetics with customizable frosted and patterned designs.",
    heroImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop",
    heroSubtitle: "Elevate your interior glass with striking visual elements and corporate branding.",
    descriptionTitle: "Customized glass design without the custom glass price.",
    descriptionParagraphs: [
      "Transform ordinary glass into extraordinary architectural features. Our decorative films allow architects and designers to manipulate glass surfaces with textures, patterns, and colors.",
      "Instead of replacing expensive glass panels, these films can be applied directly to existing glass, allowing for easy updates when rebranding or redesigning a space.",
      "From subtle distraction bands to full-color printed murals, the creative possibilities are literally endless."
    ],
    descriptionImage: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=2070&auto=format&fit=crop",
    subProducts: {
      "decorative-film": {
        name: "Decorative Film",
        slug: "decorative-film",
        shortDescription: "Custom patterns, lines, and gradients.",
        subtitle: "Lines, dots, gradients, and geometric patterns for visual interest.",
        heroImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Patterned privacy and distraction markers.",
        descriptionParagraphs: [
          "Decorative patterned films are the perfect way to add privacy without completely blocking the view. Choose from hundreds of pre-designed patterns including stripes, dots, squares, and elegant gradients.",
          "These films also serve a critical safety function as 'distraction markers', ensuring that clear glass partitions are visible to people walking by, preventing accidental collisions.",
          "We can also computer-cut custom patterns, logos, and typography to perfectly match your brand's identity."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1542665952-66b1dd6f4209?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Patterns", value: "100+ Options" },
          { label: "Customizable", value: "Yes" },
          { label: "Application", value: "Interior Glass" }
        ],
        features: [
          { title: "Visual Interest", desc: "Breaks up monotonous expanses of clear glass.", icon: "Layers" },
          { title: "Safety Compliance", desc: "Fulfills building codes for glass manifestation.", icon: "Shield" },
          { title: "Removable", desc: "Easily update the design when leases or branding changes.", icon: "Zap" }
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
        shortDescription: "Vibrant architectural colors to match your brand identity.",
        subtitle: "Optically clear, highly vibrant translucent colors.",
        heroImage: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Paint your glass with light.",
        descriptionParagraphs: [
          "Coloured window films offer a brilliant, transparent pop of color to interior or exterior glass. By overlaying primary colors, we can create custom hues that perfectly match your corporate Pantone colors.",
          "These films retain perfect optical clarity, washing the interior space in colored light while allowing full visibility through the glass.",
          "Ideal for retail storefronts, creative agencies, museums, and striking architectural accents."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Clarity", value: "Optically Clear" },
          { label: "Colors", value: "Unlimited Combos" },
          { label: "Durability", value: "Scratch Resistant" }
        ],
        features: [
          { title: "Vibrant Hues", desc: "Transforms ordinary glass into stained glass.", icon: "Sun" },
          { title: "Layerable", desc: "Can be combined to create infinite custom shades.", icon: "Layers" },
          { title: "Brand Matching", desc: "Align your office interior exactly with your brand colors.", icon: "Zap" }
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
    name: "Specialty",
    slug: "specialty",
    shortDescription: "Advanced solutions including antimicrobial layers and luxury interior wrapping.",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    heroSubtitle: "Specialized films for specialized environments and unique architectural challenges.",
    descriptionTitle: "Innovation beyond standard glass tinting.",
    descriptionParagraphs: [
      "Our Specialty line encompasses cutting-edge film technologies designed to solve highly specific problems that go beyond simple solar control or privacy.",
      "From creating sterile environments in healthcare facilities to completely refinishing architectural surfaces without the need for demolition, these films represent the future of surface engineering."
    ],
    descriptionImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    subProducts: {
      "antimicrobial-films": {
        name: "Antimicrobial Films",
        slug: "antimicrobial-films",
        shortDescription: "Continuous protection against germs on high-touch surfaces.",
        subtitle: "Active surface protection for a healthier environment.",
        heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
        descriptionTitle: "Self-cleaning technology for high-traffic areas.",
        descriptionParagraphs: [
          "Antimicrobial films are infused with silver ion technology that actively inhibits the growth of bacteria, mold, and mildew on the surface of the film.",
          "When applied to high-touch surfaces like glass doors, touchscreens, elevator buttons, and reception desks, it provides 24/7 continuous protection, working alongside your regular cleaning protocols.",
          "It is completely transparent, scratch-resistant, and an essential upgrade for hospitals, clinics, schools, and public transport."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2070&auto=format&fit=crop",
        stats: [
          { label: "Efficacy", value: "99.9% Reduction" },
          { label: "Active Agent", value: "Silver Ions" },
          { label: "Visibility", value: "Optically Clear" }
        ],
        features: [
          { title: "24/7 Protection", desc: "Continuously works to inhibit bacterial growth.", icon: "Shield" },
          { title: "Safe & Non-Toxic", desc: "Uses natural silver ions rather than harsh chemicals.", icon: "Sun" },
          { title: "Scratch Resistant", desc: "Withstands rigorous cleaning and high traffic.", icon: "Layers" }
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
        shortDescription: "Transform surfaces with premium textured wraps.",
        subtitle: "Architectural finishes that mimic wood, metal, stone, and leather.",
        heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        descriptionTitle: "Renovate without the demolition.",
        descriptionParagraphs: [
          "Architectural wrapping films (like DI-NOC) allow you to completely transform doors, columns, walls, and casework without the noise, dust, and expense of traditional demolition.",
          "These highly durable, textured vinyl films perfectly mimic the look and feel of natural materials like wood grain, marble, brushed aluminum, and leather.",
          "They can be heated and stretched to conform to complex 3D curves, providing a flawless, high-end finish in a fraction of the time it takes to rebuild."
        ],
        descriptionImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
        stats: [
          { label: "Textures", value: "500+ Options" },
          { label: "Application", value: "3D Conformable" },
          { label: "Durability", value: "High Traffic" }
        ],
        features: [
          { title: "Ultra-Realistic", desc: "Features tactile textures you can actually feel.", icon: "Layers" },
          { title: "Eco-Friendly", desc: "Upcycles existing furniture and reduces landfill waste.", icon: "Sun" },
          { title: "Fire Rated", desc: "Meets commercial building codes for flammability.", icon: "Shield" }
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
