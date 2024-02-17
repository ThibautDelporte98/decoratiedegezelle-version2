import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../scss/services/overview.scss";
import LoadMoreButton from "../buttons/load-more";
import image from "../../images/carouselImages/home/A1.webp";
import Header from "../page-title/header";

const Overview = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(5);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

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
          {items.slice(0, visibleItems).map((item, index) => (
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
          {visibleItems < items.length && (
            <LoadMoreButton text="meer diensten" color="white" bgColor="" bgborder="#caa35c" onClick={loadMore} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
