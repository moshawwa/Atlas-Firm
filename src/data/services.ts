export interface Service {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  shortDescription: string;
  shortDescriptionAr: string;
  fullDescription: string;
  fullDescriptionAr: string;
  iconName: string;
  benefits: string[];
  benefitsAr: string[];
  processSteps: { step: string; title: string; description: string; titleAr?: string; descriptionAr?: string }[];
}

export const servicesData: Service[] = [
  {
    id: "architectural-design",
    title: "Architectural Design & Engineering",
    titleAr: "التصميم والتخطيط المعماري",
    category: "Architecture",
    categoryAr: "معماري",
    shortDescription: "Innovative, functional, and aesthetically striking architectural concepts tailored to modern urban and residential landscapes.",
    shortDescriptionAr: "تصاميم معمارية مبتكرة ووظيفية تلبي احتياجات المباني الحديثة والمنشآت الفاخرة.",
    fullDescription: "Our architectural engineering team crafts sustainable, space-efficient, and visually stunning architectural designs. We combine aesthetic vision with functional precision, ensuring full compliance with local building codes and environmental standards.",
    fullDescriptionAr: "يقدم فريق الهندسة المعمارية في أطلس تصاميم استثنائية تجمع بين الفخامة المعمارية والاستغلال الأنسب للمساحات، مع الالتزام الكامل بأعلى الكودات واشتراطات التراخيص.",
    iconName: "FaDraftingCompass",
    benefits: [
      "Custom 3D BIM Modeling & VR Walkthroughs",
      "Optimized natural light & energy efficiency",
      "Full local municipal code compliance",
      "Seamless integration of structural & MEP systems"
    ],
    benefitsAr: [
      "نمذجة معمارية ثلاثية الأبعاد BIM وجولات افتراضية",
      "توزيع مثالي للإضاءة الطبيعية والترشيد الحراري",
      "التزام كامل بكودات البناء واشتراطات البلديات",
      "تكامل سلس بين المخططات المعمارية والإنشائية والكهرو ميكانيكية"
    ],
    processSteps: [
      { step: "01", title: "Concept & Vision", titleAr: "الفكرة والرؤية", description: "Initial consultation, client requirements, and site analysis." },
      { step: "02", title: "Schematic Design", titleAr: "التصميم الأولي", description: "Drafting preliminary layouts, 3D renderings, and floor plans." },
      { step: "03", title: "Detailed Engineering", titleAr: "المخططات التنفيذية", description: "Finalizing architectural blueprints, material specs, and permit approvals." }
    ]
  },
  {
    id: "structural-engineering",
    title: "Structural Engineering & Analysis",
    titleAr: "الهندسة والتحليل الإنشائي",
    category: "Engineering",
    categoryAr: "إنشائي",
    shortDescription: "Robust, resilient structural design ensuring safety, longevity, and structural integrity for all complex building developments.",
    shortDescriptionAr: "دراسات إنشائية وحسابات أحمال دقيقة تضمن أقصى درجات الأمان والسلامة للمباني والأبراج.",
    fullDescription: "We provide high-precision structural calculations, seismic analysis, foundation designs, and load-bearing framework optimization using state-of-the-art engineering software.",
    fullDescriptionAr: "نقدم دراسات وتصاميم إنشائية دقيقة تشمل حسابات الخرسانة والحديد، مقاومة الزلازل والرياح، ودراسات أساسات الحصيرة والأوتاد لضمان السلامة الكاملة.",
    iconName: "FaBuilding",
    benefits: [
      "Advanced Finite Element Analysis (FEA)",
      "Cost-optimized reinforced concrete & steel frame designs",
      "Seismic hazard mitigation & wind load resistance",
      "Structural renovation & retrofitting assessments"
    ],
    benefitsAr: [
      "تحليل إنشائي متقدم بالعناصر المحدودة FEA",
      "تصاميم خرسانية وهياكل معدنية اقتصادية وآمنة",
      "دراسات السلامة ومقاومة الأحمال الديناميكية والزلازل",
      "تقييم وتدعيم المباني والمنشآت القائمة"
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
    categoryAr: "تصميم داخلي",
    shortDescription: "Bespoke interior spaces that merge luxury aesthetics, ergonomic efficiency, and fine material craftsmanship.",
    shortDescriptionAr: "تصاميم داخلية فاخرة تعكس الذوق الرفيع وتستغل المساحات بأسلوب عصري ومريح.",
    fullDescription: "From executive commercial headquarters to high-end residential villas, our interior designers create harmonious spaces with curated lighting, bespoke furniture layouts, and premium finishes.",
    fullDescriptionAr: "نبتكر فضاءات داخلية راقية للمنازل والفيلات والمكاتب التجارية، تشمل توزيع الإضاءة، اختيار المواد الفاخرة، وتنسيق الديكورات المعمارية.",
    iconName: "FaCouch",
    benefits: [
      "High-definition 3D photorealistic renderings",
      "Custom furniture, acoustics & lighting design",
      "Material selection & luxury procurement support",
      "Turnkey interior fit-out supervision"
    ],
    benefitsAr: [
      "صور ورندر ثلاثي الأبعاد عالي الدقة والواقعية",
      "تصميم الإضاءة والأثاث والديكورات الجبسية والخيارات الصوتية",
      "اختيار أرقى الخامات ومواد التشطيب",
      "إشراف موقعي كامل على أعمال التنفيذ والتشطيب"
    ],
    processSteps: [
      { step: "01", title: "Moodboard & Style", description: "Defining interior identity, color palettes, and material samples." },
      { step: "02", title: "Spatial Planning", description: "Optimizing room layouts, circulation, and custom joinery." },
      { step: "03", title: "Execution Supervision", description: "Overseeing contractor installation and final decorative placement." }
    ]
  },
  {
    id: "project-management",
    title: "Project Management & Site Supervision",
    titleAr: "إدارة المشاريع والإشراف الهندسي",
    category: "Management",
    categoryAr: "إدارة وإشراف",
    shortDescription: "End-to-end site management, quality assurance, budget control, and timeline delivery for engineering projects.",
    shortDescriptionAr: "إدارة وتنفيذ ومتابعة ميدانية دقيقة لضمان أعلى جودة والتزام بالمواعيد والميزانية.",
    fullDescription: "Our experienced site engineers and project managers ensure projects are completed on schedule, within budget, and up to the highest standards of safety and workmanship.",
    fullDescriptionAr: "يتولى مهندسونا الميدانيون متابعة كافة أعمال الصب والحديد والتشطيبات بالموقع للتحقق من مطابقتها التامة للمخططات الهندسية والمواصفات.",
    iconName: "FaTasks",
    benefits: [
      "Rigorous contractor quality audit & site inspections",
      "Strict schedule tracking & milestone reporting",
      "Cost optimization & variation claim management",
      "Safety (HSE) oversight and compliance"
    ],
    benefitsAr: [
      "رقابة دقيقة واختبارات جودة مستمرة للمقاولين",
      "متابعة دقيقة للجدول الزمني ومراحل التنفيذ",
      "ضبط الميزانية وتفادي التكاليف الزائدة",
      "تطبيق معايير السلامة والصحة المهنية بالموقع"
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
    categoryAr: "تخطيط عمراني",
    shortDescription: "Strategic master planning for residential communities, commercial hubs, and public infrastructure developments.",
    shortDescriptionAr: "مخططات توجيهية واستراتيجية لتطوير الأراضي والمجمعات السكنية والتجارية.",
    fullDescription: "We design vibrant, connected urban environments that balance green infrastructure, pedestrian mobility, traffic flow, and smart city technology.",
    fullDescriptionAr: "نصمم مجمعات ومخططات عمرانية متكاملة تراعي شبكات الطرق، المساحات الخضراء، خدمات البنية التحتية، والمعايير البيئية.",
    iconName: "FaMapMarkedAlt",
    benefits: [
      "Comprehensive zoning & land-use analysis",
      "Pedestrian-friendly and transit-oriented development",
      "Infrastructure & utility network integration",
      "Environmental impact assessment (EIA)"
    ],
    benefitsAr: [
      "تحليل تقسيم الأراضي واستخدامات المناطق",
      "تخطيط شبكات الطرق ومسارات المشاة والخدمات",
      "دمج شبكات البنية التحتية والمرافق العامة",
      "دراسات الأثر البيئي والتنظيمي"
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
    categoryAr: "استدامة وطاقة",
    shortDescription: "Eco-friendly engineering strategies designed to achieve LEED certification and reduce operational energy costs.",
    shortDescriptionAr: "حلول هندسية مستدامة لترشيد استهلاك الطاقة والمياه وتطبيق معايير البناء الأخضر.",
    fullDescription: "We integrate renewable energy systems, rainwater harvesting, smart HVAC controls, and thermal insulation to create zero-carbon footprint buildings.",
    fullDescriptionAr: "نعتمد تقنيات العزل الحراري الحديثة، أنظمة الطاقة الشمسية، وترشيد الموارد لخلق مباني صديقة للبيئة واقتصادية في التشغيل.",
    iconName: "FaLeaf",
    benefits: [
      "LEED & BREEAM certification advisory",
      "Solar power system design & energy modeling",
      "Water recycling & sustainable waste management",
      "Lifecycle carbon reduction planning"
    ],
    benefitsAr: [
      "استشارات واعتمادات المباني الخضراء LEED",
      "تصميم أنظمة الطاقة الشمسية والمحاكاة الحرارية",
      "إعادة تدوير المياه وإدارة النفايات المستدامة",
      "تقليل البصمة الكربونية وتخفيض تكاليف التشغيل"
    ],
    processSteps: [
      { step: "01", title: "Energy Audit", description: "Analyzing thermal envelope and expected power consumption." },
      { step: "02", title: "Green System Integration", description: "Specifying solar panels, smart glass, and efficient HVAC." },
      { step: "03", title: "Certification Filing", description: "Documenting compliance for official green building accreditation." }
    ]
  }
];
