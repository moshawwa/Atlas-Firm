import SectionTitle from "../components/Sectiontitle";
import { teamData } from "../data/team";
import { useLanguage } from "../context/LanguageContext";
import { FiMail, FiLinkedin, FiAward } from "react-icons/fi";

const Team = () => {
  const { t, isRtl } = useLanguage();
  const filteredTeam = teamData;

  return (
    <div>
      {/* Header Banner */}
      <section className="page-header-banner position-relative overflow-hidden">
        <div className="hero-overlay-grid"></div>
        <div className="container px-4 px-lg-5 py-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <span className="section-badge mb-3">{t("فريق العمل", "OUR COMPANY TEAM")}</span>
              <h1 className="display-4 fw-extrabold text-white mb-3">
                {t("فريق شركة أطلس للاستشارات الهندسية", "Atlas Engineering Firm Team")}
              </h1>
              <p className="fs-5 text-slate-300 mb-0" style={{ lineHeight: "1.8" }}>
                {t(
                  "نخبة من المهندسين والاستشاريين المعماريين، الإنشائيين، الكهربائيين، الميكانيكيين، وإداريي النظم والمالية.",
                  "A multidisciplinary team of experienced architectural, civil, electrical, mechanical engineers, accountants, and IT specialists."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="section-padding bg-white">
        <div className="container px-4 px-lg-5">
          <SectionTitle
            badge={t("الهيكل التنفيذي", "EXECUTIVE & ENGINEERING TEAM")}
            title={t("تعرف على أعضاء فريق شركة أطلس", "Meet Our Professional Team Members")}
            subtitle={t(
              "فريق متكامل يضم 11 خبيراً ومهندساً يغطون كافة التخصصات الهندسية والإدارية.",
              "A 11-member team uniting design, structural, electrical, mechanical, financial, and IT engineering expertise."
            )}
          />

          <div className="row g-4">
            {filteredTeam.map((member) => (
              <div key={member.id} className="col-lg-4 col-md-6">
                <div className="atlas-card">
                  <div className="team-card-img-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="atlas-card-img"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="team-social-overlay">
                      <a href={`mailto:${member.email}`} className="team-social-icon" title="Email">
                        <FiMail size={18} />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noreferrer" className="team-social-icon" title="LinkedIn">
                        <FiLinkedin size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="atlas-card-body">
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                      <span className="badge bg-primary text-white fw-bold">
                        {isRtl ? member.degreeAr : member.degree}
                      </span>
                      <span className="badge bg-slate-100 text-slate-700 fw-bold">
                        {t(`خبرة ${member.experienceYears} عاماً`, `${member.experienceYears}+ Yrs Exp.`)}
                      </span>
                    </div>

                    <h5 className="fw-bold mb-1 text-slate-900">{isRtl ? member.nameAr : member.name}</h5>
                    <h6 className="text-gold fw-semibold mb-3" style={{ fontSize: "14px" }}>
                      {isRtl ? member.roleAr : member.role}
                    </h6>

                    <p className="text-muted small mb-3 flex-grow-1" style={{ lineHeight: "1.6" }}>
                      {member.bio}
                    </p>

                    <div className="p-3 bg-slate-50 rounded-3 mb-3 border">
                      <small className="text-slate-600 fst-italic d-block">
                        "{member.featuredQuote}"
                      </small>
                    </div>

                    <div className="pt-3 border-top d-flex align-items-center justify-content-between text-muted small">
                      <span className="d-flex align-items-center gap-1">
                        <FiAward className="text-gold" />
                        <span>{t(`أشرف على ${member.projectsLed}+ مشروعاً`, `Led ${member.projectsLed}+ Projects`)}</span>
                      </span>
                      <a href={`mailto:${member.email}`} className="text-primary fw-bold">
                        {t("تواصل مباشر", "Contact Email")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Banner */}
      <section className="py-5 bg-light-slate text-center border-top">
        <div className="container px-4 px-lg-5">
          <h4 className="fw-bold text-slate-900 mb-2">{t("هل ترغب في الانضمام إلى فريق شركة أطلس؟", "Would you like to join the Atlas Engineering team?")}</h4>
          <p className="text-muted mb-4">{t("نرحب دائماً بالكفاءات والمهندسين المتميزين والخبراء الإنشائيين.", "We always welcome talented architects, structural engineers, and site managers.")}</p>
          <a href="mailto:atlas.engineers20@gmail.com" className="btn-atlas-primary">
            {t("أرسل سيرتك الذاتية (Careers)", "Send Your CV / Resume")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
