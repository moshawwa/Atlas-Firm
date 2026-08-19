import { Link, NavLink } from "react-router-dom";
import { FiArrowUpRight, FiMenu, FiGlobe } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="navbar navbar-expand-lg company-navbar">
      <div className="container-fluid px-3 px-lg-5">
        <Link to="/" className="company-logo-group">
          <img
            src="/images/ATLAS  logo w arabic.png"
            alt="Atlas Engineering Firm Logo"
            className="company-logo-image"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="company-logo-text">
            <span className="company-logo-title">ATLAS</span>
            <span className="company-tagline">
              {t("أطلس للاستشارات الهندسية", "Engineering Firm")}
            </span>
          </div>
        </Link>

        <div className="d-flex align-items-center gap-2 d-lg-none">
          {/* Mobile Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            className="btn btn-sm btn-outline-dark d-flex align-items-center gap-1 rounded-pill px-3 py-1 fw-bold"
            aria-label="Toggle language"
          >
            <FiGlobe size={14} />
            <span>{language === "ar" ? "English" : "العربية"}</span>
          </button>

          <button
            className="navbar-toggler border-0 shadow-none p-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FiMenu size={26} color="#0f172a" />
          </button>
        </div>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto gap-lg-3">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => `nav-link nav-link-item ${isActive ? 'active' : ''}`}>
                {t("الرئيسية", "Home")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => `nav-link nav-link-item ${isActive ? 'active' : ''}`}>
                {t("من نحن", "About")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/services" className={({ isActive }) => `nav-link nav-link-item ${isActive ? 'active' : ''}`}>
                {t("خدماتنا", "Services")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/projects" className={({ isActive }) => `nav-link nav-link-item ${isActive ? 'active' : ''}`}>
                {t("مشاريعنا", "Projects")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/team" className={({ isActive }) => `nav-link nav-link-item ${isActive ? 'active' : ''}`}>
                {t("فريق العمل", "Team")}
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            {/* Desktop Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="btn btn-outline-dark d-none d-lg-flex align-items-center gap-2 rounded-pill px-3 py-2 fw-semibold fs-6 border-slate-300"
              style={{ fontSize: "13px" }}
              aria-label="Toggle language"
            >
              <FiGlobe size={16} className="text-gold" />
              <span>{language === "ar" ? "English" : "العربية"}</span>
            </button>

            <Link to="/contact" className="contact-nav-btn">
              {t("تواصل معنا", "Contact Us")}
              <FiArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
