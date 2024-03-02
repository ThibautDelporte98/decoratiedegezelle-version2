import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Title from "../title/title";
import Button from "../buttons/button";
import "../../scss/home/services-overview.scss";
import image from "../../images/carouselImages/home/A1.webp";

const ServiceOverview = ({ items }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialId = queryParams.get("id") || 1;
  const [selectService, setSelectService] = useState(initialId);
  const [mouseHover, setMouseHover] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const defaulItem = items.find((item) => item.id === 1);

  const handleNavLinkClick = (id) => {
    if(windowWidth >= 992){

      window.scrollTo(
        0,
        0 * parseFloat(getComputedStyle(document.documentElement).fontSize)
      );
    }else{
      setSelectService(id);
    }
  };

  const handleMouseEnter = (id) => {
    setMouseHover(id);
  };

  const handleMouseLeave = () => {
    setMouseHover(null);
  };

  return (
    <div className="service" id="service-overview">
      <Title bg={"black"} color={"white"}>
        Dienst overzicht
      </Title>
      <div className="service-overview">
        <div className="d-flex flex-mobile">
          <div className="img-left">
            {defaulItem && (
              <div className="service-image-overlay">
                {windowWidth >= 992 && (
                  <h3>
                    {mouseHover
                      ? (items.find((item) => item.id === mouseHover) || {})
                          .title
                      : selectService === 1
                      ? defaulItem.title
                      : (items.find((item) => item.id === selectService) || {})
                          .title}
                  </h3>
                )}
                {windowWidth <= 992 && (
                  <h3>
                    {selectService === 1
                      ? defaulItem.title
                      : (items.find((item) => item.id === selectService) || {})
                          .title}
                  </h3>
                )}
              </div>
            )}
            {defaulItem && (
              <img
                id="link-id"
                className={`service-image ${items.find((item) =>
                  item.id === mouseHover ? "fade-in" : "fade-out"
                )}`}
                src={
                  windowWidth >= 992
                    ? mouseHover
                      ? (items.find((item) => item.id === mouseHover) || {})
                          .image
                      : selectService === 1
                      ? defaulItem.image
                      : (items.find((item) => item.id === selectService) || {})
                          .image
                    : 
                    selectService === 1
                    ? defaulItem.image
                    : (items.find((item) => item.id === selectService) || {})
                        .image
                }
                alt={`Dienst ${ 

                  windowWidth >= 992 ?
                  mouseHover
                    ? (items.find((item) => item.id === mouseHover) || {}).title
                    : selectService === 1
                    ? defaulItem.title
                    : "" 
                    : 
                    selectService === 1
                    ? defaulItem.image
                    : (items.find((item) => item.id === selectService) || {})
                        .title
                      }
                `}
              />
            )}
          </div>
          <div className="content-right">
            <div className="custom-container">
              <div className="row">
                <div className="align-items">
                    <div className="service-items">
                      <ol className="service-list">
                        {items.map((item, index) => (
                          <Link
                            className="service-link"
                            key={index}
                            to={`${
                              windowWidth >= 992
                                ? `/dienst/${item.url}`
                                : ''
                            }`}

                            onClick={() => handleNavLinkClick(item.id)}
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <li className="service-list-item">
                              {item.title} |
                              <span className="service-list-item-subject">
                                {item.subject}
                              </span>
                            </li>
                          </Link>
                        ))}
                      </ol>
                    </div>
                  </div>
                  <div className="col-12">
                    <hr />
                    <div className="service-cta">
                      <p>
                        Waarom genoegen nemen met gewoon, als het buitengewoon
                        binnen handbereik is? Ontdek vandaag nog de artistieke
                        mogelijkheden die ons schilderbedrijf te bieden heeft.
                      </p>
                      <Button
                        to={"./diensten"}
                        color={"white"}
                        onClick={""}
                        layout={"end"}
                      >
                        Overzicht diensten
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ServiceOverview;
