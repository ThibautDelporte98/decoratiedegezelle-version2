import React from "react";
import { useParams } from "react-router-dom";
import Title from "../title/title";
import "../../scss/services/overview-detail-subjects.scss";

const ServiceSubject = ({ items }) => {
  const { url } = useParams();

  // Find the corresponding service based on the ID
  const service = items.find((item) => item.url === url);

  return (
    <div className="subjects">
      <div className="container">
        {service.Services &&
          service.Services.map((item, index) => {
            // Check if customOrder property exists, otherwise use default order
            const customOrder = item.customOrder || (index % 2) < 0;

            const colImageClass = customOrder ? "order-lg-2" : "order-lg-1";
            const colTextClass = customOrder ? "order-lg-1" : "order-lg-2";

            return (
              <div className="subjects-object" key={index}>
                <div className="row">
                  <div className={`col-12 col-lg-6 ${colImageClass}`}>
                    <img src={item.image2} alt={item.image2} />
                  </div>
                  <div className={`col-12 col-lg-6 ${colTextClass}`}>
                    <div className="subjects-object-content">
                      <h2>{item.title}</h2>
                      <p>{item.descriptions}</p>
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
