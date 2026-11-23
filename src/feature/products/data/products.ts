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
  "sun-control-window-film": {
    name: "Sun Control Window Film",
    slug: "sun-control-window-film",
    shortDescription: "Advanced solar control window films rejecting up to 82% solar heat while maximizing daylight and UV protection.",
    heroImage: "/products/dsolar-control.png",
    heroSubtitle: "Engineered spectrally selective, reflective, and ceramic films designed for ultimate thermal comfort and energy efficiency.",
    descriptionTitle: "Intelligent solar management for architectural comfort and sustainability.",
    descriptionParagraphs: [
      "Uncontrolled solar radiation causes excessive heat buildup, severe glare, and premature fading of interior furnishings. Our comprehensive Sun Control Window Films filter out harsh infrared heat and ultraviolet rays while keeping your spaces naturally illuminated.",
      "From virtually clear, non-reflective spectrally selective films to dual-reflective and elegant neutral sputtered films, our solutions dramatically reduce air conditioning loads, optimize occupant productivity, and enhance building aesthetics.",
      "Engineered with cutting-edge optical technologies, these films provide enduring performance backed by industry-leading warranties across commercial and residential applications in demanding climates."
    ],
    descriptionImage: "/sub-solutions/heat-reduction.png",
    subProducts: {
      "lx-series-non-reflective": {
        name: "LX Series (Non Reflective)",
        slug: "lx-series-non-reflective",
        shortDescription: "State-of-the-art spectrally selective film offering high clarity with powerful solar heat rejection.",
        subtitle: "Virtually invisible solar shield preserving natural daylight and exterior architecture.",
        heroImage: "/sub-products/lx-series.png",
        descriptionTitle: "Clear solar performance with zero optical distortion or reflectivity.",
        descriptionParagraphs: [
          "The LX Series utilizes advanced multi-layer precious metal sputtering to selectively filter infrared solar energy without increasing interior or exterior reflectance.",
          "It maintains the original architectural aesthetics of your glass while delivering exceptional comfort and lowering cooling loads during peak sunlight hours.",
          "Ideal for luxury residences, commercial storefronts, and heritage structures where maintaining clear glass visibility is non-negotiable."
        ],
        descriptionImage: "/sub-products/lx-series.png",
        stats: [
          { label: "Solar Energy Rejected", value: "Up to 65%" },
          { label: "Visible Light Transmitted", value: "72%" },
          { label: "UV Rejection", value: "99%+" }
        ],
        features: [
          { title: "Spectrally Selective", desc: "Selectively targets heat-bearing infrared waves while transmitting daylight.", icon: "Sun" },
          { title: "Non-Reflective Finish", desc: "Leaves glass looking natural from both inside and out.", icon: "Layers" },
          { title: "Maximum UV Shield", desc: "Blocks 99%+ of damaging UV radiation to protect art and furniture.", icon: "Shield" }
        ],
        specs: [
          { label: "Solar Energy Rejected", value: "55% - 65%" },
          { label: "Visible Light Transmitted", value: "70% - 72%" },
          { label: "UV Rejection", value: "> 99%" },
          { label: "Glare Reduction", value: "22% - 35%" },
          { label: "Shading Coefficient", value: "0.50 - 0.58" },
          { label: "Internal Reflectance", value: "9% (Natural Glass)" },
          { label: "Warranty", value: "10-15 Years Commercial / Lifetime Residential" }
        ]
      },
      "pure-vue-series": {
        name: "Pure Vue Series",
        slug: "pure-vue-series",
        shortDescription: "High-clarity nano-ceramic solar film with zero signal interference and neutral appearance.",
        subtitle: "Advanced ceramic technology engineered for crystal-clear outward vision and maximum heat rejection.",
        heroImage: "/sub-solutions/glare-reduction.png",
        descriptionTitle: "100% metal-free ceramic protection that keeps signals strong and spaces cool.",
        descriptionParagraphs: [
          "Pure Vue Series is formulated with advanced nano-ceramic chemistry that blocks intense infrared heat without containing conductive metals.",
          "Because it is completely metal-free, Pure Vue will never interfere with cellular signals, GPS, Wi-Fi, or RF-based building management sensors.",
          "Its balanced, natural neutral hue ensures warm daylight fills your room while glare is comfortably softened and solar heat is turned away."
        ],
        descriptionImage: "/sub-solutions/glare-reduction.png",
        stats: [
          { label: "Infrared Rejection", value: "Up to 88%" },
          { label: "Signal Interference", value: "0%" },
          { label: "UV Defense", value: "99%" }
        ],
        features: [
          { title: "Nano-Ceramic Formulation", desc: "High heat rejection without metallized reflection or corrosion risk.", icon: "Zap" },
          { title: "Signal Friendly", desc: "Zero interference with 5G, Wi-Fi, cell phones, or wireless sensors.", icon: "Layers" },
          { title: "Low Reflectivity", desc: "Provides crisp, undistorted views day and night.", icon: "Sun" }
        ],
        specs: [
          { label: "Film Technology", value: "Nano-Ceramic Non-Metallic" },
          { label: "Total Solar Energy Rejected", value: "52% - 68%" },
          { label: "Infrared Rejection (IRER)", value: "Up to 88%" },
          { label: "Visible Light Transmitted", value: "30% - 60%" },
          { label: "UV Protection", value: "99%" },
          { label: "Corrosion Resistance", value: "Non-corrosive (Coastal safe)" },
          { label: "Warranty", value: "12 Years Commercial" }
        ]
      },
      "sterling-series-reflective": {
        name: "Sterling Series (Reflective)",
        slug: "sterling-series-reflective",
        shortDescription: "Spectrally selective reflective solar films delivering high light transmission and cooling power.",
        subtitle: "Optimal balance of brilliant natural illumination and superior thermal rejection.",
        heroImage: "/sub-solutions/heat-reduction.png",
        descriptionTitle: "High light transmission meets high solar heat rejection.",
        descriptionParagraphs: [
          "The Sterling Series is designed for clients who want maximum solar heat rejection while maintaining higher visible light transmission than conventional reflective films.",
          "Engineered with micro-thin precious metals, Sterling provides a subtle reflective appearance externally that offers daytime privacy while maintaining high clarity from within.",
          "By neutralizing hot spots near perimeter glazing, it significantly enhances tenant comfort and curbs cooling utility expenditures."
        ],
        descriptionImage: "/sub-solutions/heat-reduction.png",
        stats: [
          { label: "Solar Heat Rejected", value: "Up to 71%" },
          { label: "Glare Reduction", value: "Up to 78%" },
          { label: "UV Blocking", value: "99%" }
        ],
        features: [
          { title: "High Light Transmission", desc: "Allows ample daylight indoors without the oppressive solar heat.", icon: "Sun" },
          { title: "Daytime Privacy", desc: "Subtle reflective sheen prevents prying eyes from outside during the day.", icon: "Shield" },
          { title: "Spectrally Selective Metallization", desc: "Engineered specifically to target heat-producing wavelengths.", icon: "Zap" }
        ],
        specs: [
          { label: "Available Grades", value: "Sterling 20, 40, 50, 60, 70" },
          { label: "Total Solar Energy Rejected", value: "48% - 71%" },
          { label: "Visible Light Transmitted", value: "23% - 68%" },
          { label: "UV Rejection", value: "99%" },
          { label: "Solar Heat Gain Coefficient", value: "0.29 - 0.52" },
          { label: "Warranty", value: "10-12 Years Commercial" }
        ]
      },
      "true-vue-series": {
        name: "True Vue Series",
        slug: "true-vue-series",
        shortDescription: "Dual-reflective solar control films offering maximum heat reduction and crystal-clear nighttime views.",
        subtitle: "Engineered dual-reflectance: high exterior reflection for privacy, low interior reflection for views.",
        heroImage: "/products/dsolar-control.png",
        descriptionTitle: "Enjoy exterior daytime privacy without looking at your own reflection at night.",
        descriptionParagraphs: [
          "Traditional reflective films create a mirror effect inside the building at night when indoor lights are switched on. True Vue solves this with dual-reflective technology.",
          "It provides strong reflective heat rejection and privacy on the exterior, while the interior layer is kept dark and low-reflectance, preserving your panoramic night views.",
          "It is one of the most effective solutions for slashing harsh desert glare and dramatically reducing cooling expenses."
        ],
        descriptionImage: "/products/dsolar-control.png",
        stats: [
          { label: "Total Solar Heat Rejected", value: "Up to 82%" },
          { label: "Glare Reduction", value: "Up to 94%" },
          { label: "Interior Reflectance", value: "Low (Anti-Mirror)" }
        ],
        features: [
          { title: "Dual-Reflective Tech", desc: "High exterior privacy combined with clear, non-reflective night views inside.", icon: "Layers" },
          { title: "Maximum Glare Cut", desc: "Cuts up to 94% of blinding sun glare on computer screens and televisions.", icon: "Sun" },
          { title: "Supreme Energy Savings", desc: "Rejects up to 82% of total solar energy for rapid HVAC payback.", icon: "Zap" }
        ],
        specs: [
          { label: "Available Variants", value: "True Vue 5, 15, 30, 40" },
          { label: "Total Solar Energy Rejected", value: "59% - 82%" },
          { label: "Visible Light Transmitted", value: "5% - 41%" },
          { label: "Glare Reduction", value: "56% - 94%" },
          { label: "Interior Light Reflectance", value: "11% - 13%" },
          { label: "Exterior Light Reflectance", value: "22% - 56%" },
          { label: "Warranty", value: "12 Years Commercial" }
        ]
      },
      "stainless-steel-series": {
        name: "Stainless Steel Series",
        slug: "stainless-steel-series",
        shortDescription: "Sputtered metal film with a neutral grey appearance for timeless architectural elegance.",
        subtitle: "Durable neutral aesthetic with high glare control and consistent solar performance.",
        heroImage: "/images/low-angle-view-business-buildings-1-scaled.webp",
        descriptionTitle: "Architectural neutrality combined with high-performance solar protection.",
        descriptionParagraphs: [
          "The Stainless Steel Series is created by sputtering pure stainless steel alloy onto optical polyester. The result is a film that never looks overly shiny or mirrored, but maintains a tasteful, neutral grey finish.",
          "Because stainless steel is naturally resistant to corrosion, this film performs exceptionally well in humid or marine-adjacent architectural environments.",
          "It offers an ideal blend of solar heat reduction, glare dampening, and elegant architectural integration for modern office complexes and residential buildings."
        ],
        descriptionImage: "/images/low-angle-view-business-buildings-1-scaled.webp",
        stats: [
          { label: "Solar Energy Rejected", value: "Up to 67%" },
          { label: "Corrosion Proof", value: "100% Alloy" },
          { label: "Glare Reduction", value: "Up to 85%" }
        ],
        features: [
          { title: "Neutral Grey Tone", desc: "No brassy or artificial mirror tint; matches contemporary glass facades.", icon: "Layers" },
          { title: "Corrosion Resistant Alloy", desc: "Pure stainless steel sputtering resists oxidation in humid climates.", icon: "Shield" },
          { title: "Balanced Daylighting", desc: "Softens harsh sunlight into comfortable, diffused natural ambient light.", icon: "Sun" }
        ],
        specs: [
          { label: "Available Shades", value: "Stainless Steel 20, 30, 50" },
          { label: "Total Solar Energy Rejected", value: "48% - 67%" },
          { label: "Visible Light Transmitted", value: "21% - 51%" },
          { label: "UV Protection", value: "99%" },
          { label: "Glare Reduction", value: "44% - 85%" },
          { label: "Metal Alloy", value: "Precision Sputtered Stainless Steel" },
          { label: "Warranty", value: "10-12 Years Commercial" }
        ]
      },
      "silver-series": {
        name: "Silver Series",
        slug: "silver-series",
        shortDescription: "Classic highly reflective silver films for ultimate solar rejection and daytime one-way privacy.",
        subtitle: "The industry benchmark for maximum thermal defense and rapid HVAC cost reduction.",
        heroImage: "/sub-products/grey-silver-grey.png",
        descriptionTitle: "Maximum solar heat reflection for demanding high-exposure facades.",
        descriptionParagraphs: [
          "The Silver Series uses vapor-deposited aluminum metallization to create a high-efficiency barrier that mirrors away heat before it enters the glass.",
          "Offering total daytime privacy, it creates a crisp exterior mirror finish that shields your interior spaces from all outside onlookers during daylight.",
          "It delivers the fastest return on investment of any solar film by dramatically curbing air conditioning consumption in sun-drenched structures."
        ],
        descriptionImage: "/sub-products/grey-silver-grey.png",
        stats: [
          { label: "Total Solar Heat Rejected", value: "Up to 81%" },
          { label: "Daytime Privacy", value: "100% One-Way" },
          { label: "UV Block", value: "99%" }
        ],
        features: [
          { title: "Ultimate Heat Shield", desc: "Vapor-metallized aluminum bounces up to 81% of incoming solar heat away.", icon: "Zap" },
          { title: "One-Way Daytime Mirror", desc: "Total privacy from outside while retaining clear outward vision.", icon: "Shield" },
          { title: "Maximum Glare Cut", desc: "Eliminates intense desert sunlight on computer screens and workspaces.", icon: "Sun" }
        ],
        specs: [
          { label: "Variants", value: "Silver 20, Silver 35, Silver 50" },
          { label: "Solar Energy Rejected", value: "62% - 81%" },
          { label: "Visible Light Transmitted", value: "17% - 47%" },
          { label: "Visible Light Reflectance", value: "43% - 62%" },
          { label: "UV Rejection", value: "99%" },
          { label: "Shading Coefficient", value: "0.22 - 0.44" },
          { label: "Warranty", value: "10 Years Commercial" }
        ]
      },
      "solar-bronze-series": {
        name: "Solar Bronze Series",
        slug: "solar-bronze-series",
        shortDescription: "Warm copper-bronze reflective films combining rich architectural styling with powerful solar control.",
        subtitle: "Enriches building facades with warm bronze tones while stopping intense solar heat.",
        heroImage: "/sub-solutions/heat-reduction.png",
        descriptionTitle: "Distinctive warm aesthetics with superior thermal performance.",
        descriptionParagraphs: [
          "Solar Bronze Series is formulated with sputtered copper and bronze alloys to give glass a refined, warm amber-bronze tone that complements earth-toned building facades.",
          "In addition to its distinctive look, Solar Bronze rejects substantial solar heat and glare, improving tenant comfort and cooling system efficiency.",
          "It provides excellent daytime privacy and softens the harshness of direct sunlight into a warm, inviting interior ambience."
        ],
        descriptionImage: "/sub-solutions/heat-reduction.png",
        stats: [
          { label: "Solar Energy Rejected", value: "Up to 77%" },
          { label: "Aesthetic Finish", value: "Rich Bronze" },
          { label: "UV Protection", value: "99%" }
        ],
        features: [
          { title: "Warm Architectural Tone", desc: "Complements brick, stone, and bronze-anodized window frames seamlessly.", icon: "Layers" },
          { title: "High Heat Rejection", desc: "Blocks up to 77% of total solar energy, lowering cooling utility bills.", icon: "Zap" },
          { title: "Glare Reduction", desc: "Reduces visual fatigue and eye strain from direct desert sunlight.", icon: "Sun" }
        ],
        specs: [
          { label: "Variants", value: "Solar Bronze 20, Solar Bronze 35" },
          { label: "Total Solar Energy Rejected", value: "65% - 77%" },
          { label: "Visible Light Transmitted", value: "20% - 34%" },
          { label: "Glare Reduction", value: "62% - 78%" },
          { label: "UV Rejection", value: "99%" },
          { label: "Metallization", value: "Sputtered Bronze Alloy" },
          { label: "Warranty", value: "10-12 Years Commercial" }
        ]
      },
      "grey-silver-grey": {
        name: "Grey/Silver/Grey",
        slug: "grey-silver-grey",
        shortDescription: "Specialized multi-layer tri-laminate film offering neutral low-reflectance looks inside and out.",
        subtitle: "Tri-laminate technology delivering high solar defense with subdued visual reflectivity.",
        heroImage: "/sub-products/grey-silver-grey.png",
        descriptionTitle: "The high-heat performance of silver with the subtle look of neutral grey.",
        descriptionParagraphs: [
          "Grey/Silver/Grey is an advanced composite film construction sandwiching a high-performance silver metallized layer between two tinted grey polyester layers.",
          "This unique architecture cancels out the harsh mirror look of traditional reflective films, resulting in a soft, elegant neutral charcoal finish.",
          "It provides high solar heat rejection, high glare control, and exceptional visual clarity without altering the building's architectural profile."
        ],
        descriptionImage: "/sub-products/grey-silver-grey.png",
        stats: [
          { label: "Total Solar Energy Rejected", value: "Up to 75%" },
          { label: "Appearance", value: "Neutral Charcoal" },
          { label: "UV Block", value: "99%" }
        ],
        features: [
          { title: "Tri-Laminate Sandwich", desc: "Silver reflective core encased in dual dyed-grey layers for subdued shine.", icon: "Layers" },
          { title: "Superior Glare Cut", desc: "Ideal for conference rooms, offices, and homes facing harsh direct sun.", icon: "Sun" },
          { title: "Long-Term Color Stability", desc: "Engineered dyes resistant to bubbling, purpling, or thermal breakdown.", icon: "Shield" }
        ],
        specs: [
          { label: "Thickness", value: "1.5 Mil - 2 Mil" },
          { label: "Solar Energy Rejected", value: "64% - 75%" },
          { label: "Visible Light Transmitted", value: "12% - 32%" },
          { label: "UV Rejection", value: "99%" },
          { label: "Interior Reflection", value: "14% - 18% (Subdued)" },
          { label: "Exterior Reflection", value: "16% - 22% (Subdued)" },
          { label: "Warranty", value: "10 Years Commercial" }
        ]
      },
      "opaque-films-and-frost-films": {
        name: "Opaque Films and Frost Films",
        slug: "opaque-films-and-frost-films",
        shortDescription: "Total light blocking and translucent decorative frost films for privacy and light diffusion.",
        subtitle: "Complete 24/7 visual privacy and refined sandblasted glass aesthetics.",
        heroImage: "/sub-products/opaque-film.png",
        descriptionTitle: "Engineered privacy solutions from translucent diffusion to 100% black-out/white-out.",
        descriptionParagraphs: [
          "Our Opaque Films (Blackout and Whiteout) deliver total privacy by stopping 100% of visible light transmission, ideal for server rooms, secure areas, and back-of-house storage.",
          "Our Frost Films mimic the sophisticated look of etched or sandblasted glass at a fraction of the cost, diffusing natural light without sacrificing room brightness.",
          "Easy to maintain and wipe clean, these films upgrade plain glass partitions into elegant, private architectural features."
        ],
        descriptionImage: "/sub-products/frost-film.png",
        stats: [
          { label: "Privacy Rating", value: "100% 24/7" },
          { label: "Light Control", value: "Diffused / Total Block" },
          { label: "UV Protection", value: "99%" }
        ],
        features: [
          { title: "Day & Night Privacy", desc: "Maintains complete visual privacy under all interior and exterior lighting.", icon: "Shield" },
          { title: "Acid-Etch Look", desc: "Simulates luxury sandblasted or etched glazing without structural weakening.", icon: "Layers" },
          { title: "UV Barrier", desc: "Blocks 99% of damaging UV rays through the filmed surface.", icon: "Sun" }
        ],
        specs: [
          { label: "Options Available", value: "Matte Frost, Whiteout Opaque, Blackout Opaque" },
          { label: "Light Transmission", value: "0% (Opaque) / 68% (Frost)" },
          { label: "UV Rejection", value: "> 99%" },
          { label: "Adhesive Type", value: "Optically Clear Pressure-Sensitive" },
          { label: "Cleaning Compatibility", value: "Standard non-abrasive glass cleaner" },
          { label: "Warranty", value: "10 Years Interior" }
        ]
      }
    }
  },

  "exterior-sun-control-window-film": {
    name: "Exterior Sun Control Window Film",
    slug: "exterior-sun-control-window-film",
    shortDescription: "Heavy-duty weather-resistant exterior films that stop heat at the first point of contact before it penetrates the glazing.",
    heroImage: "/products/dsolar-control.png",
    heroSubtitle: "Engineered Outside Weather (OSW) films for skylights, double-glazed units, and hard-to-access facades.",
    descriptionTitle: "Maximum solar defense applied directly to the outside face of the glass.",
    descriptionParagraphs: [
      "When solar energy strikes a window, standard interior films absorb or reflect heat after it has passed through the outer glass lite. Exterior Sun Control Window Films stop solar heat on the exterior surface before it ever enters the glazing unit.",
      "This exterior application is particularly vital for modern tinted, laminated, Low-E, and double-glazed insulated units (IGUs) where interior films could otherwise cause thermal stress fractures.",
      "Formulated with durable hard-coat outdoor weathering technology, these films resist sand abrasion, intense UV weathering, rain, and environmental pollutants in demanding regional climates."
    ],
    descriptionImage: "/sub-solutions/heat-reduction.png",
    subProducts: {
      "sun-control-series-osw": {
        name: "Sun Control Series OSW (Outside Weather)",
        slug: "sun-control-series-osw",
        shortDescription: "Premium exterior-grade solar film with advanced UV inhibitors and abrasion-resistant exterior hardcoat.",
        subtitle: "Stops solar heat before it penetrates double glazing and skylights.",
        heroImage: "/sub-products/lx-series.png",
        descriptionTitle: "Engineered specifically to survive exterior desert conditions while providing maximum cooling.",
        descriptionParagraphs: [
          "The Sun Control Series OSW features specialized inorganic UV stabilizers and an ultra-durable, weather-resistant hardcoat engineered to withstand harsh exterior climates.",
          "It solves solar heat and glare problems on architectural glass where interior installation is impossible due to ceiling heights, skylights, structural baffles, or glass thermal breakage risks.",
          "By repelling solar energy at the outer surface, OSW films provide the highest possible Total Solar Energy Rejection (TSER) on insulated glass units."
        ],
        descriptionImage: "/sub-solutions/heat-reduction.png",
        stats: [
          { label: "Solar Heat Rejected", value: "Up to 83%" },
          { label: "Thermal Stress Risk", value: "0% on IGUs" },
          { label: "Weather Durability", value: "Extreme OSW" }
        ],
        features: [
          { title: "Exterior Heat Interception", desc: "Reflects heat outside before it heats up double-glazed cavity air.", icon: "Zap" },
          { title: "Heavy-Duty Weather Hardcoat", desc: "Formulated to resist sand scouring, rain, and intense solar UV.", icon: "Shield" },
          { title: "Skylight & Atrium Safe", desc: "The safest solar film solution for high-expansion overhead glass.", icon: "Layers" }
        ],
        specs: [
          { label: "Application Face", value: "Exterior (Surface 1)" },
          { label: "Total Solar Energy Rejected", value: "68% - 83%" },
          { label: "Visible Light Transmitted", value: "15% - 40%" },
          { label: "UV Rejection", value: "> 99%" },
          { label: "Weathering Hardcoat", value: "Cross-Linked Fluoropolymer / Acrylic" },
          { label: "Warranty", value: "5-7 Years Exterior Exposure" }
        ]
      }
    }
  },

  "safety-and-security-window-film": {
    name: "Safety & Security Window Film",
    slug: "safety-and-security-window-film",
    shortDescription: "Industrial-strength multi-laminate safety films holding broken glass in place to deter forced entry and prevent flying glass injuries.",
    heroImage: "/products/safety-and-security.png",
    heroSubtitle: "Certified impact protection transforming standard glass into a shatter-resistant barrier.",
    descriptionTitle: "Passive 24/7 structural defense for your building's most vulnerable perimeter.",
    descriptionParagraphs: [
      "Glass is universally the easiest point of entry for burglars and the most hazardous material in the event of an accident, storm, or blast. Our Safety & Security Window Films are engineered with micro-layered high-tensile polyester bonded by heavy-duty pressure-sensitive adhesives.",
      "When struck with heavy force, the glass will crack, but the safety film securely holds the jagged shards together inside the frame, deterring intrusion and eliminating flying glass hazards.",
      "Available in optically clear variants that leave your windows completely indistinguishable from standard glass, as well as combined solar-safety options for simultaneous thermal control."
    ],
    descriptionImage: "/sub-products/clear-safety-film.png",
    subProducts: {
      "clear-safety-film-series": {
        name: "Clear Safety Film Series",
        slug: "clear-safety-film-series",
        shortDescription: "Optically clear, high-tensile safety films providing certified anti-shatter and forced entry protection.",
        subtitle: "Uncompromising optical clarity backed by industrial-strength tensile resilience.",
        heroImage: "/sub-products/clear-safety-film.png",
        descriptionTitle: "Invisible armor shielding against accidental impacts and break-ins.",
        descriptionParagraphs: [
          "Manufactured from multi-ply optical-grade polyester with industry-leading tensile and puncture resistance, Clear Safety Film forms a tough, invisible barrier across your windows.",
          "It prevents dangerous flying glass shards during storms or accidental human impacts, complying with international building safety glazing regulations.",
          "In break-in attempts, it buys critical time by absorbing repeated blunt impacts, frustrating intruders and forcing them to abandon their entry attempt."
        ],
        descriptionImage: "/sub-products/clear-safety-film.png",
        stats: [
          { label: "Tensile Strength", value: "32,000 psi" },
          { label: "Optical Clarity", value: "100% Clear" },
          { label: "UV Block", value: "99%" }
        ],
        features: [
          { title: "Tear-Resistant Multi-Ply", desc: "Layered polyester structure resists punctures and tearing under severe impact.", icon: "Shield" },
          { title: "Optically Undetectable", desc: "Completely transparent, maintaining original views and architectural aesthetics.", icon: "Layers" },
          { title: "Certified Safety Compliance", desc: "Meets ANSI Z97.1, EN 12600, and CPSC 16 CFR 1201 safety glazing codes.", icon: "Sun" }
        ],
        specs: [
          { label: "Thickness Options", value: "4 Mil, 7 Mil, 8 Mil, 14 Mil" },
          { label: "Tensile Strength", value: "32,000 psi" },
          { label: "Break Strength", value: "100 - 350 lbs/inch" },
          { label: "Puncture Strength", value: "Up to 150 lbs" },
          { label: "Visible Light Transmitted", value: "88% - 90%" },
          { label: "UV Rejection", value: "99%" },
          { label: "Warranty", value: "12 Years Commercial / Lifetime Residential" }
        ]
      },
      "sun-control-safety-film-series": {
        name: "Sun Control & Safety Film Series",
        slug: "sun-control-safety-film-series",
        shortDescription: "Dual-action hybrid films combining certified shatter resistance with powerful solar heat and glare rejection.",
        subtitle: "Two essential protections in one single high-performance installation.",
        heroImage: "/sub-products/safety-films.png",
        descriptionTitle: "Shield your space from both intense heat and dangerous glass shattering.",
        descriptionParagraphs: [
          "The Sun Control & Safety Film Series merges the heat-rejecting properties of solar window films with the robust tensile reinforcement of thick safety film.",
          "Instead of installing two separate products, this hybrid solution slashes air conditioning costs, softens sun glare, and protects occupants from broken glass and intruders.",
          "It is the premier choice for commercial facades, banks, retail display windows, and luxury homes requiring both climate defense and high-level security."
        ],
        descriptionImage: "/sub-products/safety-films.png",
        stats: [
          { label: "Solar Heat Rejected", value: "Up to 78%" },
          { label: "Safety Thickness", value: "4 to 8 Mil" },
          { label: "UV Protection", value: "99%" }
        ],
        features: [
          { title: "Dual Protection", desc: "Combines high solar energy rejection with certified shatter-resistant defense.", icon: "Shield" },
          { title: "Energy Cost Reducer", desc: "Reduces peak cooling loads while bolstering perimeter window security.", icon: "Zap" },
          { title: "Daytime Privacy", desc: "Reflective and tinted hybrid options provide one-way daytime privacy.", icon: "Layers" }
        ],
        specs: [
          { label: "Film Structure", value: "Multi-Laminate Sputtered Solar Safety" },
          { label: "Thickness Options", value: "4 Mil, 6 Mil, 8 Mil" },
          { label: "Total Solar Heat Rejected", value: "54% - 78%" },
          { label: "Tensile Strength", value: "28,500 - 32,000 psi" },
          { label: "Break Strength", value: "100 - 220 lbs/inch" },
          { label: "UV Rejection", value: "> 99%" },
          { label: "Warranty", value: "10-12 Years Commercial" }
        ]
      }
    }
  },

  "anchor-systems": {
    name: "Anchor Systems",
    slug: "anchor-systems",
    shortDescription: "Advanced structural attachment systems anchoring safety-filmed glass directly into the window frame to withstand severe blasts and forced entry.",
    heroImage: "/sub-products/anchor-systems.png",
    heroSubtitle: "The critical mechanical and structural connection that prevents filmed glass from popping out under heavy impact.",
    descriptionTitle: "Securing the perimeter beyond the glass: frame-to-film structural reinforcement.",
    descriptionParagraphs: [
      "Safety film keeps shattered glass from breaking apart into hazardous shards, but in severe blast events, storm wind loads, or heavy forced-entry attacks, the entire intact sheet of shattered glass can pop cleanly out of the frame.",
      "Anchor Systems solve this vulnerability by physically binding the filmed glass pane directly to the structural window frame using structural silicones, flexible gaskets, or engineered aluminum clamping profiles.",
      "Tested and compliant with demanding GSA, ASTM, and blast-mitigation criteria, anchor systems represent the ultimate standard in facility hardening."
    ],
    descriptionImage: "/sub-products/anchor-systems.png",
    subProducts: {
      "wet-glaze-system": {
        name: "Wet Glaze System",
        slug: "wet-glaze-system",
        shortDescription: "High-modulus structural silicone anchoring creating a continuous elastomeric bond between film and frame.",
        subtitle: "Engineered structural silicone anchoring for seamless architectural blast and storm protection.",
        heroImage: "/sub-products/anchor-systems.png",
        descriptionTitle: "Continuous structural bead providing dynamic shock absorption and retention.",
        descriptionParagraphs: [
          "The Wet Glaze System utilizes an engineered, high-modulus structural silicone sealant (such as Dow Corning 995) to create a continuous triangular bead bridging the safety-filmed glass and the perimeter frame.",
          "Under explosive blast or blunt impact, the silicone stretches elastomerically, absorbing kinetic energy and preventing the pane from collapsing into the building interior.",
          "It provides an aesthetically clean, unobtrusive finish that blends seamlessly with existing architectural window mullions."
        ],
        descriptionImage: "/sub-products/anchor-systems.png",
        stats: [
          { label: "Blast Mitigation", value: "GSA Level C/D" },
          { label: "Adhesive Type", value: "Structural Silicone 995" },
          { label: "Elongation at Break", value: "100%+" }
        ],
        features: [
          { title: "Structural Silicone Bond", desc: "High-strength chemical adhesion locks film to aluminum or steel frames.", icon: "Shield" },
          { title: "Dynamic Energy Dissipation", desc: "Flexes under blast loads to disperse kinetic impact without separating.", icon: "Zap" },
          { title: "Clean Appearance", desc: "Forms a neat, uniform perimeter bead that matches standard architectural seals.", icon: "Layers" }
        ],
        specs: [
          { label: "Silicone Standard", value: "High-Modulus Structural Silicone (Dow 995 or equivalent)" },
          { label: "Bite Dimensions", value: "1/2-inch to 3/4-inch triangular fillet" },
          { label: "Tensile Adhesion", value: "> 100 psi" },
          { label: "Tested Standards", value: "ASTM F1642, GSA TS01-2003" },
          { label: "Compatible Frame Materials", value: "Anodized Aluminum, Steel, Powder-Coated Metal" },
          { label: "Warranty", value: "10 Years Structural System" }
        ]
      },
      "gullwing-system": {
        name: "Gullwing System",
        slug: "gullwing-system",
        shortDescription: "Flexible elastomeric anchor profile delivering extreme blast and forced entry resistance without mechanical drilling.",
        subtitle: "Patented flexible energy-absorbing membrane linking glass to frame.",
        heroImage: "/sub-solutions/security.png",
        descriptionTitle: "Patented elastomeric attachment absorbing massive explosive and physical shock.",
        descriptionParagraphs: [
          "The Gullwing System is a flexible mechanical attachment profile manufactured from heavy-duty elastomeric rubber and ultra-high-bond acrylic foam tapes.",
          "It adheres along the perimeter of the filmed glass and the window frame, creating a dual-action hinged energy damper that flexes under extreme pressure.",
          "Ideal for retrofitting existing facilities without drilling holes into sensitive structural frames or disturbing existing perimeter seals."
        ],
        descriptionImage: "/sub-solutions/security.png",
        stats: [
          { label: "Attachment Type", value: "Elastomeric Membrane" },
          { label: "Installation", value: "No-Drill Retrofit" },
          { label: "Shock Absorption", value: "Extreme" }
        ],
        features: [
          { title: "Hinged Shock Damping", desc: "Absorbs blast shockwaves through controlled elastomeric deformation.", icon: "Zap" },
          { title: "Preserves Window Frame", desc: "Installs without destructive mechanical fastener penetrations.", icon: "Shield" },
          { title: "Rapid Retrofit", desc: "Installs cleanly with minimal disruption to ongoing commercial operations.", icon: "Layers" }
        ],
        specs: [
          { label: "Material Composition", value: "EPDM / Engineered Elastomer with VHB adhesive" },
          { label: "Peel Strength", value: "> 25 lbs/inch" },
          { label: "Blast Performance", value: "GSA Level 3B / Level 2" },
          { label: "Operating Temperature", value: "-40°C to +90°C" },
          { label: "Maintenance", value: "Zero maintenance required" },
          { label: "Warranty", value: "10 Years Manufacturer Warranty" }
        ]
      },
      "framegard-system": {
        name: "Framegard System",
        slug: "framegard-system",
        shortDescription: "Heavy-duty mechanical clamping system mechanically fastening the safety film directly to the frame.",
        subtitle: "The highest rated mechanical retention system for maximum blast and hurricane protection.",
        heroImage: "/sub-products/anchor-systems.png",
        descriptionTitle: "Heavy-gauge mechanical clamping for maximum blast mitigation and anti-intrusion.",
        descriptionParagraphs: [
          "The Framegard System is an engineered mechanical attachment that physically clamps the edge of the safety film to the window frame using high-strength aluminum extrusion profiles and hardened fasteners.",
          "Engineered to withstand the most catastrophic bomb blast loads, Framegard provides unmatched retention, ensuring the shattered glass envelope remains firmly in place.",
          "Specified worldwide for government embassies, military facilities, nuclear plants, and high-risk financial institutions."
        ],
        descriptionImage: "/sub-products/anchor-systems.png",
        stats: [
          { label: "Blast Rating", value: "GSA Level 1 & 2 / DoD" },
          { label: "Attachment", value: "Mechanical Clamp" },
          { label: "Intrusion Deterrence", value: "Maximum" }
        ],
        features: [
          { title: "Mechanical Clamp Lock", desc: "Rigid aluminum profile locks the film edge securely with hardened screws.", icon: "Shield" },
          { title: "Military Grade Defense", desc: "Certified for stringent blast criteria and extreme force resistance.", icon: "Zap" },
          { title: "Architectural Trim Covers", desc: "Finished with aesthetic clip-on snap covers matching frame colors.", icon: "Layers" }
        ],
        specs: [
          { label: "Profile Material", value: "6063-T6 Extruded Aluminum" },
          { label: "Fasteners", value: "High-Tensile Self-Drilling Screws" },
          { label: "Tested Criteria", value: "GSA TS01, ASTM F1642" },
          { label: "Finishes Available", value: "Clear Anodized, Bronze, White, Custom RAL" },
          { label: "Compatible Films", value: "8 Mil - 14 Mil Multi-Ply Safety Films" },
          { label: "Warranty", value: "15 Years Structural System" }
        ]
      }
    }
  },

  "exterior-safety-window-film": {
    name: "Exterior Safety Window Film",
    slug: "exterior-safety-window-film",
    shortDescription: "Heavy-duty exterior-applied safety and security films engineered to withstand weather extremes while defending against impacts.",
    heroImage: "/products/safety-and-security.png",
    heroSubtitle: "Weather-resistant impact protection for exterior glass facades and polycarbonate glazing.",
    descriptionTitle: "Robust exterior shatter defense against storms, physical vandalism, and spontaneous glass breakage.",
    descriptionParagraphs: [
      "In many high-rise facades, overhead skylights, and transit stations, interior access for safety film application is technically impossible or cost-prohibitive. Exterior Safety Window Films are engineered to provide maximum shatter resistance installed directly on the outdoor glass face.",
      "Formulated with specialized outdoor weatherable hardcoats and heavy UV inhibitors, these films endure scorching sun, sand abrasion, and heavy precipitation without peeling, yellowing, or crazing.",
      "They are also the ideal solution for containing spontaneous tempered glass explosions (nickel sulfide inclusions) on exterior balustrades and curtain walls."
    ],
    descriptionImage: "/sub-solutions/shatter-protection.png",
    subProducts: {
      "safety-and-security-series-osw": {
        name: "Safety & Security Series OSW",
        slug: "safety-and-security-series-osw",
        shortDescription: "Exterior-grade impact safety film designed for glass facades, balustrades, and overhead skylights.",
        subtitle: "Weather-resistant anti-shatter defense applied to exterior glass surfaces.",
        heroImage: "/sub-products/safety-films.png",
        descriptionTitle: "Defend against spontaneous glass failure and storm impacts from the outside.",
        descriptionParagraphs: [
          "Safety & Security Series OSW is manufactured from high-gauge multi-laminate polyester protected by an exterior fluoropolymer scratch-resistant coating.",
          "It binds broken glass fragments securely on exterior balustrades, balconies, and curtain walls, preventing shards from falling and injuring pedestrians below.",
          "Engineered to withstand prolonged UV exposure and extreme desert temperatures without loss of tensile integrity."
        ],
        descriptionImage: "/sub-products/safety-films.png",
        stats: [
          { label: "Tensile Strength", value: "28,500 psi" },
          { label: "Exterior UV Block", value: "99%+" },
          { label: "Falling Glass Defense", value: "100% Contained" }
        ],
        features: [
          { title: "Spontaneous Breakage Defense", desc: "Safely holds tempered glass together if nickel sulfide inclusions trigger failure.", icon: "Shield" },
          { title: "Exterior Weather Durability", desc: "Hardcoat resists UV degradation, salt air, and sand abrasions.", icon: "Layers" },
          { title: "Public Safety Protection", desc: "Prevents hazardous glass from raining down onto pedestrian walkways.", icon: "Zap" }
        ],
        specs: [
          { label: "Thickness Options", value: "4 Mil, 7 Mil, 8 Mil OSW" },
          { label: "Application", value: "Exterior (Surface 1)" },
          { label: "Tensile Strength", value: "28,500 psi" },
          { label: "Elongation at Break", value: "135%" },
          { label: "Puncture Resistance", value: "115 lbs" },
          { label: "UV Block", value: "> 99%" },
          { label: "Warranty", value: "5-7 Years Exterior Exposure" }
        ]
      },
      "polycarbonate-osw": {
        name: "Polycarbonate OSW",
        slug: "polycarbonate-osw",
        shortDescription: "Specialized exterior film engineered specifically for acrylic and polycarbonate plastic glazing surfaces.",
        subtitle: "Outgassing-safe exterior protection for polycarbonate and acrylic glazing.",
        heroImage: "/sub-solutions/glass-protection.png",
        descriptionTitle: "Breathable adhesive technology engineered specifically for plastic substrates.",
        descriptionParagraphs: [
          "Standard window film adhesives cannot be applied to polycarbonate, acrylic, or Plexiglas because plastic substrates continuously release outgassing vapors that cause standard films to bubble and blister.",
          "Polycarbonate OSW utilizes a unique vapor-permeable, breathable pressure-sensitive adhesive system that accommodates thermal expansion and outgassing without bubbling.",
          "It provides scratch protection, UV blocking, and enhanced impact retention for plastic skylights, bus shelters, acoustic barriers, and marine hatches."
        ],
        descriptionImage: "/sub-solutions/glass-protection.png",
        stats: [
          { label: "Substrate Compatibility", value: "Polycarbonate & Acrylic" },
          { label: "Bubble Resistance", value: "Outgassing Proof" },
          { label: "UV Protection", value: "99%" }
        ],
        features: [
          { title: "Vapor Permeable Adhesive", desc: "Allows outgassing vapors from plastic sheets to pass through without bubbling.", icon: "Layers" },
          { title: "Anti-Scratch Shield", desc: "Protects soft polycarbonate surfaces against abrasive scratches and graffiti.", icon: "Shield" },
          { title: "UV Degradation Blocker", desc: "Prevents yellowing and hazing of polycarbonate from intense sunlight.", icon: "Sun" }
        ],
        specs: [
          { label: "Compatible Substrates", value: "Polycarbonate, PMMA / Acrylic, Lexan, Plexiglas" },
          { label: "Thickness", value: "4 Mil - 6 Mil" },
          { label: "Adhesive Type", value: "Specially formulated outgassing-compatible acrylic" },
          { label: "UV Rejection", value: "99%" },
          { label: "Surface Hardness", value: "2H Scratch Resistance" },
          { label: "Warranty", value: "5 Years Exterior / 10 Years Interior" }
        ]
      }
    }
  },

  "marine-window-film": {
    name: "Marine Window Film",
    slug: "marine-window-film",
    shortDescription: "High-performance marine-grade solar and privacy window films engineered specifically for yachts, boats, and maritime vessels.",
    heroImage: "/sub-products/magnum-ir.png",
    heroSubtitle: "Corrosion-proof ceramic and hybrid films engineered to conquer ocean glare and high humidity.",
    descriptionTitle: "Specialized thermal defense and optical comfort for seafaring vessels and luxury yachts.",
    descriptionParagraphs: [
      "Operating on the open water exposes marine vessels to intensified solar radiation reflected off the water surface, excessive heat in pilot houses, and rapid interior leather fading. Our Marine Window Films are precision-engineered to withstand harsh salt-spray environments.",
      "Formulated with 100% non-corrosive ceramic and carbon nanomaterials, these films will never oxidize, discolor, or interfere with essential VHF radio, marine radar, autopilot, or satellite communication systems.",
      "They provide outstanding heat reduction for onboard air conditioning efficiency, eliminate blinding water glare for the captain, and enhance guest privacy in yacht staterooms."
    ],
    descriptionImage: "/sub-products/magnum-black.png",
    subProducts: {
      "xenith-ir": {
        name: "Xenith IR",
        slug: "xenith-ir",
        shortDescription: "Flagship marine ceramic film with extreme infrared rejection and maximum navigational clarity.",
        subtitle: "The pinnacle of marine solar protection with up to 96% infrared heat rejection.",
        heroImage: "/sub-products/magnum-ir.png",
        descriptionTitle: "Ultimate infrared cooling designed for yacht flybridges and pilot house windows.",
        descriptionParagraphs: [
          "Xenith IR features proprietary nanoparticles that selectively target and eliminate intense infrared wavelengths (the primary cause of cabin heat) without requiring dark or reflective tinting.",
          "It ensures pilot house windows maintain pristine, crystal-clear optical clarity for safe navigation in all sea conditions, day or night.",
          "Totally metal-free, Xenith IR will not corrode in salty ocean air or impede onboard electronic communications."
        ],
        descriptionImage: "/sub-products/magnum-ir.png",
        stats: [
          { label: "Infrared Heat Block (IR)", value: "Up to 96%" },
          { label: "Signal Interference", value: "0% VHF/GPS" },
          { label: "UV Block", value: "99.9%" }
        ],
        features: [
          { title: "Ultra-High IR Rejection", desc: "Blocks up to 96% of infrared heat waves for a cool, quiet yacht cabin.", icon: "Zap" },
          { title: "Crystal Clear Vision", desc: "High optical transparency ensures safe day and night vessel navigation.", icon: "Sun" },
          { title: "Zero Corrosion", desc: "Contains no metallic elements; completely impervious to salt mist.", icon: "Shield" }
        ],
        specs: [
          { label: "Film Technology", value: "Next-Gen Nano-Ceramic Marine" },
          { label: "Infrared Rejection (IRER)", value: "Up to 96%" },
          { label: "Total Solar Heat Rejected", value: "62% - 70%" },
          { label: "Visible Light Transmitted", value: "35% - 75%" },
          { label: "UV Protection", value: "99.9%" },
          { label: "Radio Transparency", value: "100% (Radar, GPS, VHF, Satcom)" },
          { label: "Warranty", value: "10 Years Marine Lifetime" }
        ]
      },
      "magnum-ir": {
        name: "Magnum IR",
        slug: "magnum-ir",
        shortDescription: "High-performance ceramic heat-rejecting film with balanced shading and glare suppression.",
        subtitle: "Superior thermal comfort and glare dampening for salon areas and yacht cabins.",
        heroImage: "/sub-products/magnum-ir.png",
        descriptionTitle: "Exceptional heat and glare suppression for maritime leisure spaces.",
        descriptionParagraphs: [
          "Magnum IR combines high infrared rejection with comfortable tint levels, dramatically reducing water glare and creating a tranquil, relaxed ambiance inside yacht salons.",
          "Its advanced nano-ceramic matrix blocks 99% of UV rays, shielding exquisite marine upholstery, teak woodwork, and custom leather finishes from sun damage.",
          "Engineered to deliver heavy thermal relief, easing the continuous electrical load on marine generators and chiller plants."
        ],
        descriptionImage: "/sub-products/magnum-ir.png",
        stats: [
          { label: "Infrared Rejection", value: "Up to 90%" },
          { label: "Glare Reduction", value: "Up to 80%" },
          { label: "Marine Corrosion Proof", value: "100%" }
        ],
        features: [
          { title: "Significant Glare Dampening", desc: "Softens blinding ocean reflections on water and digital navigation screens.", icon: "Sun" },
          { title: "Protects Luxury Interiors", desc: "Safeguards custom marine leather, fabrics, and fine teak millwork.", icon: "Shield" },
          { title: "Chiller Efficiency", desc: "Reduces continuous onboard AC load and generator fuel burn.", icon: "Zap" }
        ],
        specs: [
          { label: "Technology", value: "Deep-Dyed Nano-Ceramic Marine Hybrid" },
          { label: "Total Solar Energy Rejected", value: "55% - 66%" },
          { label: "Infrared Rejection", value: "Up to 90%" },
          { label: "Visible Light Transmitted", value: "20% - 50%" },
          { label: "UV Rejection", value: "99%" },
          { label: "Salt Spray Tested", value: "Exceeds ASTM B117 salt spray standards" },
          { label: "Warranty", value: "10 Years Marine" }
        ]
      },
      "magnum-black": {
        name: "Magnum Black",
        slug: "magnum-black",
        shortDescription: "Deep, elegant marine privacy film delivering dark shading and VIP stateroom seclusion.",
        subtitle: "Deep charcoal tone providing luxurious privacy and dramatic exterior styling.",
        heroImage: "/sub-products/magnum-black.png",
        descriptionTitle: "Total stateroom privacy and sleek exterior aesthetics for luxury vessels.",
        descriptionParagraphs: [
          "Magnum Black gives yacht hulls and cabin windows a rich, dark charcoal exterior profile that creates a unified, modern silhouette on the water.",
          "It provides complete daytime privacy for guest staterooms and VIP suites, shielding occupants from dockside onlookers and neighboring vessels at anchor.",
          "Designed with color-stable carbon compounds that will never turn purple or bubble despite constant exposure to harsh marine sun."
        ],
        descriptionImage: "/sub-products/magnum-black.png",
        stats: [
          { label: "Glare Reduction", value: "Up to 93%" },
          { label: "Stateroom Privacy", value: "VIP High" },
          { label: "Color Stability", value: "Zero Fade" }
        ],
        features: [
          { title: "VIP Privacy", desc: "Shields staterooms from neighboring boats and marina piers during the day.", icon: "Shield" },
          { title: "Sleek Yacht Silhouette", desc: "Creates a seamless tinted glass band complementing modern boat designs.", icon: "Layers" },
          { title: "Non-Fading Carbon Matrix", desc: "Resists color degradation and purpling in high-UV ocean environments.", icon: "Sun" }
        ],
        specs: [
          { label: "Material Composition", value: "Color-Stable Marine Carbon" },
          { label: "Available VLTs", value: "5%, 15%, 20%, 35%" },
          { label: "Solar Energy Rejected", value: "50% - 63%" },
          { label: "Glare Reduction", value: "65% - 93%" },
          { label: "UV Rejection", value: "99%" },
          { label: "Corrosion Risk", value: "Zero (Metal-free)" },
          { label: "Warranty", value: "10 Years Marine" }
        ]
      }
    }
  }
};

// Category alias mapping for backward compatibility
export const categoryAliases: Record<string, string> = {
  "solar-control": "sun-control-window-film",
  "safety-and-security": "safety-and-security-window-film"
};

// Sub-product alias mapping for backward compatibility
export const subProductAliases: Record<string, string> = {
  "lx-series": "lx-series-non-reflective",
  "clear-safety-film": "clear-safety-film-series",
  "safety-films": "sun-control-safety-film-series"
};
