import { Link } from "react-router-dom";
import { FiMail, FiMapPin, FiArrowUpRight, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="company-footer">
      <div className="container px-4 px-lg-5">
        <div className="row g-4 mb-5">
          {/* Company Bio */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-3 mb-3">
              <img
                src="/images/ATLAS  logo w arabic.png"
                alt="Atlas Engineering Logo"
                style={{ height: "48px", objectFit: "contain" }}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <h4 className="text-white fw-bold m-0" style={{ fontFamily: 'Outfit, sans-serif' }}>ATLAS</h4>
                <small className="text-gold text-uppercase tracking-widest fw-semibold" style={{ fontSize: '10px' }}>
                  {t("شركة أطلس للاستشارات الهندسية", "Atlas Engineering Firm")}
                </small>
              </div>
            </div>
            <p className="text-slate-400 small mb-4" style={{ lineHeight: '1.8' }}>
              {t(
                "شركة أطلس للاستشارات الهندسية تقدم حلولاً معمارية وإنشائية متكاملة تعتمد على أعلى معايير الجودة والابتكار لبناء أسرع ومستقبل أفضل.",
                "Atlas Engineering Firm provides comprehensive architectural and structural solutions based on top global standards of innovation and quality."
              )}
            </p>
            <div className="d-flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="team-social-icon" aria-label="LinkedIn">
                <FiLinkedin size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="team-social-icon" aria-label="Instagram">
                <FiInstagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="team-social-icon" aria-label="Twitter">
                <FiTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading">{t("روابط سريعة", "Quick Links")}</h5>
            <Link to="/" className="footer-link">{t("الرئيسية", "Home")}</Link>
            <Link to="/about" className="footer-link">{t("من نحن", "About Us")}</Link>
            <Link to="/services" className="footer-link">{t("خدماتنا", "Services")}</Link>
            <Link to="/projects" className="footer-link">{t("المشاريع", "Projects")}</Link>
            <Link to="/team" className="footer-link">{t("فريق العمل", "Team")}</Link>
            <Link to="/contact" className="footer-link">{t("تواصل معنا", "Contact Us")}</Link>
          </div>

          {/* Core Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">{t("تخصصاتنا", "Specialties")}</h5>
            <div className="text-slate-400 small d-flex flex-column gap-2">
              <div>• {t("التصميم والتخطيط المعماري", "Architectural Design & Planning")}</div>
              <div>• {t("الهندسة والتحليل الإنشائي", "Structural Engineering & Analysis")}</div>
              <div>• {t("التصميم الداخلي والديكور", "Interior Architecture & Fit-out")}</div>
              <div>• {t("إدارة المشاريع والإشراف الهندسي", "Project Management & Supervision")}</div>
              <div>• {t("المباني المستدامة والطاقة", "Sustainable Green Building")}</div>
              <div>• {t("التخطيط العمراني وتطوير الأراضي", "Urban Master Planning")}</div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">{t("فروعنا ومكاتبنا", "Our Offices")}</h5>
            <div className="d-flex flex-column gap-3 text-slate-400 small">
              <div className="d-flex align-items-start gap-2">
                <FiMapPin className="text-gold mt-1 flex-shrink-0" size={16} />
                <div>
                  <strong className="text-white d-block">{t("فلسطين (Palestine):", "Palestine:")}</strong>
                  <span>{t("شارع الأمم المتحدة 2/2013، حي الرمال، مدينة غزة", "2/2013 United Nation Street, Rimal, Gaza City")}</span>
                </div>
              </div>
              <div className="d-flex align-items-start gap-2">
                <FiMapPin className="text-gold mt-1 flex-shrink-0" size={16} />
                <div>
                  <strong className="text-white d-block">{t("مصر (Egypt):", "Egypt:")}</strong>
                  <span>{t("مبنى  111/49، مدينتي B11 ، القاهرة الجديدة", " Building 111/49, Madinaty B11, New Cairo")}</span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FiMail className="text-gold flex-shrink-0" size={16} />
                <a href="mailto:atlas.engineers20@gmail.com" className="text-slate-300">atlas.engineers20@gmail.com</a>
              </div>
              <div className="mt-2">
                <Link to="/contact" className="btn-atlas-accent w-100 justify-content-center text-white text-uppercase" style={{ fontSize: '12px' }}>
                  {t("طلب استشارة هندسية", "Request Consultation")}
                  <FiArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: '#1e293b' }} />

        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between text-slate-500 small pt-3">
          <div>
            © {new Date().getFullYear()} Atlas Engineering Firm. {t("جميع الحقوق محفوظة - فلسطين ومصر.", "All Rights Reserved - Palestine & Egypt.")}
          </div>
          <div className="d-flex gap-4 mt-2 mt-md-0">
            <span>{t("سياسة الخصوصية", "Privacy Policy")}</span>
            <span>{t("الشروط والأحكام", "Terms & Conditions")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
