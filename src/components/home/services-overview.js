import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Title from "../title/title";
import Button from "../buttons/button";
import "../../scss/home/services-overview.scss";

const ServiceOverview = ({ items }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialId = queryParams.get("id") || 1;
  const [selectService, setSelectService] = useState(initialId);
  const [mouseHover, setMouseHover] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const defaulItem = items.find((item) => item.id === 1);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleNavLinkClick = (id) => {
    if (windowWidth >= 1024) {
      window.scrollTo(0, 0);
    } else {
      setSelectService(id);
    }
  };

  const handleMouseEnter = (id) => {
    setMouseHover(id);
  };

  const handleMouseLeave = () => {
    setMouseHover(null);
  };

  const renderServiceImage = () => {
    const selectedImage =
      windowWidth >= 1024
        ? mouseHover
          ? (items.find((item) => item.id === mouseHover) || {}).image
          : selectService === 1
          ? defaulItem.image
          : (items.find((item) => item.id === selectService) || {}).image
        : selectService === 1
        ? defaulItem.image
        : (items.find((item) => item.id === selectService) || {}).image;

    return (
      <img
        id="link-id"
        className={`service-image ${items.find((item) =>
          item.id === mouseHover ? "fade-in" : "fade-out"
        )}`}
        src={selectedImage}
        alt={`Verschillende schilderdiensten: ${
          windowWidth >= 1024
            ? mouseHover
              ? (items.find((item) => item.id === mouseHover) || {}).title
              : selectService === 1
              ? defaulItem.title
              : ""
            : selectService === 1
            ? defaulItem.title
            : (items.find((item) => item.id === selectService) || {}).title
        }`}
      />
    );
  };

  return (
    <section className="service" id="service-overview">
      <Title 
        title="Dienst overzicht"
        children="Aanbod"
        color={"white"}>
      </Title>
      <div className="service-overview">
        <div className="d-flex flex-mobile">
          <div className="img-left">
            {defaulItem && (
              <div className="service-image-overlay">
                {windowWidth >= 1024.5 && (
                  <h3 styles={windowWidth >= 1024.5 ? "display:none" : ""}>
                    {mouseHover
                      ? (items.find((item) => item.id === mouseHover) || {})
                          .title
                      : selectService === 1
                      ? defaulItem.title
                      : (items.find((item) => item.id === selectService) || {})
                          .title}
                  </h3>
                )}
                {windowWidth <= 1024.5 && (
                  <div>
                    <h3>
                      {selectService === 1
                        ? defaulItem.title
                        : (
                            items.find((item) => item.id === selectService) ||
                            {}
                          ).title}
                    </h3>
                    <div>
                        {" "}
                        {selectService === 1
                          ? defaulItem.subject
                          : (
                              items.find((item) => item.id === selectService) ||
                              {}
                            ).subject}{" "}
                      </div>
                  </div>
                )}
              </div>
            )}
            {defaulItem && renderServiceImage()}
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
                            windowWidth >= 1024 ? `/diensten/${item.url}` : ""
                          }`}
                          onClick={() => handleNavLinkClick(item.id)}
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <li className="service-list-item d-flex">
                            <h3>{item.title} </h3>
                            <span className="service-list-item-subject">
                              | {item.subject}
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
                      layout={"display-flex-end"}
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
    </section>
  );
};

export default ServiceOverview;
