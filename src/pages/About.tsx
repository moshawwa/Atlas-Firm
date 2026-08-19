import SectionTitle from "../components/Sectiontitle";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { FiTarget, FiEye, FiAward, FiArrowUpRight, FiShield, FiSliders } from "react-icons/fi";

const About = () => {
  const { t } = useLanguage();

  const milestones = [
    {
      year: "2008",
      title: t("تأسيس شركة أطلس", "Atlas Founding"),
      desc: t("انطلاقة المكاتب الأولى في الاستشارات المعمارية والإنشائية.", "Establishment of primary consultancy offices in architectural & structural engineering.")
    },
    {
      year: "2013",
      title: t("التوسع في إدارة المشاريع", "Project Management Expansion"),
      desc: t("إضافة قسم متخصص لإدارة الإشراف التنفيذي والمشاريع الكبرى.", "Launch of dedicated site management & large project supervision department.")
    },
    {
      year: "2018",
      title: t("اعتماد تقنيات BIM", "BIM Transformation"),
      desc: t("التحول الرقمي الكامل في النمذجة المعمارية ثلاثية الأبعاد.", "Full digital transition into 3D Building Information Modeling.")
    },
    {
      year: "2024",
      title: t("الاستدامة والمباني الخضراء", "Green Building Leadership"),
      desc: t("الحصول على ريادة في استشارات المباني المستدامة وشهادات LEED.", "Achieving LEED leadership in eco-friendly building consultations.")
    }
  ];

  return (
    <div>
      {/* Header Banner */}
      <section className="banner-about position-relative overflow-hidden">
        <div className="hero-overlay-grid"></div>
        <div className="container px-4 px-lg-5 py-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <span className="section-badge mb-3">{t("عن الشركة", "ABOUT ATLAS FIRM")}</span>
              <h1 className="display-4 fw-extrabold text-white mb-3">
                {t("خبرة معمارية وإنشائية تمتلك الرؤية والإتقان", "Architectural Mastery with Vision & Precision")}
              </h1>
              <p className="fs-5 text-slate-300 mb-0" style={{ lineHeight: "1.8" }}>
                {t(
                  "تعد شركة أطلس للاستشارات الهندسية إحدى الشركات الرائدة في تقديم الحلول التخطيطية والمعمارية والإنشائية المبتكرة وفق أعلى المقاييس العالمية.",
                  "Atlas Engineering Firm is a premier consultancy delivering innovative architectural, structural, and master planning solutions."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Overview Section */}
      <section className="section-padding bg-white">
        <div className="container px-4 px-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="section-badge mb-2">{t("قصتنا وهويتنا", "Our Story & Identity")}</span>
              <h2 className="display-6 fw-bold mb-4 text-slate-900">
                {t("نجمع بين الأصالة المعمارية والتكنولوجيا الإنشائية الحديثة", "Blending Architectural Heritage with Cutting-edge Engineering")}
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {t(
                  "تأسست شركة أطلس لتكون صرحاً هندسياً متميزاً يضع بين يدي العملاء والجهات الاستثمارية الخبرة الواسعة في مجالات التصميم المعماري والهندسة الإنشائية، بالإضافة إلى إدارة وتنفيذ المشاريع بكفاءة واحترافية عالية.",
                  "Founded as an engineering lighthouse, Atlas offers vast experience in architectural design, structural engineering, and project management."
                )}
              </p>
              <p className="text-muted leading-relaxed mb-4">
                {t(
                  "نؤمن بأن كل بناية نقوم بتصميمها هي قطعة فنية فريدة تتطلب حلولاً مخصصة تجمع بين الجماليات المعمارية والسلامة الإنشائية ومراعاة الكفاءة الاقتصاية والبيئية.",
                  "We believe every building we engineer is a unique architectural statement requiring custom solutions balancing aesthetics, structural integrity, and eco-efficiency."
                )}
              </p>

              <div className="row g-3 pt-2">
                <div className="col-6">
                  <div className="p-3 bg-light rounded border">
                    <h3 className="fw-bold text-primary mb-1">+150</h3>
                    <span className="small text-muted">{t("مشروع مكتمل بنجاح", "Successful Projects")}</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-light rounded border">
                    <h3 className="fw-bold text-gold mb-1">100%</h3>
                    <span className="small text-muted">{t("التزام بالمواصفات والمعايير", "Standard Compliance")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 p-lg-5 bg-slate-900 text-white rounded-4 shadow-lg">
                <h4 className="fw-bold text-gold mb-4">{t("قيمنا الجوهرية", "Core Values")}</h4>
                
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="p-2 rounded bg-slate-800 text-gold flex-shrink-0">
                    <FiShield size={24} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-black">{t("النزاهة والأمانة الهندسية", "Engineering Integrity")}</h6>
                    <small className="text-black text-slate-400">{t("الالتزام بأعلى معايير الأمان والسلامة الإنشائية في كافة الدراسات والتصاميم.", "Strict adherence to safety codes and structural benchmarks.")}</small>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="p-2 rounded bg-slate-800 text-gold flex-shrink-0">
                    <FiSliders size={24} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-black">{t("الابتكار والحلول الذكية", "Smart Innovation")}</h6>
                    <small className="text-black text-slate-400">{t("تطبيق أحدث التقنيات المعمارية والنظم الذكية لترشيد الطاقة وتسهيل الصيانة.", "Applying smart building automation and passive energy controls.")}</small>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="p-2 rounded bg-slate-800 text-gold flex-shrink-0">
                    <FiAward size={24} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-black">{t("الجودة والتميز المستمر", "Uncompromising Quality")}</h6>
                    <small className="text-black text-slate-400">{t("تدقيق مستمر وضمان دقة المخططات والتنفيذ في الميدان لتجاوز تطلعات العملاء.", "Continuous auditing and precision blueprints exceeding client expectations.")}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-light-slate">
        <div className="container px-4 px-lg-5">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="atlas-card p-4 p-lg-5 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-3 bg-primary text-white rounded-3">
                    <FiEye size={28} />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-0 text-slate-900">{t("رؤيتنا", "Our Vision")}</h4>
                    <span className="small text-muted">Building a Resilient Future</span>
                  </div>
                </div>
                <p className="text-muted leading-relaxed mb-0">
                  {t(
                    "أن نكون بيت الاستشارات الهندسي الأول والرائد في تقديم تصاميم معمارية وحلول إنشائية مستدامة تُحدث فارقاً إيجابياً في البيئة العمرانية وتدعم نمو المجتمعات الاقتصادية والاجتماعية.",
                    "To be the premier engineering consultancy recognized for shaping sustainable urban landscapes and driving economic growth."
                  )}
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="atlas-card p-4 p-lg-5 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-3 bg-gold text-white rounded-3">
                    <FiTarget size={28} />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-0 text-slate-900">{t("رسالتنا", "Our Mission")}</h4>
                    <span className="small text-muted">Engineering Excellence</span>
                  </div>
                </div>
                <p className="text-muted leading-relaxed mb-0">
                  {t(
                    "تمكين عملائنا من تحويل أفكارهم ورؤاهم إلى مشاريع حقيقية وراسخة من خلال تقديم خدمات هندسية واستشارية متكاملة تتسم بالدقة العالية، الالتزام بالمواعيد، وبأعلى معايير الكفاءة والاستدامة.",
                    "Empowering our clients to transform ambitious concepts into enduring physical realities through engineering precision and punctuality."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="section-padding bg-white">
        <div className="container px-4 px-lg-5">
          <SectionTitle
            badge={t("محطات نجاحنا", "OUR MILESTONES")}
            title={t("رحلة من الإنجاز والنمو المستمر", "A Journey of Continuous Growth")}
            subtitle={t(
              "نستعرض أبرز محطات النجاح التي شكلت مسيرة شركة أطلس على مدار الأعوام الماضية.",
              "Highlighting key milestones that shaped Atlas Engineering Firm over the years."
            )}
          />

          <div className="row g-4 justify-content-center">
            {milestones.map((m, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="p-4 bg-light rounded-3 border h-100 position-relative">
                  <span className="badge bg-gold text-white fs-6 px-3 py-2 mb-3 d-inline-block">
                    {m.year}
                  </span>
                  <h5 className="fw-bold mb-2 text-slate-900">{m.title}</h5>
                  <p className="text-muted small mb-0">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark-slate text-center">
        <div className="container px-4 px-lg-5">
          <h3 className="fw-bold text-white mb-3">
            {t("تعرف على الكفاءات الهندسية وراء نجاحنا", "Meet the Engineering Minds Behind Our Success")}
          </h3>
          <p className="text-slate-400 mb-4">
            {t("ضم فريقنا نخبة من أفضل المهندسين المعماريين والإنشائيين في المنطقة.", "Our firm unites top architectural and structural leaders in the region.")}
          </p>
          <Link to="/team" className="btn-atlas-accent">
            {t("استعرض فريق العمل", "Explore Team Profiles")}
            <FiArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
