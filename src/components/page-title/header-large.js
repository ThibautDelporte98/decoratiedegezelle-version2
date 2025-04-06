import React, { useState, useEffect } from "react";
import "../../scss/page-title/header-large.scss";
import PropTypes from "prop-types";
import Image1 from "../../images/carouselImages/home/header-home-1.webp";
import Image2 from "../../images/carouselImages/home/NEW1.jpg";
import Image3 from "../../images/carouselImages/home/NEW2.jpg";

const images = [Image1, Image2, Image3];

const HeaderLarge = ({ title, subtitle, text, color, showCarousel }) => {
  const [current, setCurrent] = useState(0);
  const titleParts = title.split("&");
  const subtitleParts = subtitle.split("&");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="component mt-8 mt-8-9">
      <div className="view">
        <div className="view-overlay">
          <div className="header1 " style={{ backgroundColor: color }}>
            <div className="container">
              <div className="col-12">
                <div className="header1-object">
                  <div className="header1-title">
                    <span className="header1-subtitle">
                      {/* Map through the subtitle parts and add style to the "&" */}
                      {subtitleParts.map((part, index) => (
                        <span key={index}>
                          {part}
                          {index < subtitleParts.length - 1 && (
                            <span className="colored-ampersand">&amp;</span>
                          )}
                        </span>
                      ))}
                    </span>
                    <h1>
                      {titleParts.map((part, index) => (
                        <span key={index}>
                          {part}
                          {index < titleParts.length - 1 && (
                            <span className="colored-ampersand">&amp;</span>
                          )}
                        </span>
                      ))}
                    </h1>
                  </div>
                  <p>{text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showCarousel && (
          <>
            {images.map((url, index) => (
              <div
                className={`carousel ${index === current ? "active" : ""}`}
                key={index}
              >
                <img src={url} alt={`${index + 1}`} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

HeaderLarge.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  showCarousel: PropTypes.bool,
};

export default HeaderLarge;
