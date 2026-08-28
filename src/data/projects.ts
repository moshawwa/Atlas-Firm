export interface Project {
  id: string;
  title: string;
  titleAr: string;
  category: "Architectural" | "Structural" | "Interior" | "Urban" | "Sustainable";
  categoryAr: string;
  client: string;
  clientAr: string;
  year: string;
  location: string;
  locationAr: string;
  area: string;
  areaAr: string;
  status: "Completed" | "Under Construction" | "Design Phase";
  statusAr: string;
  summary: string;
  summaryAr: string;
  fullDescription: string;
  fullDescriptionAr: string;
  mainImage: string;
  gallery: string[];
  keySpecs: { label: string; labelAr: string; value: string; valueAr: string }[];
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "abu-shaban-building",
    title: "Abu Shaban Commercial & Residential Tower",
    titleAr: "مبنى مجمع أبو شعبان التجاري والسكني",
    category: "Architectural",
    categoryAr: "معماري وانشائي",
    client: "Abu Shaban Group",
    clientAr: "مجموعة أبو شعبان",
    year: "2024",
    location: "Gaza - Al-Rimal District",
    locationAr: "غزة - حي الرمال",
    area: "14,500 sqm",
    areaAr: "14,500 متر مربع",
    status: "Completed",
    statusAr: "مكتمل",
    summary: "Architectural & structural engineering design for a multi-story commercial and residential tower combining space efficiency and modern glass aesthetics.",
    summaryAr: "تصميم معماري وإنشائي لمبنى تجاري وسكني متعدد الطوابق يجمع بين الحداثة البصرية والاستغلال الأمثل للمساحات.",
    fullDescription: "Abu Shaban Commercial & Residential Complex project is a flagship model integrating contemporary curtain wall facades with sun-shading architectural elements. Atlas engineering team delivered all structural calculations, architectural BIM drawings, and safety code audits.",
    fullDescriptionAr: "مشروع مجمع أبو شعبان التجاري والسكني يُعد نموذجاً رائداً في دمج الواجهات الزجاجية المعاصرة مع العناصر التظليلية المعمارية. قدمت أطلس كافة الدراسات الإنشائية والمعمارية واختبارات السلامة.",
    mainImage: "/images/real-projects/ABU_SHABAN_BUILDING/1.jpg",
    gallery: [
      "/images/real-projects/ABU_SHABAN_BUILDING/1.jpg",
      "/images/real-projects/ABU_SHABAN_BUILDING/22.jpg",
      "/images/real-projects/ABU_SHABAN_BUILDING/3.jpg",
      "/images/real-projects/ABU_SHABAN_BUILDING/4.jpg",
      "/images/real-projects/ABU_SHABAN_BUILDING/5.jpg"
    ],
    keySpecs: [
      { label: "Building Type", labelAr: "نوع المبنى", value: "Multi-story Commercial & Residential Tower", valueAr: "مجمع تجاري وسكني برج متعدد الطوابق" },
      { label: "Gross Floor Area", labelAr: "المساحة الإجمالية", value: "14,500 sqm", valueAr: "14,500 متر مربع" },
      { label: "Structural System", labelAr: "النظام الإنشائي", value: "High-strength Reinforced Concrete", valueAr: "خرسانة مسلحة عالي الجودة" },
      { label: "Exterior Facade", labelAr: "الواجهات الخارجية", value: "Double Glazed Curtain Wall & Cladding", valueAr: "زجاج مزدوج وكابوند معاصر" }
    ],
    featured: true
  },
  {
    id: "alhuda-hospital",
    title: "Al-Huda Specialized Hospital",
    titleAr: "مشروع مستشفى الهدى التخصصي",
    category: "Structural",
    categoryAr: "إنشائي ومباني عامة",
    client: "Al-Huda Medical Group",
    clientAr: "مجموعة الهدى الطبية",
    year: "2024",
    location: "Gaza Medical Zone",
    locationAr: "غزة - المجمع الطبي",
    area: "22,000 sqm",
    areaAr: "22,000 متر مربع",
    status: "Completed",
    statusAr: "مكتمل",
    summary: "Specialized structural calculations and MEP consultancy for Al-Huda Hospital ensuring medical code compliance.",
    summaryAr: "دراسات استشارية وحسابات إنشائية متخصصة لمستشفى الهدى الطبي لضمان أعلى معايير السلامة والتجهيزات الكهروميكانيكية.",
    fullDescription: "Al-Huda Hospital features complex structural engineering accommodating radiation shielding operating suites, heavy diagnostic imaging equipment, negative pressure isolation rooms, and clean utility networks.",
    fullDescriptionAr: "يتميز مشروع مستشفى الهدى التخصصي بتصميم إنشائي معقد يستوعب غرف العمليات، غرف الأشعة المجهزة بحمايات الإشعاع، والأنظمة الطبية الدقيقة.",
    mainImage: "/images/real-projects/AlHuda_Hospital/1.jpg",
    gallery: [
      "/images/real-projects/AlHuda_Hospital/1.jpg",
      "/images/real-projects/AlHuda_Hospital/2.jpg",
      "/images/real-projects/AlHuda_Hospital/3.jpg"
    ],
    keySpecs: [
      { label: "Medical Bed Capacity", labelAr: "السعة الفندقية الطبية", value: "180 Specialized Beds", valueAr: "180 سرير تخصصي" },
      { label: "Health Compliance", labelAr: "المعايير الطبية", value: "Full MOH & Civil Defense Compliance", valueAr: "مطابق لاشتراطات وزارة الصحة والسلامة" },
      { label: "MEP Infrastructure", labelAr: "أنظمة MEP", value: "Centralized HVAC & Negative Pressure Labs", valueAr: "تكييف مركزي وضغط سلبي للمختبرات" }
    ],
    featured: true
  },
  {
    id: "banat-villa",
    title: "Banat Luxury Residence Villa",
    titleAr: "فيلا سكنية فاخرة - عائلة بنات",
    category: "Architectural",
    categoryAr: "معماري وتصميم داخلي",
    client: "Banat Family",
    clientAr: "عائلة بنات",
    year: "2023",
    location: "Gaza - North Rimal",
    locationAr: "غزة - الرمال الشمالي",
    area: "1,250 sqm",
    areaAr: "1,250 متر مربع",
    status: "Completed",
    statusAr: "مكتمل",
    summary: "Modern luxury residential villa featuring clean architectural lines, open courtyards, and natural lighting.",
    summaryAr: "فيلا سكنية مودرن تتميز بالخطوط المعمارية النقية والمجالس المفتوحة وتكامل الإضاءة الطبيعية.",
    fullDescription: "Designed to offer privacy and architectural elegance, Banat Villa integrates open outdoor pools, shaded terraces, and premium Italian marble finishes.",
    fullDescriptionAr: "صممت فيلا بنات لتوفر أقصى درجات الخصوصية العائلية والرفاهية المعمارية، مع دمج المسابح المفتوحة والجلسات الخارجية ذات الحماية الحرارية.",
    mainImage: "/images/real-projects/BANAT_VILLA/1 (1).jpg",
    gallery: [
      "/images/real-projects/BANAT_VILLA/1 (1).jpg",
      "/images/real-projects/BANAT_VILLA/1 (2).jpg",
      "/images/real-projects/BANAT_VILLA/1 (3).jpg",
      "/images/real-projects/BANAT_VILLA/1 (4).jpg"
    ],
    keySpecs: [
      { label: "Architectural Style", labelAr: "الطراز المعماري", value: "Modern Luxury Architecture", valueAr: "عمارة مودرن حديثة" },
      { label: "Outdoor Amenities", labelAr: "المسطحات الخضراء", value: "Private Gardens & Infinity Pool", valueAr: "حدائق خاصة ومسبح خارجي" },
      { label: "Finishing Materials", labelAr: "التشطيبات", value: "Italian Marble & Treated Wood Paneling", valueAr: "رخام إيطالي وألواح خشبية معالجة" }
    ],
    featured: true
  },
  {
    id: "byzantine-museum",
    title: "Byzantine Church Museum & Heritage Site",
    titleAr: "متحف وموقع الكنيسة البيزنطية الأثرية",
    category: "Sustainable",
    categoryAr: "مباني عامة وثقافية",
    client: "Ministry of Tourism & Heritage",
    clientAr: "وزارة السياحة والآثار",
    year: "2025",
    location: "Palestine - Heritage Site",
    locationAr: "فلسطين - الموقع الأثري",
    area: "8,800 sqm",
    areaAr: "8,800 متر مربع",
    status: "Under Construction",
    statusAr: "قيد التنفيذ",
    summary: "Heritage preservation and architectural museum design for the Byzantine Church historical site.",
    summaryAr: "مشروع استشاري لتصميم وتطوير متحف الكنيسة البيزنطية للحفاظ على التراث العمراني التاريخي وتسهيل مسارات الزوار.",
    fullDescription: "Atlas team engineered structural reinforcement and visitor walkway elevated platforms balancing historical preservation with immersive visitor experience.",
    fullDescriptionAr: "قام فريق أطلس بإعداد المخططات المعمارية والترميم الإنشائي لموقع الكنيسة البيزنطية، محققين التوازن بين الحفاظ التاريخي وإتاحة تجربة ثنائية ممتازة للزوار.",
    mainImage: "/images/real-projects/الكنيسة_البيزنطيةمتحف/1 فوتوشب.jpg",
    gallery: [
      "/images/real-projects/الكنيسة_البيزنطيةمتحف/1 فوتوشب.jpg",
      "/images/real-projects/الكنيسة_البيزنطيةمتحف/2 فوتوشب.jpg",
      "/images/real-projects/الكنيسة_البيزنطيةمتحف/6.jpg"
    ],
    keySpecs: [
      { label: "Project Category", labelAr: "نوع المشروع", value: "Heritage Conservation & Museum", valueAr: "ترميم وتطوير موقع أثري وثقافي" },
      { label: "Visitor Walkways", labelAr: "مسارات الزوار", value: "Elevated Timber & Glass Bridges", valueAr: "جُسر خشبية ومرتفعات زجاجية آمنة" }
    ],
    featured: true
  },
  {
    id: "altaybat-restaurant",
    title: "Al-Taybat Restaurant Facade & Interior",
    titleAr: "تصميم واجهة وتصاميم داخلية لمطعم الطيبات",
    category: "Interior",
    categoryAr: "تصميم داخلي وتجاري",
    client: "Al-Taybat Hospitality",
    clientAr: "شركة الطيبات للضيافة",
    year: "2024",
    location: "Gaza - Omar Al-Mukhtar St",
    locationAr: "غزة - شارع عمر المختار",
    area: "950 sqm",
    areaAr: "950 متر مربع",
    status: "Completed",
    statusAr: "مكتمل",
    summary: "Commercial facade redesign and interior dining architecture for Al-Taybat Hospitality.",
    summaryAr: "تصميم واجهات تجارية معاصرة وديكورات داخلية متميزة تعكس الفخامة والأجواء الترحيبية الدافئة.",
    fullDescription: "Interior spatial design crafting an inviting atmosphere with bespoke lighting grids, custom seating arrangements, and striking commercial exterior branding.",
    fullDescriptionAr: "ابتكر فريق التصميم الداخلي في شركة أطلس تجربة فراغية استثنائية لمطعم الطيبات، تشمل توزيع الإضاءة، الأثاث المخصص، والواجهات الخارجية الجذابة.",
    mainImage: "/images/real-projects/مطعم_الطيبات_تصميم_واجهة_وتصميم_داخلي/تصميم واجهة لمطعم الطيبات/واجهة مقترح ثالث 02.jpg",
    gallery: [
      "/images/real-projects/مطعم_الطيبات_تصميم_واجهة_وتصميم_داخلي/تصميم واجهة لمطعم الطيبات/واجهة مقترح ثالث 02.jpg",
      "/images/real-projects/مطعم_الطيبات_تصميم_واجهة_وتصميم_داخلي/تصميم واجهة لمطعم الطيبات/مقترح ثالث 03.jpg",
      "/images/real-projects/مطعم_الطيبات_تصميم_واجهة_وتصميم_داخلي/صور تصميم داخلي للطابق الارضي لمطعم الطيبات/صورة 02.jpg"
    ],
    keySpecs: [
      { label: "Sector", labelAr: "التصنيف", value: "Commercial Hospitality", valueAr: "تجاري وضيافة" },
      { label: "Seating Capacity", labelAr: "السعة الاستيعابية", value: "220 Guests", valueAr: "220 زائر" }
    ],
    featured: true
  },
  {
    id: "dr-abed-elevation",
    title: "Dr. Abed Modern Elevation Design",
    titleAr: "تصميم واجهة مبنى د. عابد الإداري والسكني",
    category: "Architectural",
    categoryAr: "تصميم واجهات ومعماري",
    client: "Dr. Abed",
    clientAr: "د. عابد",
    year: "2024",
    location: "Gaza - Al-Nasr St",
    locationAr: "غزة - شارع النصر",
    area: "3,400 sqm",
    areaAr: "3,400 متر مربع",
    status: "Completed",
    statusAr: "مكتمل",
    summary: "Exterior elevation redesign utilizing aluminium composite cladding and natural marble.",
    summaryAr: "تصميم وتحديث واجهات إدارية وسكنية راقية باستخدام مواد إكساء متطورة كالكابوند والرخام الإيطالي.",
    fullDescription: "Commercial and residential facade transformation elevating building asset value through architectural lighting and vertical massing.",
    fullDescriptionAr: "مشروع إعادة تصميم واجهة المبنى لرفع القيمة الاستثمارية والجمالية، مع استخدام إضاءة معمارية لإبراز الخطوط الرأسية والكتل البارزة.",
    mainImage: "/images/real-projects/ELEVATION_DESIGN_DR_ABED/8 AB.jpg",
    gallery: [
      "/images/real-projects/ELEVATION_DESIGN_DR_ABED/8 AB.jpg",
      "/images/real-projects/ELEVATION_DESIGN_DR_ABED/13 AB.jpg",
      "/images/real-projects/ELEVATION_DESIGN_DR_ABED/17 AB.jpg",
      "/images/real-projects/ELEVATION_DESIGN_DR_ABED/19 AB.jpg"
    ],
    keySpecs: [
      { label: "Facade Type", labelAr: "نوع الواجهة", value: "Aluminium Cladding & Natural Marble", valueAr: "واجهة حديثة كابوند ورخام طبيعي" }
    ],
    featured: false
  },
  {
    id: "hamdan-building",
    title: "Hamdan Commercial & Residential Building",
    titleAr: "مبنى حمدان التجاري والسكني",
    category: "Structural",
    categoryAr: "إنشائي وإشراف موقعي",
    client: "Hamdan Properties",
    clientAr: "شركة حمدان العقارية",
    year: "2023",
    location: "Gaza - Tel Al-Hawa",
    locationAr: "غزة - حي تل الهوى",
    area: "8,200 sqm",
    areaAr: "8,200 متر مربع",
    status: "Completed",
    statusAr: "مكتمل",
    summary: "Structural engineering audit and site supervision for Hamdan commercial complex.",
    summaryAr: "إشراف هندسي وتنفيذي ودراسة أحمال إنشائية لمبنى حمدان لتوفير بيئة إنشائية آمنة وفق أعلى الاشتراطات.",
    fullDescription: "Atlas site engineers supervised raft foundations, rebar testing, and quality control auditing for Hamdan building development.",
    fullDescriptionAr: "قامت شركة أطلس بإدارة موقع العمل ومتابعة صب الأساسات والـ Raft Foundations وتدقيق المخططات التفصيلية.",
    mainImage: "/images/real-projects/HAMDAN_BUIDING/IMG_20200715_135725.jpg",
    gallery: [
      "/images/real-projects/HAMDAN_BUIDING/IMG_20200715_135725.jpg",
      "/images/real-projects/HAMDAN_BUIDING/IMG_20200715_135747.jpg",
      "/images/real-projects/HAMDAN_BUIDING/IMG_20200715_135750.jpg"
    ],
    keySpecs: [
      { label: "Structural Audit", labelAr: "الأعمال الإنشائية", value: "Raft Foundations & Concrete Lab Tests", valueAr: "أساسات حصيرة مسلحة واختبارات خرسانة" }
    ],
    featured: false
  },
  {
    id: "nemer-villa",
    title: "Nemer Luxury Villa",
    titleAr: "تصميم وتخطيط فيلا النمر",
    category: "Architectural",
    categoryAr: "معماري وتصميم سكني",
    client: "Nemer Estate",
    clientAr: "عائلة النمر",
    year: "2024",
    location: "Gaza Coast",
    locationAr: "غزة - ميناء غزة",
    area: "1,500 sqm",
    areaAr: "1,500 متر مربع",
    status: "Completed",
    statusAr: "مكتمل",
    summary: "Architectural design for Nemer Villa emphasizing privacy, spacious layouts, and sea views.",
    summaryAr: "تصميم معماري متكامل لفيلا النمر السكنية يركز على الخصوصية والرحابة والإنارة الطبيعية.",
    fullDescription: "Nemer Villa combines traditional reception court layouts with modern cantilevered balconies.",
    fullDescriptionAr: "تجمع فيلا النمر بين أصالة التوزيع الفراغي للمجالس والنوادي العائلية والكتل المعمارية البارزة.",
    mainImage: "/images/real-projects/NEMER_VILLA/1.jpg",
    gallery: [
      "/images/real-projects/NEMER_VILLA/1.jpg",
      "/images/real-projects/NEMER_VILLA/2.jpg",
      "/images/real-projects/NEMER_VILLA/3.jpg"
    ],
    keySpecs: [
      { label: "Property Type", labelAr: "نوع العقار", value: "Private Detached Villa", valueAr: "فيلا سكنية مستقلة" }
    ],
    featured: false
  },
  {
    id: "house-usa",
    title: "Modern Residence - USA",
    titleAr: "تصميم المنزل المودرن العصري - الولايات المتحدة",
    category: "Architectural",
    categoryAr: "معماري وتصميم عالمي",
    client: "Private US Client",
    clientAr: "عميل خاص - أمريكا",
    year: "2024",
    location: "California, USA",
    locationAr: "الولايات المتحدة الأمريكية",
    area: "650 sqm",
    areaAr: "650 متر مربع",
    status: "Completed",
    statusAr: "مكتمل",
    summary: "Modern US residential home design incorporating panoramic glazing and timber elements.",
    summaryAr: "تصميم مبنى سكني مودرن بالولايات المتحدة بأسلوب العمارة الغربية المعاصرة والنوافذ البانورامية.",
    fullDescription: "Designed per US International Residential Code (IRC) standards with integrated HVAC efficiency.",
    fullDescriptionAr: "تم تطوير المخططات المعمارية والتنفيذية وفق أكواد البناء الأمريكية (US Building Codes) مع توفير حلول كفاءة الطاقة.",
    mainImage: "/images/real-projects/HOUSE_USA/1.jpeg",
    gallery: [
      "/images/real-projects/HOUSE_USA/1.jpeg",
      "/images/real-projects/HOUSE_USA/2.jpeg",
      "/images/real-projects/HOUSE_USA/3.jpeg"
    ],
    keySpecs: [
      { label: "Building Code", labelAr: "كود البناء", value: "US IRC Standard Compliance", valueAr: "كود البناء الأمريكي IRC" }
    ],
    featured: false
  },
  {
    id: "alwihda-school",
    title: "Al-Wihda Modern School Interior",
    titleAr: "التصميم الداخلي لمدرسة الوحدة التخصصية",
    category: "Interior",
    categoryAr: "تصميم داخلي ومباني تعليمية",
    client: "Al-Wihda Educational Directorate",
    clientAr: "إدارة مدرسة الوحدة",
    year: "2024",
    location: "Gaza Educational District",
    locationAr: "غزة - المجمع التعليمي",
    area: "4,500 sqm",
    areaAr: "4,500 متر مربع",
    status: "Completed",
    statusAr: "مكتمل",
    summary: "Interior spatial design for classrooms, executive halls, and science laboratories.",
    summaryAr: "تصميم الفضاءات التعليمية، قاعات الاجتماعات، ومختبرات العلوم بمدرسة الوحدة بطرق مريحة وعصرية.",
    fullDescription: "Ergonomic interior environment stimulating student focus and administrative efficiency.",
    fullDescriptionAr: "ابتكار بيئة تعليمية تلهم الطلاب وتوفر أقصى درجات التركيز، مع تصميم غرف الاجتماعات والإدارة بأثاث أرجونوميك مدروس.",
    mainImage: "/images/real-projects/ALWIHDA_SCHOOL_INTERIOR_DESIGN/تصميم داخلي لغرفة الاجتماعات/M 3.jpg",
    gallery: [
      "/images/real-projects/ALWIHDA_SCHOOL_INTERIOR_DESIGN/تصميم داخلي لغرفة الاجتماعات/M 3.jpg",
      "/images/real-projects/ALWIHDA_SCHOOL_INTERIOR_DESIGN/تصميم داخلي لغرفة الاجتماعات/M 5.jpg"
    ],
    keySpecs: [
      { label: "Facilities Designed", labelAr: "المرافق المصممة", value: "Conference Rooms, Labs & Administrative Suites", valueAr: "غرف اجتماعات، مختبرات، ومكاتب إدارة" }
    ],
    featured: false
  },
  {
    id: "falah-al-haddad",
    title: "Falah Al-Haddad Commercial Elevation",
    titleAr: "تصميم واجهة مبنى إداري - الأستاذ فلاح الحداد",
    category: "Architectural",
    categoryAr: "معماري وتصميم واجهات",
    client: "Falah Al-Haddad Co.",
    clientAr: "شركة فلاح الحداد",
    year: "2023",
    location: "Gaza Business Hub",
    locationAr: "غزة - السنتر التجاري",
    area: "2,100 sqm",
    areaAr: "2,100 متر مربع",
    status: "Completed",
    statusAr: "مكتمل",
    summary: "Commercial facade design incorporating corporate identity and modern cladding.",
    summaryAr: "تصميم واجهة إدارية تجارية بشركة فلاح الحداد مع دمج الهوية التجارية في الإكساءات الخارجية.",
    fullDescription: "Facade massing study bringing distinct visual identity to commercial leasing clients.",
    fullDescriptionAr: "دراسة وتصميم كتل الواجهة وإبراز شعار الشركة بأسلوب راقٍ وجذاب للمستأجرين والعملاء.",
    mainImage: "/images/real-projects/تصميم_واجهة_اداري_-_فلاح_الحداد/01.jpg",
    gallery: [
      "/images/real-projects/تصميم_واجهة_اداري_-_فلاح_الحداد/01.jpg",
      "/images/real-projects/تصميم_واجهة_اداري_-_فلاح_الحداد/02.jpg"
    ],
    keySpecs: [
      { label: "Cladding Materials", labelAr: "مواد الإكساء", value: "Fire-rated Composite Panels & Dry Marble", valueAr: "كابوند مقاوم للحريق ورخام جاف" }
    ],
    featured: false
  },
  {
    id: "osama-interior",
    title: "Osama Apartment Modern Interior",
    titleAr: "التصميم الداخلي لشقة أسامة الفاخرة",
    category: "Interior",
    categoryAr: "تصميم داخلي وديكور",
    client: "Osama Family",
    clientAr: "عائلة أسامة",
    year: "2024",
    location: "Gaza Residences",
    locationAr: "غزة - أبراج السعادة",
    area: "320 sqm",
    areaAr: "320 متر مربع",
    status: "Completed",
    statusAr: "مكتمل",
    summary: "Interior decor consultancy for a high-end modern residential apartment.",
    summaryAr: "تصميم واستشارات ديكور داخلي لشقة سكنية بأسلوب المودرن الراقي وتوزيع الإضاءة الغائرة.",
    fullDescription: "Neutral color palette harmonizing with walnut joinery and concealed lighting grids.",
    fullDescriptionAr: "تناغم الألوان المحايدة مع الأثاث المودرن والخشب الجوز الداكن لإعطاء إحساس بالدفء والاتساع.",
    mainImage: "/images/real-projects/OSAMA_INTERIOR/1A.jpg",
    gallery: [
      "/images/real-projects/OSAMA_INTERIOR/1A.jpg",
      "/images/real-projects/OSAMA_INTERIOR/2A.jpg",
      "/images/real-projects/OSAMA_INTERIOR/3A.jpg"
    ],
    keySpecs: [
      { label: "Interior Style", labelAr: "الأسلوب", value: "Modern Minimalist Interior", valueAr: "مودرن مينيماليست" }
    ],
    featured: false
  },
  {
    id: "khaled-saqallah",
    title: "Khaled Saqallah Interior Residence",
    titleAr: "التصميم الداخلي والديكور لشقة خالد ساق الله",
    category: "Interior",
    categoryAr: "تصميم داخلي وديكور",
    client: "Khaled Saqallah",
    clientAr: "خالد ساق الله",
    year: "2024",
    location: "Gaza Boulevard",
    locationAr: "غزة - برج بوليفارد",
    area: "280 sqm",
    areaAr: "280 متر مربع",
    status: "Completed",
    statusAr: "مكتمل",
    summary: "Turnkey interior residential design and spatial layout optimization.",
    summaryAr: "تصميم داخلي متكامل لشقة سكنية بمساحات مفتوحة وأثاث مصمم خصيصاً ليناسب الأجواء المريحة.",
    fullDescription: "Custom built-in storage solutions with indirect LED ceiling cove lighting.",
    fullDescriptionAr: "استغلال ذكي للمساحات السكنية وتوفير حلول تخزين مخفية مع لمسات الإضاءة المخفية في الأسقف المعلقة.",
    mainImage: "/images/real-projects/صور_تصميم_داخلي_شقة_خالد_ساق_الله/111.jpg",
    gallery: [
      "/images/real-projects/صور_تصميم_داخلي_شقة_خالد_ساق_الله/111.jpg",
      "/images/real-projects/صور_تصميم_داخلي_شقة_خالد_ساق_الله/333.jpg",
      "/images/real-projects/صور_تصميم_داخلي_شقة_خالد_ساق_الله/555.jpg"
    ],
    keySpecs: [
      { label: "Project Scope", labelAr: "نوع المشروع", value: "Full Interior Design & Turnkey Fit-out", valueAr: "تجهيز وتشطيب سكنى كامل" }
    ],
    featured: false
  }
];
