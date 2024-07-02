import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./NavBar.scss";
import cross from "../../resources/images/icons/cross.svg";
import hamburger from "../../resources/images/icons/hamburger.svg";

const NavBar = ({ routes, logoRoute }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-links-container">
            <Link
              className="logo-link"
              activeClass="active"
              to={`/#${logoRoute.sectionId}`}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <img src={logoRoute.logoSrc} alt="logo" />
            </Link>
            <div className="nav-links">
              <div className="nav-desktop-links">
                {routes.map((route) => (
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to={`/#${route.sectionId}`}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mobile">
            <div className="mobile-menu" onClick={() => setShowNav(!showNav)}>
              {showNav ? (
                <img className="nav-x" src={cross} alt="cross" />
              ) : (
                <img
                  className="nav-hamburger"
                  src={hamburger}
                  alt="hamburger menu"
                />
              )}
            </div>
          </div>
        </div>

        <a 
          className="mlh-banner" 
          id="mlh-trust-badge" 
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white" 
          target="_blank">
            <img 
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" alt="Major League Hacking 2025 Hackathon Season"
            />
        </a>

        {showNav && (
          <div className="nav-mobile-links">
            {routes.map((route) => (
              <Link
                className="nav-link"
                activeClass="active"
                to={`/#${route.sectionId}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setShowNav(false)}
              >
                {route.label}
              </Link>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <a
                href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white"
                rel="noreferrer"
                target="_blank"
                style={{
                  textDecoration: "none",
                  fontWeight: "normal",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              ></a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
