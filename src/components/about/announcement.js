
import React from "react";
import PropTypes from "prop-types";
import "../../scss/image/announcement.scss";

function Announcement({ title,  layout}) {



  return (
    <div className="announcement">
      <div className="container">
        <div className={`announcement-object ${getLayoutClass(layout)}`}>
              <div className="border-left">
                <h3>{title}</h3>
              </div>
        </div>      
      </div>      
    </div>


  );
}

function getLayoutClass(layout) {
  switch (layout) {
    case "end":
      return "display-flex-end";
    case "center":
      return "display-flex-center";
    default:
      return "display-flex-start";
  }
}

Announcement.propTypes = {
  title: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,

};

export default Announcement;

