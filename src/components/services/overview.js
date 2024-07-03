import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../scss/services/overview.scss";
import LoadMoreButton from "../buttons/load-more";


const Overview = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const handleNavLinkClick = () => {
    window.scrollTo(
      0,
      0 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  // Sort items by priority
  const sortedItems = [...items].sort((a, b) => (a.priority === b.priority ? 0 : a.priority ? -1 : 1));

  return (
    <div className="overview">
      <div className="container-xl">
        <div className="row">
          {sortedItems.slice(0, visibleItems).map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <Link
                className="overview-link"
                to={`/diensten/${item.url}`}
                onClick={handleNavLinkClick}
                key={item.id}
              >
                <div className="overview-item">
                  <div className="overlay">
                    <h2>{item.title}</h2>
                  </div>
                  <img src={item.image} alt="schilder diensten op uw maat!"/>
                </div>
              </Link>
            </div>
          ))}
          {visibleItems < sortedItems.length && (
            <LoadMoreButton text="meer diensten" color="white" bgColor="" bgborder="#caa35c" onClick={loadMore} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;

