import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../../scss/page-title/header.scss";

function Header({ title, text, height, image, showImage, showGoBack }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const dividerStyle = {
    color: "orange",
    margin: "0 5px", // Adjust the margin as needed
  };

  return (
    <div className="header" style={{ height: `${height}rem` }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="header-object">
              {showGoBack && (
                <div className="header-return" onClick={goBack}>
                  Terug naar overzicht
                </div>
              )}
              <div className="header-title">
                <h1>
                  {title.split("|").map((part, index) => (
                    <span key={index}>
                      {index > 0 && <span style={dividerStyle}>|</span>}
                      {part}
                    </span>
                  ))}{" "}
                </h1>
              </div>
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
  showGoBack: PropTypes.bool,
};

export default Header;
