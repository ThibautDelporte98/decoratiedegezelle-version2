import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../scss/references/References.scss";
import "../../scss/references/filter.scss";
import LoadMoreButton from "../buttons/load-more";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Header from "../page-title/header";

const ReferencesItems = ({ items }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "Alle";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [animate, setAnimate] = useState(false);
  const [visibleItems, setVisibleItems] = useState(6);

  const options = [
    "Alle",
    "Interieur",
    "Exterieur",
    "Decoratieve technieken",
    "Plamuurwerken",
    "Behangwerken",
    "Raamdecoratie",
    "Vloer Egaliseren",
  ];

  const handleOptionSelect = (e) => {
    setSelectedCategory(e.target.value);
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavLinkClick = () => {
    // Reset the scroll position to the top of the page
    window.scrollTo(
      0,
      0 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const filteredItems = items.filter((item) =>
    selectedCategory === "Alle" ? true : item.category === selectedCategory
  );

  return (
    <div className="References">
      <div className="container">
        <div className="filter">
          <div className="filterTitle">Filter op:</div>
          <select
            className="select"
            value={selectedCategory}
            onChange={handleOptionSelect}
          >
            <option value="" disabled>
              -- Kies een optie --
            </option>
            {options.map((option, index) => (
              <option className="option" key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="container">
        <div className="c-references">
          {filteredItems.length === 0 ? (
            <div className="no-items-message">
              <h2>
                Er zijn nog geen realisaties beschikbaar voor deze categorie.
              </h2>
              <p>
                Door onze digitale opstart en niet de mogelijkheid te hebben om
                op elke werf beeld en video materiaal te verzamelen is het
                mogelijk dat hier nog geen realisaties te zien zijn.
              </p>
            </div>
          ) : (
            <>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 767: 2, 1200: 3 }}
              >
                <Masonry gutter=".75rem">
                  {filteredItems.slice(0, visibleItems).map((item, index) => (
                    <Link
                      className="c-references__link"
                      to={`/realisatie/${item.url}`}
                      onClick={handleNavLinkClick}
                      key={index}
                    >
                      <div
                        className={`c-references__item ${
                          animate ? "fade-in" : ""
                        }`}
                      >
                        <div className="c-references__image">
                          <div className="c-references__overflowImage">
                            <img
                              src={item.image}
                              style={{
                                height: `${item.height}rem`,
                                // Set a default height under 992px
                                maxHeight:
                                  window.innerWidth <= 992
                                    ? `${item.defaultHeight}rem`
                                    : "auto",
                              }}
                              alt="referentie 1"
                            />
                          </div>
                          <div className="c-references__overlay">
                            <div className="c-references__label">
                              <div className="c-references__subject">
                                {item.subject} | {item.city}
                              </div>
                            </div>
                            <div className="c-references__arrow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="35"
                                height="35"
                                fill="white"
                                className="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
              {visibleItems < filteredItems.length && (
                    <LoadMoreButton text="meer realisaties" color="black" bgColor="white" bgborder="black" onClick={loadMore} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferencesItems;
