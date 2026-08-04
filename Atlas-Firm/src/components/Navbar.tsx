import { Link, NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg company-navbar">
      <div className="container-fluid px-4 px-lg-5">

        <Link to="/" className="navbar-brand company-logo">
          ENGINEERING
          <span>COMPANY</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto gap-lg-4">

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/services" className="nav-link">
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/team" className="nav-link">
                Team
              </NavLink>
            </li>

          </ul>

          <Link to="/contact" className="contact-link">
            Contact
            <FiArrowUpRight />
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;