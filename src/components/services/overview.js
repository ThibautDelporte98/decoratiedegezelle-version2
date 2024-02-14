import React from "react";
import { Link } from "react-router-dom";
import "../../scss/services/overview.scss";
import image from "../../images/carouselImages/home/A1.webp";
import Header from "../page-title/header";

const Overview = ({ items }) => {
  const handleNavLinkClick = () => {
    window.scrollTo(
      0,
      0 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  return (
    <div className="overview">
      <div className="container-xl">
        <div className="row">
          {items.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <Link
                className="overview-link"
                to={`/dienst/${item.url}`}
                onClick={handleNavLinkClick}
                key={item.id}
              >
                <div className="overview-item">
                  <div className="overlay">
                    <h2>{item.title}</h2>
                  </div>
                  <img src={item.image} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
