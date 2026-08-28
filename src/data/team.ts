export interface TeamMember {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  degree: string;
  degreeAr: string;
  specialization: string;
  bio: string;
  experienceYears: number;
  email: string;
  linkedin: string;
  image: string;
  projectsLed: number;
  featuredQuote: string;
}

export const teamData: TeamMember[] = [
  {
    id: "sobhi-sakallah",
    name: "Sobhi Sakallah",
    nameAr: "م. صبحي ساق الله",
    role: "Founder & General Manager, Head of Architecture Department",
    roleAr: "المؤسس والمدير العام ورئيس قسم الهندسة المعمارية",
    degree: "Bch. Architecture",
    degreeAr: "بكالوريوس هندسة معمارية",
    specialization: "Architectural Engineering & Firm Management",
    bio: "المدير العام ورئيس قسم الهندسة المعمارية بخبرة 16 عاماً في قيادة التصاميم المعمارية والتخطيط الاستراتيجي للمشاريع.",
    experienceYears: 16,
    email: "atlas.engineers20@gmail.com",
    linkedin: "https://linkedin.com",
    image: "/images/gm photo.jpg",
    projectsLed: 65,
    featuredQuote: "القيادة المعمارية الحقيقية تكمن في الجمع بين الرؤية الإبداعية والإتقان الهندسي."
  },
  {
    id: "mohammed-altabbaa",
    name: "Mohammed AlTabbaa",
    nameAr: "م. محمد الطباع",
    role: "Head of Civil Engineering Department",
    roleAr: "رئيس قسم الهندسة المدنية والإنشائية",
    degree: "Bch. Civil Engineer",
    degreeAr: "بكالوريوس هندسة مدنية",
    specialization: "Civil & Structural Engineering",
    bio: "رئيس قسم الهندسة المدنية بخبرة 14 عاماً في الإشراف على الدراسات الإنشائية والتنفيذ الميداني للمباني الكبرى.",
    experienceYears: 14,
    email: "atlas.engineers20@gmail.com",
    linkedin: "https://linkedin.com",
    image: "/images/user-avatar.png",
    projectsLed: 50,
    featuredQuote: "السلامة المتكاملة والدقة الإنشائية هما الركيزة الأساسية لاستدامة المباني."
  },
  {
    id: "samy-abu-hashem",
    name: "Samy Abu Hashem",
    nameAr: "م. سامي أبو هاشم",
    role: "Structural Engineer",
    roleAr: "مهندس إنشائي",
    degree: "Bch. Civil Engineer",
    degreeAr: "بكالوريوس هندسة مدنية",
    specialization: "Structural Calculations & FEA Analysis",
    bio: "مهندس إنشائي بخبرة 9 أعوام في تصميم الحسابات الهندسية ومحاكاة أحمال المباني والأساسات الخرسانية.",
    experienceYears: 9,
    email: "atlas.engineers20@gmail.com",
    linkedin: "https://linkedin.com",
    image: "/images/user-avatar.png",
    projectsLed: 38,
    featuredQuote: "الدراسة الإنشائية الدقيقة تضمن أعلى مستويات الأمان والجودة الميدانية."
  },
  {
    id: "basma-abu-hatab",
    name: "Basma Abu Hatab",
    nameAr: "م. بسمة أبو حطب",
    role: "Head of Electrical Engineering Department",
    roleAr: "رئيسة قسم الهندسة الكهربائية",
    degree: "Bch. Electrical Engineer",
    degreeAr: "بكالوريوس هندسة كهربائية",
    specialization: "Electrical & Power Systems",
    bio: "رئيسة قسم الهندسة الكهربائية بخبرة 11 عاماً في تصميم شبكات الطاقة والأنظمة الكهربائية الذكية وتوزيع الإضاءة.",
    experienceYears: 11,
    email: "atlas.engineers20@gmail.com",
    linkedin: "https://linkedin.com",
    image: "/images/user-avatar.png",
    projectsLed: 45,
    featuredQuote: "الحلول الكهربائية الذكية تمنح المباني كفاءة عالية وترشيداً مستداماً للطاقة."
  },
  {
    id: "thaer-aldeeb",
    name: "Thaer Aldeeb",
    nameAr: "م. ثائر الديب",
    role: "Electrical Engineer",
    roleAr: "مهندس كهربائي",
    degree: "Bch. Electrical Engineer",
    degreeAr: "بكالوريوس هندسة كهربائية",
    specialization: "Building Systems & Automation",
    bio: "مهندس كهربائي بخبرة 7 أعوام في إعداد المخططات الكهربائية والتمديدات والإشراف التنفيذي في المواقع.",
    experienceYears: 7,
    email: "atlas.engineers20@gmail.com",
    linkedin: "https://linkedin.com",
    image: "/images/user-avatar.png",
    projectsLed: 28,
    featuredQuote: "التكامل بين الدوائر الكهربائية والسلامة الميدانية يضمن أداء متوافقاً مع أعلى الكودات."
  },
  {
    id: "bahaa-aljadba",
    name: "Bahaa AlJadba",
    nameAr: "م. بهاء الجدبة",
    role: "Head of Mechanical Engineering Department",
    roleAr: "رئيس قسم الهندسة الميكانيكية",
    degree: "Bch. Mechatronics Engineer",
    degreeAr: "بكالوريوس هندسة ميكاترونكس",
    specialization: "HVAC & Mechanical Engineering",
    bio: "رئيس قسم الهندسة الميكانيكية بخبرة 12 عاماً في تصميم أنظمة التكييف والتغذية والهيدروليك والأنظمة الذكية.",
    experienceYears: 12,
    email: "atlas.engineers20@gmail.com",
    linkedin: "https://linkedin.com",
    image: "/images/user-avatar.png",
    projectsLed: 40,
    featuredQuote: "الأنظمة الميكانيكية المتقدمة توفر بيئة داخلية صحية ومريحة لجميع المباني."
  },
  {
    id: "aliaa-abushaban",
    name: "Aliaa Abushaban",
    nameAr: "م. علياء أبو شعبان",
    role: "Mechanical Engineer",
    roleAr: "مهندسة ميكانيكية",
    degree: "Bch. Industrial Engineer",
    degreeAr: "بكالوريوس هندسة صناعية",
    specialization: "Industrial & Mechanical Systems",
    bio: "مهندسة ميكانيكية وصناعية بخبرة 5 أعوام في تخطيط وتحسين الكفاءة التشغيلية والأنظمة الميكانيكية.",
    experienceYears: 5,
    email: "atlas.engineers20@gmail.com",
    linkedin: "https://linkedin.com",
    image: "/images/user-avatar.png",
    projectsLed: 22,
    featuredQuote: "التفكير الصناعي والهندسي يضمن سلاسة التشغيل وتقليل الهدر في المشاريع."
  },
  {
    id: "nesma-al-khozondar",
    name: "Nesma al khozondar",
    nameAr: "م. نسمة الخزندار",
    role: "Architect",
    roleAr: "مهندسة معمارية",
    degree: "Bch. Architecture",
    degreeAr: "بكالوريوس هندسة معمارية",
    specialization: "Architectural Rendering & BIM",
    bio: "مهندسة معمارية بخبرة 3 أعوام في تطوير المخططات التنفيذية والنمذجة ثلاثية الأبعاد والرندر المعماري.",
    experienceYears: 3,
    email: "atlas.engineers20@gmail.com",
    linkedin: "https://linkedin.com",
    image: "/images/user-avatar.png",
    projectsLed: 18,
    featuredQuote: "التفاصيل المعمارية الدقيقة تمنح المساحات تميزاً وجمالاً فريداً."
  },
  {
    id: "rawan-mustafa",
    name: "Rawan Mustafa",
    nameAr: "م. روان مصطفى",
    role: "Architect",
    roleAr: "مهندسة معمارية",
    degree: "Bch. Architecture",
    degreeAr: "بكالوريوس هندسة معمارية",
    specialization: "Spatial Design & Drafts",
    bio: "مهندسة معمارية بخبرة عام في إعداد الواجهات والمساقط المعمارية والتصميم الفراغي الحديث.",
    experienceYears: 1,
    email: "atlas.engineers20@gmail.com",
    linkedin: "https://linkedin.com",
    image: "/images/user-avatar.png",
    projectsLed: 10,
    featuredQuote: "الشغف المعماري هو المحرك الأول لتقديم فضاءات معاصرة تلبي احتياجات العملاء."
  },
  {
    id: "mohammed-khalaf",
    name: "Mohammed Khalaf",
    nameAr: "أ. محمد خلف",
    role: "Accountant",
    roleAr: "محاسب عام والمدير المالي",
    degree: "Bch. Accountant",
    degreeAr: "بكالوريوس محاسبة",
    specialization: "Financial Management & Budgets",
    bio: "محاسب عام بخبرة 14 عاماً في التخطيط المالي وتدقيق العقود والتكاليف والهندسة المالية للمشاريع.",
    experienceYears: 14,
    email: "atlas.engineers20@gmail.com",
    linkedin: "https://linkedin.com",
    image: "/images/user-avatar.png",
    projectsLed: 60,
    featuredQuote: "الرقابة المالية الشفافة تضمن استقرار المشاريع وتسليمها ضمن الميزانيات المحددة."
  },
  {
    id: "aya-sakallah",
    name: "Aya Sakallah",
    nameAr: "أ. آية ساق الله",
    role: "IT Officer",
    roleAr: "مسؤولة تكنولوجيا المعلومات والأنظمة",
    degree: "Diploma of IT",
    degreeAr: "دبلوم تكنولوجيا المعلومات",
    specialization: "IT Infrastructure & Digital Systems",
    bio: "مسؤولة تكنولوجيا المعلومات بخبرة 5 أعوام في إدارة البنية التحتية البرمجية والأنظمة الرقمية بشركة أطلس.",
    experienceYears: 5,
    email: "atlas.engineers20@gmail.com",
    linkedin: "https://linkedin.com",
    image: "/images/user-avatar.png",
    projectsLed: 25,
    featuredQuote: "التحول الرقمي السلس والأنظمة التقنية الآمنة تدعم الإنتاجية الهندسية العالية."
  }
];
