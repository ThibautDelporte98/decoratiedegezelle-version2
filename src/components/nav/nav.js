import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/logo/logoLight.webp";
import facebook from "../../images/icons/facebook.png";
import instagram from "../../images/icons/instagram.png";
import phone from "../../images/icons/phone.png";
import email from "../../images/icons/email.png";
import "../../scss/nav.scss";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  useEffect(() => {
    // Update body style when isMenuOpen changes
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    // Clean up the effect by restoring the original body style
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Active State
  const [isActiveHome, setIsActiveHome] = useState(false);
  const [isActiveDiensten, setIsActiveDiensten] = useState(false);
  const [isActiveReferenties, setIsActiveReferenties] = useState(false);
  const [isActiveOverons, setIsActiveOverons] = useState(false);
  const [isActiveContact, setIsActiveContact] = useState(false);
  const location = useLocation();

  const isHomepage = location.pathname === "/";


  useEffect(() => {
    // Extract the pathname from the location object
    const { pathname } = location;
    // Update the active state based on the current pathname
    if (pathname === "/") {
      setIsActiveHome(true);
    } else if (pathname === "/diensten") {
      setIsActiveDiensten(true);
    } else if (pathname === "/realisaties") {
      setIsActiveReferenties(true);
    } else if (pathname === "/overons") {
      setIsActiveOverons(true);
    } else if (pathname === "/contact") {
      setIsActiveContact(true);
    } else {
      setIsActiveHome(false);
      setIsActiveDiensten(false);
      setIsActiveReferenties(false);
      setIsActiveOverons(false);
      setIsActiveContact(false);
    }
  }, [location]);

  const handleNavLinkClick = () => {
    window.scrollTo(
      0,
      0 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  const instagramUsername = "decoratie_degezelle";

  const openInstagramApp = () => {
    window.open(`instagram://user?username=${instagramUsername}`, "_self");
  };


  return (
    <div className="nav position">
      <div className="container">
        <div className="navbarTop">
          <div className="navTop-items">
            <div className="navTop-item">
              <Link
                className="contactLinks"
                to="tel:+32478366070"
                aria-label="+32478366070"
                style={{
                  color: "white",
                }}
              >
                <div className="Item d-flex">
                  <div className="itemIcon ">
                    <img src={phone} alt={phone} />
                  </div>
                  <div className="ItemName">
                    <div className="mobile-hide">+32 478 36 60 70</div>
                  </div>
                </div>
              </Link>
              <Link
                className="contactLinks"
                to="mailto:info@decoratiedegezelle.be"
                aria-label="info@decoratiedegezelle.be"
                style={{
                  color: "white",
                }}
              >
                <div className="Item d-flex">
                  <div className="itemIcon">
                    <img src={email} alt={email} />
                  </div>
                  <div className="ItemName">
                    <div className="mobile-hide">info@decoratiedegezelle.be</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="navTop-item d-flex">
              <Link
                className="socialLink"
                to="https://www.instagram.com/decoratie_degezelle/"
                onClick={openInstagramApp}
                aria-label="Bekijk meer over Decoratie Degezelle op Facebook!"
                style={{
                  fill: isHomepage ? "white" : "black",
                }}
              >
                <div className="Icon">
                  <img src={instagram} alt={instagram} />
                </div>
              </Link>
              <Link
                className="socialLink"
                to="https://www.facebook.com/profile.php?id=100090360757782"
                aria-label="Bekijk meer over Decoratie Degezelle op Instagram!"
                target="_blank"
                style={{
                  fill: isHomepage ? "white" : "black",
                }}
              >
                <div className="Icon">
                  <img src={facebook} alt={facebook} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar">
          <Link to="/">
            <div className="logo">
              <img src={Logo} alt="/" width="75" height="auto" />
            </div>
          </Link>
          <div className="ham">
            <div className={`menu-toggle ${isMenuOpen ? "toggled" : ""}`}>
              <div
                className={isMenuOpen ? "box toggled" : "box"}
                onClick={toggleMenu}
              >
                <div className="ham-top">
                  <span
                    className={isMenuOpen ? "barTop width" : "barTop"}
                  ></span>
                </div>
                <div className="ham-mid">
                  <span
                    className={isMenuOpen ? "barMid color" : "barMid"}
                  ></span>
                </div>
                <div className="ham-bot">
                  <span
                    className={isMenuOpen ? "barBot width" : "barBot"}
                  ></span>                
                </div>

              </div>
            </div>            
          </div>

        </div>
        <div
          className="nav-overlay "
          style={{
            top: isMenuOpen ? "0" : "100%",
            transitionDelay: isMenuOpen ? "0s" : "0s",
          }}
        >
          <div className="container">
            <nav className="nav-elements">
              <div className="close-togle">
                <button onClick={toggleMenu}>
                  <div
                    className={`close-bar ${
                      isMenuOpen ? "close-bar-visible" : ""
                    }`}
                  ></div>
                </button>
              </div>
              <ul className="nav-list">
                <li className="nav-item" onClick={handleNavLinkClick}>
                  <NavLink
                    to="/"
                    className="nav-path"
                    onClick={toggleMenu}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#CAA35C" : "",
                      };
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item" onClick={handleNavLinkClick}>
                  <NavLink
                    to="/diensten"
                    className="nav-path"
                    onClick={toggleMenu}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#CAA35C" : "",
                      };
                    }}
                  >
                    Diensten
                  </NavLink>
                </li>
                <li className="nav-item" onClick={handleNavLinkClick}>
                  <NavLink
                    to="/realisaties"
                    className="nav-path"
                    onClick={toggleMenu}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#CAA35C" : "",
                      };
                    }}
                  >
                    Referentie
                  </NavLink>
                </li>
                <li className="nav-item" onClick={handleNavLinkClick}>
                  <NavLink
                    to="/overons"
                    className="nav-path"
                    onClick={toggleMenu}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#CAA35C" : "",
                      };
                    }}
                  >
                    Over ons
                  </NavLink>
                </li>
                <li className="nav-item" onClick={handleNavLinkClick}>
                  <NavLink
                    to="/contact"
                    className="nav-path"
                    onClick={toggleMenu}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#CAA35C" : "",
                      };
                    }}
                  >
                      Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
