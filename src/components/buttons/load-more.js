import React from "react";
import PropTypes from "prop-types";
import "../../scss/button/buttons.scss";

function loadMore({ text, color, bgColor, bgborder, onClick }) {

  const buttonStyle = {
    color: color,
    backgroundColor: bgColor,
    "--c": bgborder,
  };


  return (
    <div className="more-button">
      <button className="load-more"  onClick={onClick}>
        <div className="load-more-txt" style={buttonStyle} >
            {text}
        </div>
      </button>
    </div>
  );
}

loadMore.propTypes = {
  text: PropTypes.string,  
  color: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

loadMore.defaultProps = {
  layout: "default",
  color: "white",
};

export default loadMore;
