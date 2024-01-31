import React, { useRef, useEffect, useState } from "react";
import Button from "../buttons/button";
import { Link } from "react-router-dom";
import Person from "../../images/carouselImages/home/A1.webp";
import "../../scss/home/about.scss";

function About() {

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
    <div className="About">
      <div className="container">
        <div className="about">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="about-item">
                <h1>Maak kennis met Decoratie Degezelle</h1>
                <p>
                  Elke penseelstreek verteld een verhaal, en jouw huis of
                  bedrijfsruimte is het canvas waarop dit verhaal tot leven
                  komt. Laat ons jou begeleiden door de kunst van schilderen,
                  waar passie, vakmanschap en creativiteit samenkomen om een
                  unieke en inspirerende omgeving te creëren. Welkom bij
                  Decoratie Degezelle, waar we niet alleen je wereld binnen en
                  buiten verven, maar jouw omgeving ook nieuw leven in blazen.
                </p>
                <Button
                  to={"./overons"}
                  color={"white"}
                  onClick={handleNavLinkClick}
                  layout={"display-flex-start"}
                >
                  Over ons
                </Button>

                <div className="about-table ">
                <h2 className="about-table-title">Ook op deze pagina:</h2>
                <div className="list">
                  <ul className="table-of-content">
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
            <div className="col-12 col-lg-6">
              <div className="about-item ">
                <img src={Person} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
