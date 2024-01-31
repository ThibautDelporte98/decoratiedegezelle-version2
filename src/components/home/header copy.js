import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../scss/home/header.scss";
import "../../scss/carousel/carousel.scss";
import smoke from "../../images/backgrounds/smoke/cloud1.1.png";
import HeaderLarge from "../page-title/header-large.js";

const Header = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="component mt-8 mt-8-9">
      <div className="view">
        <div className="view-overlay">
          {/* <div className="bg-smoke">
          {[1, 2, 3, 4, 5, 10, 9, 8, 7, 6].map((i) => (
              <img key={i} src={smoke} style={{ '--i': i }} />
            ))}
           </div> */}
          {/* <div className="container-xl">
            <div className="overlay-content mt-5">
              <div className="row">
                <div className="col-sm-12 col-lg-12">
                  <div className="overlay-item">
                    <h1 className="head-title mc text-center" >
                      <div className="title-white">
                        SCHILDER & DECORATIEWERKEN
                        <br />
                      </div>
                      <div className="title-gold">
                        VERF JE WERELD BINNEN & BUITEN!
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <HeaderLarge
            color="transparent"
            title="schilder & decoratiewerken"
            subtitle="Verf je wereld binnen & buiten"
            text="Stap binnen en ervaar de kunst van schilderen bij Decoratie Degezelle. Wij transformeren niet alleen muren, maar creëren een levendige sfeer die jouw stijl weerspiegelt. Ontdek onze expertise, laat je inspireren en geef kleur aan jouw wereld. "
          />
        </div>
        {images.map((url, index) => (
          <div
            className={`carousel ${index === current ? "active" : ""}`}
            key={index}
          >
            <img src={url} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
