export interface Service {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  benefits: string[];
  processSteps: { step: string; title: string; description: string }[];
}

export const servicesData: Service[] = [
  {
    id: "architectural-design",
    title: "Architectural Design & Engineering",
    titleAr: "التصميم والتخطيط المعماري",
    category: "Architecture",
    shortDescription: "Innovative, functional, and aesthetically striking architectural concepts tailored to modern urban and residential landscapes.",
    fullDescription: "Our architectural engineering team crafts sustainable, space-efficient, and visually stunning architectural designs. We combine aesthetic vision with functional precision, ensuring full compliance with local building codes and environmental standards.",
    iconName: "FaDraftingCompass",
    benefits: [
      "Custom 3D BIM Modeling & VR Walkthroughs",
      "Optimized natural light & energy efficiency",
      "Full local municipal code compliance",
      "Seamless integration of structural & MEP systems"
    ],
    processSteps: [
      { step: "01", title: "Concept & Vision", description: "Initial consultation, client requirements, and site analysis." },
      { step: "02", title: "Schematic Design", description: "Drafting preliminary layouts, 3D renderings, and floor plans." },
      { step: "03", title: "Detailed Engineering", description: "Finalizing architectural blueprints, material specs, and permit approvals." }
    ]
  },
  {
    id: "structural-engineering",
    title: "Structural Engineering & Analysis",
    titleAr: "الهندسة والتحليل الإنشائي",
    category: "Engineering",
    shortDescription: "Robust, resilient structural design ensuring safety, longevity, and structural integrity for all complex building developments.",
    fullDescription: "We provide high-precision structural calculations, seismic analysis, foundation designs, and load-bearing framework optimization using state-of-the-art engineering software.",
    iconName: "FaBuilding",
    benefits: [
      "Advanced Finite Element Analysis (FEA)",
      "Cost-optimized reinforced concrete & steel frame designs",
      "Seismic hazard mitigation & wind load resistance",
      "Structural renovation & retrofitting assessments"
    ],
    processSteps: [
      { step: "01", title: "Soil & Structural Audit", description: "Geotechnical report assessment and structural load calculations." },
      { step: "02", title: "Frame Modeling", description: "3D structural computer simulation for safety verification." },
      { step: "03", title: "Construction Blueprints", description: "Detailed rebar layouts, steel connection details, and structural sheets." }
    ]
  },
  {
    id: "interior-design",
    title: "Interior Architecture & Luxury Decor",
    titleAr: "التصميم الداخلي والديكور المعماري",
    category: "Interior",
    shortDescription: "Bespoke interior spaces that merge luxury aesthetics, ergonomic efficiency, and fine material craftsmanship.",
    fullDescription: "From executive commercial headquarters to high-end residential villas, our interior designers create harmonious spaces with curated lighting, bespoke furniture layouts, and premium finishes.",
    iconName: "FaCouch",
    benefits: [
      "High-definition 3D photorealistic renderings",
      "Custom furniture, acoustics & lighting design",
      "Material selection & luxury procurement support",
      "Turnkey interior fit-out supervision"
    ],
    processSteps: [
      { step: "01", title: "Moodboard & Style", description: "Defining interior identity, color palettes, and material samples." },
      { step: "02", title: "Spatial Planning", description: "Optimizing room layouts, circulation, and custom joinery." },
      { step: "03", title: "Execution Supervision", description: "Overseeing contractor installation and final decorative placement." }
    ]
  },
  {
    id: "project-management",
    title: "Project Management & Construction Supervision",
    titleAr: "إدارة المشاريع والإشراف الهندسي",
    category: "Management",
    shortDescription: "End-to-end site management, quality assurance, budget control, and timeline delivery for engineering projects.",
    fullDescription: "Our experienced site engineers and project managers ensure projects are completed on schedule, within budget, and up to the highest standards of safety and workmanship.",
    iconName: "FaTasks",
    benefits: [
      "Rigorous contractor quality audit & site inspections",
      "Strict schedule tracking & milestone reporting",
      "Cost optimization & variation claim management",
      "Safety (HSE) oversight and compliance"
    ],
    processSteps: [
      { step: "01", title: "Tendering & Contractor Selection", description: "Evaluating bids, contract agreements, and baseline schedules." },
      { step: "02", title: "Site Oversight", description: "Daily site inspections, quality testing, and progress tracking." },
      { step: "03", title: "Handover & Certification", description: "Final snagging list, testing, commissioning, and client handover." }
    ]
  },
  {
    id: "urban-planning",
    title: "Urban Planning & Master Planning",
    titleAr: "التخطيط العمراني وتطوير الأراضي",
    category: "Planning",
    shortDescription: "Strategic master planning for residential communities, commercial hubs, and public infrastructure developments.",
    fullDescription: "We design vibrant, connected urban environments that balance green infrastructure, pedestrian mobility, traffic flow, and smart city technology.",
    iconName: "FaMapMarkedAlt",
    benefits: [
      "Comprehensive zoning & land-use analysis",
      "Pedestrian-friendly and transit-oriented development",
      "Infrastructure & utility network integration",
      "Environmental impact assessment (EIA)"
    ],
    processSteps: [
      { step: "01", title: "Site & Demographic Survey", description: "Mapping topography, traffic streams, and environmental factors." },
      { step: "02", title: "Master Plan Concept", description: "Designing zoning divisions, road grids, and public amenities." },
      { step: "03", title: "Regulatory Approval", description: "Submitting master plans to governmental planning authorities." }
    ]
  },
  {
    id: "sustainable-green-building",
    title: "Sustainable & Green Building Consultancy",
    titleAr: "استشارات المباني الخضراء والطاقة",
    category: "Sustainability",
    shortDescription: "Eco-friendly engineering strategies designed to achieve LEED certification and reduce operational energy costs.",
    fullDescription: "We integrate renewable energy systems, rainwater harvesting, smart HVAC controls, and thermal insulation to create zero-carbon footprint buildings.",
    iconName: "FaLeaf",
    benefits: [
      "LEED & BREEAM certification advisory",
      "Solar power system design & energy modeling",
      "Water recycling & sustainable waste management",
      "Lifecycle carbon reduction planning"
    ],
    processSteps: [
      { step: "01", title: "Energy Audit", description: "Analyzing thermal envelope and expected power consumption." },
      { step: "02", title: "Green System Integration", description: "Specifying solar panels, smart glass, and efficient HVAC." },
      { step: "03", title: "Certification Filing", description: "Documenting compliance for official green building accreditation." }
    ]
  }
];
