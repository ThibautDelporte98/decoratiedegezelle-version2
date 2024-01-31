import React from "react";
import PropTypes from "prop-types";
import "../../scss/text-block/text.scss";

function Text({ text, layout}) {
  return (
    <div className="text">
      <div className="container">
        <div className={`text-content ${getLayoutClass(layout)}`}>
          <h2>Introductie</h2>
          <p>
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


};

export default Text;
