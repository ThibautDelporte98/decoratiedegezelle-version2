import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../buttons/button";
import Title from "../title/title";
import "../../scss/home/references.scss";

const References = ({ items }) => {
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    // Willekeurige sortering van de items
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);

    // Selecteer de eerste 3 items
    const selectedItems = shuffledItems.slice(0, 3);

    setRandomItems(selectedItems);
  }, [items]);

  const handleNavLinkClick = () => {
    window.scrollTo(
      0,
      0 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  return (
    <div className="references" id="recent-projects">
      <div className="introduction">
        <div className="container">
          <Title id="black">Recente projecten</Title>
          <div className="intro">
            <h2>Ontdek ons vakmanschap</h2>
            <p>
              Neem een kijkje in onze projecten en beleef het meet van begin tot
              einde. Wij zorgen voor een vernieuwde uitstraling om jouw omgeving
              een warmer en sfeervoller gevoel te geven.
            </p>
          </div>
        </div>        
      </div>

      <div className="objects">
        <div className="container">
          <div className="items">
            {randomItems.map((item, index) => (
              <div
                className={`item ${index % 2 === 0 ? "right" : ""}`}
                key={index}
              >
                <div className="item-project z-index-3">
                  <Link className="item-project-link" to={`/realisatie/${item.url}`} onClick={handleNavLinkClick} >
                    <div className="item-project-image">
                      <div className="item-project-location">
                        {item.city}
                        </div>
                      <img src={item.image} />
                    </div>
                  </Link>
                  <div className="content">
                    <h3>
                      {item.subject}| {item.title}
                    </h3>
                    <ul>
                      {item.techniques &&
                        item.techniques.map((tech, index) => (
                          <li>
                            <Link to={tech.url}  key={index} onClick={handleNavLinkClick} >
                              {tech.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;
