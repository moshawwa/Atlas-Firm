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
              <div className="hero-logo-badge mb-4">
                <img
                  src="/images/ATLAS  logo w arabic.png"
                  alt="Atlas Engineering Logo"
                  className="hero-logo-img"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="hero-logo-divider"></span>
                <div>
                  <span className="hero-logo-text d-block">
                    {t("أطلس للاستشارات الهندسية", "Atlas Engineering Consultancy")}
                  </span>
                </div>
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
                    <small className="text-gold">Engineering Precision & Innovation</small>
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

                <div className="p-3 rounded-3 bg-slate-900 text-center border border-slate-800">
                  <span className="text-slate-400 small d-block mb-1">
                    {t("نسبة الالتزام بالجدول الزمني والميزانية", "On-time & On-budget Guarantee")}
                  </span>
                  <span className="fs-3 fw-bold text-gold">100% Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-dark-slate py-4 border-top border-bottom border-slate-800">
        <div className="container px-4 px-lg-5">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="stat-box">
                <div className="stat-number">+150</div>
                <div className="stat-label">{t("مشروع منجز", "Projects Completed")}</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-box">
                <div className="stat-number">18+</div>
                <div className="stat-label">{t("عام خبرة", "Years Experience")}</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-box">
                <div className="stat-number">45+</div>
                <div className="stat-label">{t("مهندس وخبير", "Engineers & Experts")}</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-box">
                <div className="stat-number">100%</div>
                <div className="stat-label">{t("رضا العملاء", "Client Satisfaction")}</div>
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
                      {service.category}
                    </span>
                    <FiLayers className="text-gold" size={24} />
                  </div>
                  <h4 className="fw-bold mb-2 text-slate-900">
                    {isRtl ? service.titleAr : service.title}
                  </h4>
                  <h6 className="text-muted mb-3" style={{ fontSize: "14px" }}>
                    {isRtl ? service.title : service.titleAr}
                  </h6>
                  <p className="text-muted small mb-4" style={{ lineHeight: "1.7" }}>
                    {service.shortDescription}
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
            title={t("مشاريع معمارية وإشعاعات إنجاز واقعية", "Landmarks of Architectural Excellence")}
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
                    <h5 className="fw-bold mb-1 text-slate-900">{isRtl ? project.titleAr : project.title}</h5>
                    <p className="text-muted small mb-3">{isRtl ? project.title : project.titleAr}</p>
                    <p className="text-muted small mb-4 flex-grow-1" style={{ lineHeight: "1.6" }}>
                      {project.summary}
                    </p>
                    <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                      <span className="small text-muted">{project.location}</span>
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

      {/* Clients & Partners Showcase Section */}
      <section className="section-padding bg-slate-50 border-top border-bottom">
        <div className="container px-4 px-lg-5">
          <SectionTitle 
            badge={t("عملاؤنا وشركاؤنا", "OUR CLIENTS & PARTNERS")}
            title={t("ثقة المؤسسات والجهات الكبرى", "Trusted by Leading Institutions & Clients")}
            subtitle={t(
              "نفخر بالشراكة والتعامل مع نخبة من المؤسسات الحكومية، الجمعيات، والشركات الاستثمارية في تنفيذ المشاريع الهندسية.",
              "We take pride in building long-standing relationships with premier organizations, agencies, and private developers."
            )}
          />

          <div className="row g-4 align-items-center justify-content-center">
            {clientLogos.map((client, idx) => (
              <div key={idx} className="col-4 col-md-3 col-lg-2">
                <div className="p-3 bg-white rounded-3 border text-center shadow-sm hover-lift d-flex align-items-center justify-content-center" style={{ height: "100px" }}>
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{ maxHeight: "64px", maxWidth: "100%", objectFit: "contain" }}
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
      <section className="section-padding bg-dark-slate">
        <div className="container px-4 px-lg-5">
          <SectionTitle
            dark
            badge={t("لماذا نحن", "WHY ATLAS FIRM")}
            title={t("معايير هندسية عالمية تضمن النجاح", "Global Engineering Standards Guaranteeing Success")}
            subtitle={t(
              "نلتزم بتقديم أعلى مستويات الدقة والابتكار المعماري لضمان سلامة واستدامة استثمارات عملائنا.",
              "We adhere to uncompromising engineering rigor ensuring safety, aesthetics, and optimal investment returns."
            )}
          />

          <div className="row g-4">
            <div className="col-md-4">
              <div className="dark-glass-panel p-4 h-100 rounded-3">
                <div className="text-gold mb-3">
                  <FiShield size={36} />
                </div>
                <h5 className="text-white fw-bold mb-2">{t("سلامة إنشائية صارمة", "Structural Rigor")}</h5>
                <p className="text-slate-400 small" style={{ lineHeight: "1.7" }}>
                  {t(
                    "إجراء كافة المحاكاة والتحليلات الإنشائية المتقدمة للتعامل مع الأحمال الديناميكية والظروف المناخية بدقة عالية.",
                    "Advanced FEA stress modeling and dynamic load simulations guaranteeing structural resilience."
                  )}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="dark-glass-panel p-4 h-100 rounded-3">
                <div className="text-gold mb-3">
                  <FiTrendingUp size={36} />
                </div>
                <h5 className="text-white fw-bold mb-2">{t("تقنيات BIM الحديثة", "Modern BIM Workflows")}</h5>
                <p className="text-slate-400 small" style={{ lineHeight: "1.7" }}>
                  {t(
                    "استخدام أحدث برامج نمذجة معلومات المباني لتقليل التكاليف وتجنب التعارضات قبل بدء التنفيذ الميداني.",
                    "Integrating 3D BIM clash-detection to eliminate field errors and control construction budgets."
                  )}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="dark-glass-panel p-4 h-100 rounded-3">
                <div className="text-gold mb-3">
                  <FiAward size={36} />
                </div>
                <h5 className="text-white fw-bold mb-2">{t("إدارة جودة معتمدة", "Certified Quality Control")}</h5>
                <p className="text-slate-400 small" style={{ lineHeight: "1.7" }}>
                  {t(
                    "فريق هندسي متخصص يراقب جودة المواد والتنفيذ خطوة بخطوة لضمان تسليم المشاريع حسب أعلى المواصفات القياسية.",
                    "Dedicated quality management auditors overseeing on-site material testing and code compliance."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-5 bg-gold text-white">
        <div className="container px-4 px-lg-5">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 text-center text-lg-start">
            <div>
              <h3 className="fw-bold mb-2 text-white">
                {t("هل لديك مشروع هندسي ترغب في مناقشته؟", "Have an engineering project to discuss?")}
              </h3>
              <p className="mb-0 text-white-50 fs-5">
                {t("فريقنا الهندسي جاهز لتقديم الاستشارة والتخطيط الأمثل لمشروعك.", "Our engineering team is ready to consult and plan your next landmark.")}
              </p>
            </div>
            <Link to="/contact" className="btn btn-dark btn-lg px-5 py-3 rounded-3 text-uppercase fw-bold flex-shrink-0" style={{ backgroundColor: '#0f172a' }}>
              {t("تواصل معنا الآن", "Get In Touch Now")}
            </Link>
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default Home;
