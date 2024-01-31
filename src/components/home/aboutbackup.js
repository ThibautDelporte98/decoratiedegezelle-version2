import React, { useRef, useEffect, useState } from "react";
import Button from "../buttons/button";
import { Link } from "react-router-dom";
import "../../scss/home/about.scss";
import "../../scss/button/buttons.scss";
import myImage from "../../images/carouselImages/home/A1.webp";
import myImage2 from "../../images/carouselImages/home/A1.webp";

function F_OverOns() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavLinkClick = () => {
    window.scrollTo(
      0,
      0 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  return (
    <div className="About bg-white">
      <div className="left-bg"></div>
      <div className="container">
        <div className="row">
          <div className="col-12  col-lg-8">
            <div className="about">
              <div className="about-content">
                <h1 className="about-title">
                  Alexando Degezelle Gespecialiseerd in <br />
                  <span className="color-accent">interieur & exterieur</span>
                </h1>
                <div className="about-cta">
                  <h2 className="about-subtitle">Over Decoratie Degezelle</h2>
                  <p>
                    Bij Decoratie Degezelle staan wij bekend om onze toewijding
                    aan perfectie in decoratietechnieken. Als gespecialiseerd
                    bedrijf in decoratieve schildersdiensten, richten we ons
                    volledig op het transformeren van uw ruimtes. Wij streven
                    ernaar een stijlvolle sfeer te creëren die nauw aansluit bij
                    uw persoonlijkheid. Ons team van ervaren vakmensen gelooft
                    sterk in de kracht van samenwerking. We luisteren aandachtig
                    naar uw wensen en ideeën en werken nauw met u samen om uw
                    unieke visie tot leven te brengen. Bij Decoratie Degezelle
                    zijn we trots op onze decoratieve schildersdiensten, waarbij
                    vakmanschap, creativiteit en kwaliteit centraal staan. Laat
                    ons uw ruimtes omtoveren tot adembenemende kunstwerken die
                    het karakter van uw persoonlijkheid weerspiegelen.
                  </p>
                  <Button
                    color={windowWidth > 992 ? "white" : "black"}
                    layout={"display-flex-end"}
                  >
                    Bekijk meer over ons
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 bg-white">
            <div className="cta">
              <div className="cta-top">
                <h2 className="cta-title">Advies nodig?</h2>
                <p>
                  Aarzel niet! wij helpen u graag verder met het kiezen van de
                  juiste keuze.
                </p>
                <Button
                  color={"black"}
                  bgborder={""}
                  layout={"display-flex-end"}
                >
                  Bekijk meer over ons
                </Button>
              </div>
              <div className="cta-bottom">
                <h2 className="cta-title">Op deze pagina</h2>
                <div className="list">
                  <ul className="table-of-content d-flex ">
                    <li className="content-item">
                      <Link onClick={() => scrollToSection("principals")}>
                        Principes
                      </Link>
                    </li>
                    <li className="content-item">
                      <Link onClick={() => scrollToSection("service-overview")}>
                        Dienst overzicht
                      </Link>
                    </li>
                    <li className="content-item">
                      <Link onClick={() => scrollToSection("recent-projects")}>
                        Enkele projecten
                      </Link>
                    </li>
                    <li className="content-item">
                      <Link onClick={() => scrollToSection("testimonials")}>
                        Klantbeoordelingen
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default F_OverOns;
