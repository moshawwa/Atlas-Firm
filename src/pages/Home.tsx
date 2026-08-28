import { useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/Sectiontitle";
import ProjectModal from "../components/ProjectModal";
import { projectsData, type Project } from "../data/projects";
import { servicesData } from "../data/services";
import { useLanguage } from "../context/LanguageContext";
import {
  FiArrowUpRight,
  FiAward,
  FiCheckCircle,
  FiTrendingUp,
  FiLayers,
  FiShield,
  FiCompass,
  FiMaximize2
} from "react-icons/fi";

const clientLogos = [
  { name: "ANERA", logo: "/images/real-projects/custemrs/Anera_Logo_RGB.jpg" },
  { name: "المجلس الفلسطيني للإسكان", logo: "/images/real-projects/custemrs/المجلس الفلسطيني للإسكان.png" },
  { name: "الاتقان للاستشارات", logo: "/images/real-projects/custemrs/alItQone_400x400.jpg" },
  { name: "VTC Training Center", logo: "/images/real-projects/custemrs/VTCAZ.jpg" },
  { name: "الجهات الهندسية والشريكة", logo: "/images/real-projects/custemrs/1587816330383.jpg" },
  { name: "شركاء النجاح 1", logo: "/images/real-projects/custemrs/download (1).png" },
  { name: "شركاء النجاح 2", logo: "/images/real-projects/custemrs/download (2).png" },
  { name: "شركاء النجاح 3", logo: "/images/real-projects/custemrs/download.png" },
  { name: "مؤسسات حليفة", logo: "/images/real-projects/custemrs/unnamed.jpg" }
];

const Home = () => {
  const { t, isRtl } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="hero-overlay-grid"></div>
        <div className="container px-4 px-lg-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="hero-logo-standalone-card mb-4">
                <img
                  src="/images/ATLAS  logo w arabic.png"
                  alt="Atlas Engineering Logo"
                  className="hero-logo-standalone-img"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <h1 className="display-4 fw-extrabold text-white mb-4 leading-tight">
                {t("نبتكر المعمار.. ", "Sculpting Architecture.. ")} <br />
                <span className="text-gold">
                  {t("ونشيّد المستقبل بدقة هندسية", "Building the Future with Engineering Precision")}
                </span>
              </h1>
              <p className="fs-5 text-slate-300 mb-4 text-white" style={{ lineHeight: "1.8", maxWidth: "620px" }}>
                {t(
                  "نقدم حلولاً هندسية ومعمارية متكاملة للمشاريع التجارية، السكنية، والتخطيط العمراني. ندمج الابتكار المعماري مع المتانة الإنشائية والاستدامة البيئية.",
                  "We deliver integrated architectural & structural engineering solutions for commercial, residential, and master planning developments. Merging design elegance with structural integrity."
                )}
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/projects" className="btn-atlas-accent fs-6">
                  {t("استعرض أعمالنا الهندسية", "Explore Our Portfolio")}
                  <FiArrowUpRight size={18} />
                </Link>
                <Link to="/contact" className="btn-atlas-outline text-white border-white fs-6">
                  {t("طلب استشارة مباشرة", "Request Consultation")}
                </Link>
              </div>
            </div>

            {/* Visual Decorative Card */}
            <div className="col-lg-5">
              <div className="dark-glass-panel p-4 p-lg-5 rounded-4 shadow-lg border border-slate-700">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-gold p-3 rounded-3 text-white">
                    <FiCompass size={32} />
                  </div>
                  <div>
                    <h5 className="text-white fw-bold m-0">{t("رؤيتنا الهندسية", "Our Engineering Vision")}</h5>
                  </div>
                </div>

                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-center gap-3 p-3 bg-slate-800 rounded-3">
                    <FiCheckCircle className="text-gold flex-shrink-0" size={20} />
                    <span className="text-slate-200 small text-white">
                      {t("تصاميم معمارية ثلاثية الأبعاد نمذجة BIM", "Custom 3D BIM Architectural Modeling")}
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-3 p-3 bg-slate-800 rounded-3">
                    <FiCheckCircle className="text-gold flex-shrink-0" size={20} />
                    <span className="text-slate-200 small text-white">
                      {t("حسابات إنشائية ومقاومة الأحمال والزلازل", "Structural FEA & Seismic Load Calculations")}
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-3 p-3 bg-slate-800 rounded-3">
                    <FiCheckCircle className="text-gold flex-shrink-0" size={20} />
                    <span className="text-slate-200 small text-white">
                      {t("إشراف موقعي كامل وإدارة تنفيذية دقيقة", "On-site Supervision & Quality Management")}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-top border-slate-700 d-flex align-items-center justify-content-between text-white-50 small">
                  <span>{t("خبرة أكثر من 18 عاماً", "18+ Years Experience")}</span>
                  <span>{t("غزة • فلسطين ومصر", "Palestine & Egypt")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="row g-4 mt-5 pt-4 border-top border-slate-800">
            <div className="col-md-3 col-6">
              <div className="stat-box">
                <div className="stat-number text-white">+150</div>
                <div className="text-slate-400 small mt-1 text-white">
                  {t("مشروعاً هندسياً منجزاً", "Completed Projects")}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-box">
                <div className="stat-number text-white">18+</div>
                <div className="text-slate-400 smallt-1 text-white">
                  {t("عاماً من الخبرة والتميّز", "Years of Excellence")}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-box">
                <div className="stat-number text-white">100%</div>
                <div className="text-slate-400 small mt-1 text-white">
                  {t("مطابقة للكودات والاعتمادات", "Municipal Code Compliance")}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-box">
                <div className="stat-number text-white">11</div>
                <div className="text-slate-400 small mt-1 text-white">
                  {t("مهندساً واستشارياً متفوقاً", "Senior Consultants")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-light-slate">
        <div className="container px-4 px-lg-5">
          <SectionTitle
            badge={t("خدماتنا الهندسية", "OUR SERVICES")}
            title={t("حلول هندسية شاملة من التخطيط إلى التسليم", "Comprehensive Engineering Solutions")}
            subtitle={t(
              "نقدم حزمة متكاملة من الخدمات الهندسية والاستشارية المصممة لتلبي أعلى المعايير المعمارية والإنشائية.",
              "We provide a complete spectrum of architectural and engineering consultancy tailored to top international benchmarks."
            )}
          />

          <div className="row g-4">
            {servicesData.slice(0, 3).map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="atlas-card p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge bg-slate-100 text-primary fw-bold px-3 py-2">
                      {isRtl ? service.categoryAr : service.category}
                    </span>
                    <FiLayers className="text-gold" size={24} />
                  </div>
                  <h4 className="fw-bold mb-3 text-slate-900">
                    {isRtl ? service.titleAr : service.title}
                  </h4>
                  <p className="text-muted small mb-4" style={{ lineHeight: "1.7" }}>
                    {isRtl ? service.shortDescriptionAr : service.shortDescription}
                  </p>
                  <div className="mt-auto">
                    <Link to="/services" className="text-primary fw-bold small d-inline-flex align-items-center gap-2">
                      {t("معرفة المزيد", "Learn More")}
                      <FiArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/services" className="btn-atlas-primary">
              {t("عرض جميع الخدمات الهندسية", "View All Services")}
              <FiArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-white">
        <div className="container px-4 px-lg-5">
          <SectionTitle
            badge={t("أبرز الأعمال الواقعية", "FEATURED REAL PROJECTS")}
            title={t("مشاريع معمارية وإنجازات واقعية", "Landmarks of Architectural Excellence")}
            subtitle={t(
              "استكشف نماذج حية ومصورة من مشاريعنا المكتملة والقائمة في مختلف المجالات المعمارية والإنشائية والتصميم الداخلي.",
              "Explore real photographic portfolios of our completed architectural, structural, and interior achievements."
            )}
          />

          <div className="row g-4">
            {featuredProjects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6">
                <div className="atlas-card">
                  <div className="atlas-card-img-wrapper">
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      className="atlas-card-img"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <span className="atlas-card-badge">{isRtl ? project.categoryAr : project.category}</span>
                  </div>
                  <div className="atlas-card-body">
                    <h5 className="fw-bold mb-2 text-slate-900">{isRtl ? project.titleAr : project.title}</h5>
                    <p className="text-muted small mb-4 flex-grow-1" style={{ lineHeight: "1.6" }}>
                      {isRtl ? project.summaryAr : project.summary}
                    </p>
                    <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                      <span className="small text-muted">{isRtl ? project.locationAr : project.location}</span>
                      <button
                        className="btn btn-sm btn-outline-primary rounded-pill px-3 d-inline-flex align-items-center gap-1"
                        onClick={() => setSelectedProject(project)}
                      >
                        {t("التفاصيل والصور", "View Gallery")}
                        <FiMaximize2 size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/projects" className="btn-atlas-accent">
              {t("تصفح معرض المشاريع الكامل (15+ مشروعاً)", "Browse Full Portfolio (15+ Projects)")}
              <FiArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Real Clients & Partners Grid */}
      <section className="py-5 bg-light-slate border-top border-bottom">
        <div className="container px-4 px-lg-5 text-center">
          <span className="section-badge mb-2">{t("عملاؤنا وشركاؤنا", "OUR CLIENTS & PARTNERS")}</span>
          <h3 className="fw-bold text-slate-900 mb-4">{t("مؤسسات وشركاء وثقوا بحلول أطلس الهندسية", "Institutions & Partners Who Trust Atlas Engineering")}</h3>
          <div className="row g-4 align-items-center justify-content-center">
            {clientLogos.map((client, idx) => (
              <div key={idx} className="col-lg-2 col-md-3 col-4">
                <div className="p-3 bg-white rounded-3 border shadow-xs d-flex align-items-center justify-content-center hover-lift" style={{ height: "90px" }}>
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{ maxHeight: "55px", maxWidth: "100%", objectFit: "contain" }}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Atlas Section */}
      <section className="section-padding bg-dark-slate position-relative overflow-hidden">
        <div className="hero-overlay-grid"></div>
        <div className="container px-4 px-lg-5 position-relative" style={{ zIndex: 2 }}>
          <SectionTitle
            badge={t("لماذا تختار أطلس؟", "WHY CHOOSE ATLAS?")}
            title={t("معايير هندسية صارمة وتصاميم معمارية مبدعة", "Strict Engineering Rigor & Creative Design")}
            subtitle={t(
              "نلتزم بتقديم حلول متكاملة تضمن أعلى عائد استثماري، متانة إنشائية، وكفاءة تشغيلية مستدامة.",
              "We are committed to delivering turnkey engineering solutions that optimize budget, structural longevity, and operational efficiency."
            )}
          />

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-slate-900 rounded-4 border border-slate-800 h-100">
                <div className="bg-gold p-3 rounded-3 text-white d-inline-block mb-3">
                  <FiShield size={28} />
                </div>
                <h4 className="fw-bold text-white mb-2">{t("أمان ونمذجة إنشائية دقيقة", "Structural Precision & Safety")}</h4>
                <p className="text-slate-400 small mb-0" style={{ lineHeight: "1.7" }}>
                  {t(
                    "استخدام أحدث برامج التحليل الإنشائي ثلاثي الأبعاد لاختبار الأحمال والزلازل وضمان السلامة الكلية.",
                    "Leveraging 3D finite element structural analysis to simulate seismic loads and structural resilience."
                  )}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-slate-900 rounded-4 border border-slate-800 h-100">
                <div className="bg-gold p-3 rounded-3 text-white d-inline-block mb-3">
                  <FiAward size={28} />
                </div>
                <h4 className="fw-bold text-white mb-2">{t("اعتمادات وتراخيص 100%", "100% Municipal Approvals")}</h4>
                <p className="text-slate-400 small mb-0" style={{ lineHeight: "1.7" }}>
                  {t(
                    "مخططاتنا الهندسية مصممة لتكون متوافقة تماماً مع الكودات المحلية واشتراطات البلديات والدفاع المدني.",
                    "All our architectural and structural blueprints strictly comply with local building regulations and municipal permits."
                  )}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-slate-900 rounded-4 border border-slate-800 h-100">
                <div className="bg-gold p-3 rounded-3 text-white d-inline-block mb-3">
                  <FiTrendingUp size={28} />
                </div>
                <h4 className="fw-bold text-white mb-2">{t("ترشيد التكاليف والإشراف", "Cost Control & Supervision")}</h4>
                <p className="text-slate-400 small mb-0" style={{ lineHeight: "1.7" }}>
                  {t(
                    "متابعة ميدانية دقيقة تضمن عدم هدر المواد، والالتزام الصارم بالجدول الزمني المعتمد للمشروع.",
                    "On-site quality audits ensuring zero material waste, budget optimization, and on-time delivery."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-gold text-white text-center">
        <div className="container px-4 px-lg-5">
          <h2 className="fw-extrabold mb-2 text-slate-900">{t("جاهز لبدء مشروعك الهندسي القادم؟", "Ready to Launch Your Next Engineering Project?")}</h2>
          <p className="fs-5 mb-4 text-slate-900" style={{ opacity: 0.9 }}>
            {t("تواصل معنا اليوم للحصول على استشارة هندسية أولية وتحديد خطة العمل المناسبة.", "Contact our team today to schedule an initial consultation and receive a project feasibility proposal.")}
          </p>
          <Link to="/contact" className="btn btn-dark btn-lg px-4 py-3 rounded-pill fw-bold fs-6">
            {t("تواصل مع فريق الاستشارات الهندسية", "Contact Engineering Consultants")}
            <FiArrowUpRight size={20} />
          </Link>
        </div>
      </section>

      {/* Modal Popup Component */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Home;
