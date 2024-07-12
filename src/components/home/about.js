import React, { useEffect } from "react";
import Button from "../buttons/button";
import { Link } from "react-router-dom";
import Person from "../../images/home/cta-about/call-to-action-about-home.webp";
import "../../scss/home/about.scss";

function About() {
  useEffect(() => {
    scrollToSection();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="About">
      <div className="container">
        <section className="about">
          <div className="row">
            <article className="about-item">
              <h2>Maak kennis met Decoratie Degezelle</h2>
              <p>
                Elke penseelstreek vertelt een verhaal, en jouw huis of
                bedrijfsruimte is het canvas waarop dit verhaal tot leven komt.
                Laat ons jou begeleiden door de kunst van schilderen, waar
                passie, vakmanschap en creativiteit samenkomen.
              </p>
              <Button
                to={"/overons"}
                color={"white"}
                layout={"default"}
                onClick={() => {}}
              >
                Over ons
              </Button>
              <div className="about-table">
                <h3 className="about-table-title">Ook op deze pagina:</h3>
                <ul className="table-of-content">
                  <li className="content-item">
                    <Link onClick={() => scrollToSection("service-overview")}>
                      Dienst overzicht
                    </Link>
                  </li>
                  <li className="content-item">
                    <Link onClick={() => scrollToSection("principals")}>
                      Principes
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
            </article>
            <div className="about-item">
              <img
                src={Person}
                alt="Decoratie Degezelle schilder bedrijf"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
