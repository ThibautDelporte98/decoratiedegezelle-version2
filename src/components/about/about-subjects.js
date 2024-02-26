import React from "react";
import PropTypes from "prop-types";
import "../../scss/services/overview-detail-subjects.scss";




function AboutSubject({ title,  text, image}) {
  return (
    <div className="subjects">
      <div className="container">
        <div className="subjects-object" >
          <div className="row">
            <div className="col-12 col-lg-5 order-lg-1">
              <div className="subjects-object-image">
                <img src={image} alt="test afbeelding" />
              </div>
            </div>
            <div className="col-12 col-lg-7 order-lg-2">
              <div className="subjects-object-content">
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

AboutSubject.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,

};



export default AboutSubject;
