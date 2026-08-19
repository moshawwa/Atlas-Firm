export interface Project {
  id: string;
  title: string;
  titleAr: string;
  category: "Architectural" | "Structural" | "Interior" | "Urban" | "Sustainable";
  categoryAr: string;
  client: string;
  year: string;
  location: string;
  area: string;
  status: "Completed" | "Under Construction" | "Design Phase";
  summary: string;
  fullDescription: string;
  mainImage: string;
  gallery: string[];
  keySpecs: { label: string; value: string }[];
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
    year: "2024",
    location: "غزة - حي الرمال | Gaza - Al-Rimal District",
    area: "14,500 sqm",
    status: "Completed",
    summary: "تصميم معماري وإنشائي لمبنى تجاري وسكني متعدد الطوابق يجمع بين الحداثة البصرية والاستغلال الأمثل للمساحات.",
    fullDescription: "مشروع مجمع أبو شعبان التجاري والسكني يُعد نموذجاً رائداً في دمج الواجهات الزجاجية المعاصرة مع العناصر التظليلية المعمارية. قدمت أطلس كافة الدراسات الإنشائية والمعمارية واختبارات السلامة.",
    mainImage: "/images/real-projects/ABU_SHABAN_BUILDING/1.jpg",
    gallery: [
      "/images/real-projects/ABU_SHABAN_BUILDING/1.jpg",
      "/images/real-projects/ABU_SHABAN_BUILDING/22.jpg",
      "/images/real-projects/ABU_SHABAN_BUILDING/3.jpg",
      "/images/real-projects/ABU_SHABAN_BUILDING/4.jpg",
      "/images/real-projects/ABU_SHABAN_BUILDING/5.jpg"
    ],
    keySpecs: [
      { label: "نوع المبنى", value: "مجمع تجاري وسكني (Multi-story Tower)" },
      { label: "المساحة الإجمالية", value: "14,500 متر مربع" },
      { label: "النظام الإنشائي", value: "خرسانة مسلحة عالي الجودة" },
      { label: "الواجهات الخارجية", value: "زجاج مزدوج وكابوند معاصر" }
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
    year: "2024",
    location: "غزة - المجمع الطبي | Gaza Medical Zone",
    area: "22,000 sqm",
    status: "Completed",
    summary: "دراسات استشارية وحسابات إنشائية متخصصة لمستشفى الهدى الطبي لضمان أعلى معايير السلامة والتجهيزات الكهروميكانيكية.",
    fullDescription: "يتميز مشروع مستشفى الهدى التخصصي بتصميم إنشائي معقد يستوعب غرف العمليات، غرف الأشعة المجهزة بحمايات الإشعاع، والأنظمة الطبية الدقيقة.",
    mainImage: "/images/real-projects/AlHuda_Hospital/1.jpg",
    gallery: [
      "/images/real-projects/AlHuda_Hospital/1.jpg",
      "/images/real-projects/AlHuda_Hospital/2.jpg",
      "/images/real-projects/AlHuda_Hospital/3.jpg"
    ],
    keySpecs: [
      { label: "السعة الفندقية الطبية", value: "180 سرير تخصصي" },
      { label: "المعايير الطبية", value: "مطابق لاشتراطات وزارة الصحة والسلامة" },
      { label: "أنظمة MEP", value: "تكييف مركزي وضغط سلبي للمختبرات" }
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
    year: "2023",
    location: "غزة - الرمال الشمالي | Gaza - North Rimal",
    area: "1,250 sqm",
    status: "Completed",
    summary: "فيلا سكنية مودرن تتميز بالخطوط المعمارية النقية والمجالس المفتوحة وتكامل الإضاءة الطبيعية.",
    fullDescription: "صممت فيلا بنات لتوفر أقصى درجات الخصوصية العائلية والرفاهية المعمارية، مع دمج المسابح المفتوحة والجلسات الخارجية ذات الحماية الحرارية.",
    mainImage: "/images/real-projects/BANAT_VILLA/1 (1).jpg",
    gallery: [
      "/images/real-projects/BANAT_VILLA/1 (1).jpg",
      "/images/real-projects/BANAT_VILLA/1 (2).jpg",
      "/images/real-projects/BANAT_VILLA/1 (3).jpg",
      "/images/real-projects/BANAT_VILLA/1 (4).jpg"
    ],
    keySpecs: [
      { label: "الطراز المعماري", value: "عمارة مودرن حديثة (Modern Luxury)" },
      { label: "المسطحات الخضراء", value: "حدائق خاصة ومسبح خارجي" },
      { label: "التشطيبات", value: "رخام إيطالي وألواح خشبية معالجة" }
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
    year: "2025",
    location: "فلسطين - الموقع الأثري | Palestine - Heritage Site",
    area: "8,800 sqm",
    status: "Under Construction",
    summary: "مشروع استشاري لتصميم وتطوير متحف الكنيسة البيزنطية للحفاظ على التراث العمراني التاريخي وتسهيل مسارات الزوار.",
    fullDescription: "قام فريق أطلس بإعداد المخططات المعمارية والترميم الإنشائي لموقع الكنيسة البيزنطية، محققين التوازن بين الحفاظ التاريخي وإتاحة تجربة ثنائية ممتازة للزوار.",
    mainImage: "/images/real-projects/الكنيسة_البيزنطيةمتحف/1 فوتوشب.jpg",
    gallery: [
      "/images/real-projects/الكنيسة_البيزنطيةمتحف/1 فوتوشب.jpg",
      "/images/real-projects/الكنيسة_البيزنطيةمتحف/2 فوتوشب.jpg",
      "/images/real-projects/الكنيسة_البيزنطيةمتحف/6.jpg"
    ],
    keySpecs: [
      { label: "نوع المشروع", value: "ترميم وتطوير موقع أثري وثقافي" },
      { label: "مسارات الزوار", value: "جُسر خشبية ومرتفعات زجاجية آمنة" },
      { label: "الحماية البيئية", value: "تثبيت مناخي وتحكم بالرطوبة والضوء" }
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
    year: "2024",
    location: "غزة - شارع عمر المختار | Gaza - Omar Al-Mukhtar St",
    area: "950 sqm",
    status: "Completed",
    summary: "تصميم واجهات تجارية معاصرة وديكورات داخلية متميزة تعكس الفخامة والأجواء الترحيبية الدافئة.",
    fullDescription: "ابتكر فريق التصميم الداخلي في شركة أطلس تجربة فراغية استثنائية لمطعم الطيبات، تشمل توزيع الإضاءة، الأثاث المخصص، والواجهات الخارجية الجذابة.",
    mainImage: "/images/real-projects/مطعم_الطيبات_تصميم_واجهة_وتصميم_داخلي/تصميم واجهة لمطعم الطيبات/واجهة مقترح ثالث 02.jpg",
    gallery: [
      "/images/real-projects/مطعم_الطيبات_تصميم_واجهة_وتصميم_داخلي/تصميم واجهة لمطعم الطيبات/واجهة مقترح ثالث 02.jpg",
      "/images/real-projects/مطعم_الطيبات_تصميم_واجهة_وتصميم_داخلي/تصميم واجهة لمطعم الطيبات/مقترح ثالث 03.jpg",
      "/images/real-projects/مطعم_الطيبات_تصميم_واجهة_وتصميم_داخلي/صور تصميم داخلي للطابق الارضي لمطعم الطيبات/صورة 02.jpg"
    ],
    keySpecs: [
      { label: "التصنيف", value: "تجاري وضيافة (Commercial Restaurant)" },
      { label: "الواجهات", value: "إضاءات خطية متطورة وشاشات هويّة" },
      { label: "السعة الاستيعابية", value: "220 زائر" }
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
    year: "2024",
    location: "غزة - شارع النصر | Gaza - Al-Nasr St",
    area: "3,400 sqm",
    status: "Completed",
    summary: "تصميم وتحديث واجهات إدارية وسكنية راقية باستخدام مواد إكساء متطورة كالكابوند والرخام الإيطالي.",
    fullDescription: "مشروع إعادة تصميم واجهة المبنى لرفع القيمة الاستثمارية والجمالية، مع استخدام إضاءة معمارية لإبراز الخطوط الرأسية والكتل البارزة.",
    mainImage: "/images/real-projects/ELEVATION_DESIGN_DR_ABED/8 AB.jpg",
    gallery: [
      "/images/real-projects/ELEVATION_DESIGN_DR_ABED/8 AB.jpg",
      "/images/real-projects/ELEVATION_DESIGN_DR_ABED/13 AB.jpg",
      "/images/real-projects/ELEVATION_DESIGN_DR_ABED/17 AB.jpg",
      "/images/real-projects/ELEVATION_DESIGN_DR_ABED/19 AB.jpg"
    ],
    keySpecs: [
      { label: "نوع الواجهة", value: "واجهة حديثة كابوند ورخام طبيعي" },
      { label: "العزل الحراري", value: "نظام عزل مزدوج المفعول" }
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
    year: "2023",
    location: "غزة - حي تل الهوى | Gaza - Tel Al-Hawa",
    area: "8,200 sqm",
    status: "Completed",
    summary: "إشراف هندسي وتنفيذي ودراسة أحمال إنشائية لمبنى حمدان لتوفير بيئة إنشائية آمنة وفق أعلى الاشتراطات.",
    fullDescription: "قامت شركة أطلس بإدارة موقع العمل ومتابعة صب الأساسات والـ Raft Foundations وتدقيق المخططات التفصيلية.",
    mainImage: "/images/real-projects/HAMDAN_BUIDING/IMG_20200715_135725.jpg",
    gallery: [
      "/images/real-projects/HAMDAN_BUIDING/IMG_20200715_135725.jpg",
      "/images/real-projects/HAMDAN_BUIDING/IMG_20200715_135747.jpg",
      "/images/real-projects/HAMDAN_BUIDING/IMG_20200715_135750.jpg"
    ],
    keySpecs: [
      { label: "الأعمال الإنشائية", value: "أساسات حصيرة مسلحة واختبارات خرسانة" },
      { label: "الإشراف", value: "إشراف موقعي يومي مستمر" }
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
    year: "2024",
    location: "غزة - ميناء غزة | Gaza Coast",
    area: "1,500 sqm",
    status: "Completed",
    summary: "تصميم معماري متكامل لفيلا النمر السكنية يركز على الخصوصية والرحابة والإنارة الطبيعية.",
    fullDescription: "تجمع فيلا النمر بين أصالة التوزيع الفراغي للمجالس والنوادي العائلية والكتل المعمارية البارزة.",
    mainImage: "/images/real-projects/NEMER_VILLA/1.jpg",
    gallery: [
      "/images/real-projects/NEMER_VILLA/1.jpg",
      "/images/real-projects/NEMER_VILLA/2.jpg",
      "/images/real-projects/NEMER_VILLA/3.jpg"
    ],
    keySpecs: [
      { label: "نوع العقار", value: "فيلا سكنية مستقلا" },
      { label: "التصميم الداخلي", value: "مودرن كلاسيك" }
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
    year: "2024",
    location: "الولايات المتحدة | California, USA",
    area: "650 sqm",
    status: "Completed",
    summary: "تصميم مبنى سكني مودرن بالولايات المتحدة بأسلوب العمارة الغربية المعاصرة والنوافذ البانورامية.",
    fullDescription: "تم تطوير المخططات المعمارية والتنفيذية وفق أكواد البناء الأمريكية (US Building Codes) مع توفير حلول كفاءة الطاقة والتدفئة الذاتية.",
    mainImage: "/images/real-projects/HOUSE_USA/1.jpeg",
    gallery: [
      "/images/real-projects/HOUSE_USA/1.jpeg",
      "/images/real-projects/HOUSE_USA/2.jpeg",
      "/images/real-projects/HOUSE_USA/3.jpeg"
    ],
    keySpecs: [
      { label: "كود البناء", value: "US International Residential Code (IRC)" },
      { label: "التدفئة والتهوية", value: "نظام HVAC ذكي ترشيدي" }
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
    year: "2024",
    location: "غزة - المجمع التعليمي | Gaza Educational District",
    area: "4,500 sqm",
    status: "Completed",
    summary: "تصميم الفضاءات التعليمية، قاعات الاجتماعات، ومختبرات العلوم بمدرسة الوحدة بطرق مريحة وعصرية.",
    fullDescription: "ابتكار بيئة تعليمية تلهم الطلاب وتوفر أقصى درجات التركيز، مع تصميم غرف الاجتماعات والإدارة بأثاث أرجونوميك مدروس.",
    mainImage: "/images/real-projects/ALWIHDA_SCHOOL_INTERIOR_DESIGN/تصميم داخلي لغرفة الاجتماعات/M 3.jpg",
    gallery: [
      "/images/real-projects/ALWIHDA_SCHOOL_INTERIOR_DESIGN/تصميم داخلي لغرفة الاجتماعات/M 3.jpg",
      "/images/real-projects/ALWIHDA_SCHOOL_INTERIOR_DESIGN/تصميم داخلي لغرفة الاجتماعات/M 5.jpg"
    ],
    keySpecs: [
      { label: "المرافق المصممة", value: "غرف اجتماعات، مختبرات، ومكاتب إدارة" },
      { label: "العزل الصوتي", value: "ألواح أكوستيك ممتصة للصوت" }
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
    year: "2023",
    location: "غزة - السنتر التجاري | Gaza Business Hub",
    area: "2,100 sqm",
    status: "Completed",
    summary: "تصميم واجهة إدارية تجارية بشركة فلاح الحداد مع دمج الهوية التجارية في الإكساءات الخارجية.",
    fullDescription: "دراسة وتصميم كتل الواجهة وإبراز شعار الشركة بأسلوب راقٍ وجذاب للمستأجرين والعملاء.",
    mainImage: "/images/real-projects/تصميم_واجهة_اداري_-_فلاح_الحداد/01.jpg",
    gallery: [
      "/images/real-projects/تصميم_واجهة_اداري_-_فلاح_الحداد/01.jpg",
      "/images/real-projects/تصميم_واجهة_اداري_-_فلاح_الحداد/02.jpg"
    ],
    keySpecs: [
      { label: "الواجهة", value: "كابوند مقاوم للحريق ورخام جاف" }
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
    year: "2024",
    location: "غزة - أبراج السعادة | Gaza Residences",
    area: "320 sqm",
    status: "Completed",
    summary: "تصميم واستشارات ديكور داخلي لشقة سكنية بأسلوب المودرن الراقي وتوزيع الإضاءة الغائرة.",
    fullDescription: "تناغم الألوان المحايدة مع الأثاث المودرن والخشب الجوز الداكن لإعطاء إحساس بالدفء والاتساع.",
    mainImage: "/images/real-projects/OSAMA_INTERIOR/1A.jpg",
    gallery: [
      "/images/real-projects/OSAMA_INTERIOR/1A.jpg",
      "/images/real-projects/OSAMA_INTERIOR/2A.jpg",
      "/images/real-projects/OSAMA_INTERIOR/3A.jpg"
    ],
    keySpecs: [
      { label: "الأسلوب", value: "مودرن مينيماليست (Modern Minimalist)" }
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
    year: "2024",
    location: "غزة - برج بوليفارد | Gaza Boulevard",
    area: "280 sqm",
    status: "Completed",
    summary: "تصميم داخلي متكامل لشقة سكنية بمساحات مفتوحة وأثاث مصمم خصيصاً ليناسب الأجواء المريحة.",
    fullDescription: "استغلال ذكي للمساحات السكنية وتوفير حلول تخزين مخفية مع لمسات الإضاءة المخفية في الأسقف المعلقة.",
    mainImage: "/images/real-projects/صور_تصميم_داخلي_شقة_خالد_ساق_الله/111.jpg",
    gallery: [
      "/images/real-projects/صور_تصميم_داخلي_شقة_خالد_ساق_الله/111.jpg",
      "/images/real-projects/صور_تصميم_داخلي_شقة_خالد_ساق_الله/333.jpg",
      "/images/real-projects/صور_تصميم_داخلي_شقة_خالد_ساق_الله/555.jpg"
    ],
    keySpecs: [
      { label: "نوع المشروع", value: "تجهيز وتشطيب سكنى كامل" }
    ],
    featured: false
  }
];
