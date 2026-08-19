import SectionTitle from "../components/Sectiontitle";
import { servicesData } from "../data/services";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  FiCompass,
  FiHome,
  FiBox,
  FiLayers,
  FiMapPin,
  FiFeather,
  FiCheckCircle,
  FiArrowUpRight
} from "react-icons/fi";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "FaDraftingCompass":
      return <FiCompass size={32} className="text-gold" />;
    case "FaBuilding":
      return <FiHome size={32} className="text-gold" />;
    case "FaCouch":
      return <FiBox size={32} className="text-gold" />;
    case "FaTasks":
      return <FiLayers size={32} className="text-gold" />;
    case "FaMapMarkedAlt":
      return <FiMapPin size={32} className="text-gold" />;
    case "FaLeaf":
      return <FiFeather size={32} className="text-gold" />;
    default:
      return <FiCompass size={32} className="text-gold" />;
  }
};

const Services = () => {
  const { t, isRtl } = useLanguage();

  const workflowSteps = [
    {
      step: "01",
      title: t("الاستشارة والدراسة الأولية", "Initial Consultation & Feasibility"),
      desc: t("فحص موقع المشروع، تحديد متطلبات العميل، وعمل دراسة الجدوى المعمارية والمالية.", "Site inspection, client requirements gathering, and initial architectural feasibility analysis.")
    },
    {
      step: "02",
      title: t("التصميم والتخطيط المعماري (BIM)", "3D BIM Architectural Design"),
      desc: t("إعداد المخططات ثلاثية الأبعاد والتصميم الداخلي مع نماذج محاكاة واقعية.", "Drafting 3D BIM models, spatial layouts, photorealistic 3D renders.")
    },
    {
      step: "03",
      title: t("الدراسات والحسابات الإنشائية", "Structural Engineering & Calculations"),
      desc: t("عمل الحسابات الإنشائية الدقيقة وتجهيز المخططات لاعتمادها من الجهات المختصة.", "Rigorous FEA stress analysis, structural blue-prints, municipal permit filing.")
    },
    {
      step: "04",
      title: t("الإشراف والمتابعة الميدانية", "On-site Supervision & Handover"),
      desc: t("متابعة تنفيذ المقاول في الموقع وضمان الالتزام الكامل بالجودة والجدول الزمني.", "On-site construction oversight ensuring strict code compliance and on-time delivery.")
    }
  ];

  return (
    <div>
      {/* Header Banner */}
      <section className="page-header-banner position-relative overflow-hidden">
        <div className="hero-overlay-grid"></div>
        <div className="container px-4 px-lg-5 py-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <span className="section-badge mb-3">{t("خدماتنا الهندسية", "OUR SERVICES")}</span>
              <h1 className="display-4 fw-extrabold text-white mb-3">
                {t("منظومة خدمات استشارية متكاملة لجميع أنواع المشاريع", "Integrated Engineering & Architectural Consultancy")}
              </h1>
              <p className="fs-5 text-slate-300 mb-0" style={{ lineHeight: "1.8" }}>
                {t(
                  "نقدم حلولاً هندسية مبتكرة ومصممة خصيصاً لتلبية احتياجات الأفراد والمؤسسات والجهات الاستثمارية.",
                  "We provide tailored engineering solutions for commercial developers, private residential owners, and public institutions."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="section-padding bg-white">
        <div className="container px-4 px-lg-5">
          <SectionTitle
            badge={t("مجالات التخصص", "ENGINEERING SPECIALTIES")}
            title={t("حلول هندسية تغطي كافة مراحل البناء والتطوير", "Solutions Covering Every Stage of Development")}
            subtitle={t(
              "اختر الخدمة المناسبة لمشروعك للاطلاع على الفوائد التفصيلية وخطوات العمل.",
              "Explore our core engineering verticals and key benefits below."
            )}
          />

          <div className="row g-4">
            {servicesData.map((service) => (
              <div key={service.id} className="col-lg-6">
                <div className="atlas-card p-4 p-lg-5 h-100">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="p-3 rounded-3 bg-slate-900 flex-shrink-0">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="badge bg-slate-100 text-primary fw-bold px-3 py-1 mb-1">
                        {service.category}
                      </span>
                      <h4 className="fw-bold mb-0 text-slate-900">{isRtl ? service.titleAr : service.title}</h4>
                      <small className="text-muted">{isRtl ? service.title : service.titleAr}</small>
                    </div>
                  </div>

                  <p className="text-muted leading-relaxed mb-4">{service.fullDescription}</p>

                  <h6 className="fw-bold mb-3 text-slate-900">{t("أبرز مزايا الخدمة:", "Key Service Benefits:")}</h6>
                  <div className="row g-2 mb-4">
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="col-sm-6">
                        <div className="d-flex align-items-start gap-2 small text-muted">
                          <FiCheckCircle className="text-success mt-1 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-top mt-auto d-flex align-items-center justify-content-between">
                    <span className="small text-muted fw-semibold">{t("مستعد للبدء؟", "Ready to start?")}</span>
                    <Link to="/contact" className="btn btn-sm btn-atlas-primary">
                      {t("طلب هذه الخدمة", "Request This Service")}
                      <FiArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Workflow */}
      <section className="section-padding bg-light-slate">
        <div className="container px-4 px-lg-5">
          <SectionTitle
            badge={t("منهجية العمل", "WORK PROCESS")}
            title={t("كيف نعمل على تحويل فكرتك إلى واقع ملموس؟", "How We Turn Your Vision Into Physical Reality")}
            subtitle={t(
              "نتبع خطوات منظمة ومنهجية هندسية واضحة تضمن دقة التنفيذ والتسليم في الموعد المحدد.",
              "Our structured 4-step engineering workflow ensures design precision and timely delivery."
            )}
          />

          <div className="row g-4">
            {workflowSteps.map((ws, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="p-4 bg-white rounded-3 shadow-sm border h-100 position-relative">
                  <div className="fs-1 fw-extrabold text-gold opacity-50 mb-2">{ws.step}</div>
                  <h5 className="fw-bold mb-2 text-slate-900">{ws.title}</h5>
                  <p className="text-muted small mb-0" style={{ lineHeight: "1.7" }}>
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark-slate text-center">
        <div className="container px-4 px-lg-5">
          <h3 className="fw-bold text-white mb-3">{t("هل تود الاستفسار عن تفاصيل تكلفة مشروعك؟", "Want to inquire about project cost estimation?")}</h3>
          <p className="text-slate-400 mb-4">{t("فريقنا يسعد باستقبال جميع استفساراتكم وتقديم تقدير دراسة أولية مجاناً.", "Our team is delighted to receive your inquiry and provide an initial feasibility assessment.")}</p>
          <Link to="/contact" className="btn-atlas-accent">
            {t("طلب تقديم عرض سعر", "Request a Quote")}
            <FiArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
