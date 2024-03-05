import React from "react";
import PropTypes from "prop-types";
import "../../scss/title/title.scss";


function Title({title, children, color, bg}) {
  return (
    <div className="container">
        <div className="title" style={{color: color , background: bg}} >
          <h2><span className="underline-up" >{title}</span></h2>
          <div className="bg-title">{children}</div>
        </div>
    </div>

  );
}


Title.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};


export default Title;
