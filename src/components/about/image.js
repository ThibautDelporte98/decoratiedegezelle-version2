import React from "react";
import PropTypes from "prop-types";
import "../../scss/image/image.scss";

function Image({ title, image, paddingTop, paddingRight, paddingBottom, paddingLeft, position , borderPosition}) {
  const style = {
    paddingTop: paddingTop ? `${paddingTop}%` : null,
    paddingRight: paddingRight ? `${paddingRight}%` : null,
    paddingBottom: paddingBottom ? `${paddingBottom}%` : null,
    paddingLeft: paddingLeft ? `${paddingLeft}%` : null,
  };


  return (
    <div className={`image ${borderPosition}`}>
      <div className="image-img" style={style}>
        <div className={`overlay ${position}`} style={style}>
          <h3>{title}</h3>
        </div>
        <img src={image} alt={image} />
      </div>
    </div>
  );
}

Image.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  paddingTop: PropTypes.string, // Adjust the prop type based on your needs
  paddingRight: PropTypes.string, // Adjust the prop type based on your needs
  paddingBottom: PropTypes.string, // Adjust the prop type based on your needs
  paddingLeft: PropTypes.string, // Adjust the prop type based on your needs
  position: PropTypes.string, // Add the prop type for position
  borderPosition: PropTypes.string,

};

export default Image;
