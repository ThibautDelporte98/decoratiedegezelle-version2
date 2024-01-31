import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../scss/page-title/header.scss";
// import image from "../../images/carouselImages/home/A1.webp";

function Header({title , text, image , showImage}) {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="header-object">
              <h1>
                <div className="header-title">{title}</div>
              </h1>
              <p>
                {text}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            {showImage && (
              <div className="header-image">
                <img src={image}  alt={image} />
              </div>
              )     
            }
          </div>          
        </div>
      </div>
    </div>
  );
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  showImage: PropTypes.bool, 

};

export default Header;








