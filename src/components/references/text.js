import React from "react";
import PropTypes from "prop-types";
import "../../scss/text-block/text.scss";

function Text({ text, layout, bgColor, colorText }) {
  return (
    <div className="text" style={{backgroundColor: bgColor}}>
      <div className="container">
        <div className={`text-content ${getLayoutClass(layout)}`} style={{color: colorText}}>
          <p >
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
      return "display-flex-end";
    default:
      return "display-flex-center";
  }
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(["default", "start", "end"]),
  colorText: PropTypes.string,
  bgColor: PropTypes.string, 
};

export default Text;
