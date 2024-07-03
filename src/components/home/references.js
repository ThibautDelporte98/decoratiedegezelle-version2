import React, { useMemo } from "react";
import { Link} from "react-router-dom";
import Title from "../title/title";
import "../../scss/home/references.scss";

const References = ({ items }) => {
  const randomItems = useMemo(() => {
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);
    return shuffledItems.slice(0, 3);
  }, [items]);

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="references" id="recent-projects">
      <div className="introduction">
        <div className="container">
        <Title 
          title="Projecten"
          children="Realisaties"
          color={"black"}>
      </Title>
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
                  <Link
                    className="item-project-link"
                    to={`/realisaties/${item.url}`}
                    onClick={handleNavLinkClick}
                  >
                    <div className="item-project-image">
                      <div className="item-project-location">{item.city}</div>
                      <img src={item.image} alt="Realisaties Vlaanderen Decoratie Degezelle " loading="lazy" />
                    </div>
                  </Link>
                  <div className="content">
                    <h3>
                      {item.subject}| {item.title}
                    </h3>
                    <ul>
                      {item.techniques &&
                        item.techniques.map((tech, index) => (
                          <li key={index}>
                            <Link to={tech.url} onClick={handleNavLinkClick}>
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
