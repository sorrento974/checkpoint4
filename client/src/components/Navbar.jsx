import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggleMenu = () => {
    setShowNav(!showNav);
  };

  const handleLinkClick = () => {
    setShowNav(false);
  };

  return (
    <nav
      className={`navbar dark-mode ${showNav ? "show-nav" : ""}`}
      role="navigation"
    >
      <Link to="/">
        <img
          className="logo"
          src="./src/assets/images/logo.jpg"
          alt="logo-remember"
        />
      </Link>
      <ul className="navbar__links">
        <li className="navbar__link first">
          <NavLink to="/" className="link" onClick={handleLinkClick}>
            Accueil
          </NavLink>
        </li>
        <li className="navbar__link second">
          <NavLink to="/contact" className="link" onClick={handleLinkClick}>
            Contact
          </NavLink>
        </li>
        <li className="navbar__link third">
          <NavLink to="/inscription" className="link" onClick={handleLinkClick}>
            Inscription
          </NavLink>
        </li>
        <li className="navbar__link four">
          <NavLink to="/admin" className="link" onClick={handleLinkClick}>
            Administration
          </NavLink>
        </li>
      </ul>
      <button
        aria-label="menu-burger"
        type="button"
        className="burger"
        onClick={toggleMenu}
      >
        <span className="bar" />
      </button>
    </nav>
  );
}

export default Navbar;
