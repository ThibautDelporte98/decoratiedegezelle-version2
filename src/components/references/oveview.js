import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../scss/references/References.scss";
import "../../scss/references/filter.scss";
import LoadMoreButton from "../buttons/load-more";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ReferencesItems = ({ items }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "Alle items";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const  [animate ] = useState(false);
  const [visibleItems, setVisibleItems] = useState(6);
  const navigate = useNavigate();

  const options = [
    "Alle items",
    "interieur",
    "exterieur",
    "decoratieve technieken",
    "plamuurwerken",
    "behangwerken",
    "raamdecoratie",
    "vloeren",
  ];

  const handleOptionSelect = (e) => {
    const selectedValue = e.target.value;

    navigate(`?categorie=${selectedValue}`);

    setSelectedCategory(selectedValue);

    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  const handleNavLinkClick = () => {
    window.scrollTo(
      0,
      0 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  // Filter items based on selected category
  let filteredItems = items.filter((item) =>
    selectedCategory === "Alle items" ? true : item.category === selectedCategory
  );

  // Move items with priority to the top
  filteredItems.sort((a, b) => (a.priority === b.priority ? 0 : a.priority ? -1 : 1));

  return (
    <div className="References">
      <div className="Filter">
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
      </div>
      <div className="Overview">
        <div className="container">
          <div className="c-references">
            {filteredItems.length === 0 ? (
              <div className="no-items-message">
                <h2>
                  Er zijn nog geen realisaties beschikbaar voor deze categorie.
                </h2>
                <p>
                  Door onze digitale opstart en niet de mogelijkheid te hebben
                  om op elke werf beeld en video materiaal te verzamelen is het
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
                        to={`/realisaties/${item.url}`}
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
                                alt="Schilderen in Vlaanderen."
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
                  <LoadMoreButton
                    text="meer realisaties"
                    color="black"
                    bgColor="white"
                    bgborder="black"
                    onClick={loadMore}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferencesItems;
