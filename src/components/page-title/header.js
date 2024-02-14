import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../scss/page-title/header.scss";
// import image from "../../images/carouselImages/home/A1.webp";

function Header({ title, text, height, image, showImage }) {
  const dividerStyle = {
    color: "orange",
    margin: "0 5px", // Adjust the margin as needed
  };

  return (
    <div className="header" style={{height:`${height}rem`}}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="header-object">
              <h1>
                <div className="header-title">
                  {title.split("|").map((part, index) => (
                    <span key={index}>
                      {index > 0 && <span style={dividerStyle}>|</span>}
                      {part}
                    </span>
                  ))}{" "}
                </div>
              </h1>
              <p>{text}</p>
            </div>
          </div>
          <div className="col-lg-6">
            {showImage && (
              <div className="header-image">
                <img src={image} alt={image} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  height: PropTypes.string,
  heightState: PropTypes.bool,
  image: PropTypes.string,
  showImage: PropTypes.bool,
};

export default Header;
