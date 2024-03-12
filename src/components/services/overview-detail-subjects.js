import React from "react";
import { useParams } from "react-router-dom";
import Button from "../buttons/button";
import "../../scss/services/overview-detail-subjects.scss";

const ServiceSubject = ({ items }) => {
  const { url } = useParams();

  const service = items.find((item) => item.url === url);

  const link = items.find((item) => item.url === url);

  return (
    <div className="subjects">
      <div className="container">
        {service.Services &&
          service.Services.map((item, index) => {
            // Check if customOrder property exists, otherwise use default order
            const customOrder = item.customOrder || index % 2 < 0;

            const colImageClass = customOrder ? "order-lg-2" : "order-lg-1";
            const colTextClass = customOrder ? "order-lg-1" : "order-lg-2";

            return (
              <div className="subjects-object" key={index}>
                <div className="row">
                  <div className={`col-12 col-lg-6 ${colImageClass}`}>
                    <div className="subjects-object-image">
                      <div className="subjects-object-image--overlay">
                        <Button
                          to={`/realisaties?category=${link.url}`}
                          color={"white"}
                          layout={"display-flex-center"}
                          onClick={""}
                        >
                          Bekijk realisaties
                        </Button>
                      </div>
                      <img src={item.image} alt={item.image} />
                    </div>
                  </div>
                  <div className={`col-12 col-lg-6 ${colTextClass}`}>
                    <div className="subjects-object-content">
                      <h2>{item.title}</h2>
                      <p>{item.descriptions[0]}</p>
                      <div className="subjects-object-list">
                        <h3>{item.subTitle}</h3>
                        <ul>
                          {item.pros.map((pro) => (
                            <li
                              className="subjects-object-list--item "
                              key={pro.id}
                            >
                              <p>{pro.text}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ServiceSubject;
