import React from "react";
import PropTypes from "prop-types";
import "../../scss/about/caption.scss";

function Caption({ text, layout, image}) {
  return (
    <div className="caption">
      <div className="container">
        <div className={`caption-content ${getLayoutClass(layout)}`}>
          <div className="caption-bg">
            <img src={image} alt="schilder ervaringen en certificaten DecoratieDegezelle"/>
           </div>
          <p className={`text-align-start`} >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function getLayoutClass(layout) {
  switch (layout) {
    case "start":
      return "display-flex-start";
    case "center":
      return "display-flex-center";
    default:
      return "display-flex-end";
  }
}

Caption.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(["default", "start", "center"]),


};

export default Caption;
