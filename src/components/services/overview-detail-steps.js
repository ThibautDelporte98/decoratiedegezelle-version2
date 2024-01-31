import React from "react";
import Title from "../title/title";
import "../../scss/services/overview-detail-steps.scss";

const WayOfWork = ({ items }) => {
  return (
    <div className="wayofwork">
      <div className="container">
        <ol className="wayofwork-list">
          <div className="row">
            {items.map((item, index) => {
              console.log(item.id);
              return (
                <div className="col-12 col-lg-6">
                  <li className="wayofwork-item" key={index}>
                    <span className="number">{item.id}</span>
                    <div className="wayofwork-content">
                      <h2>{item.title}</h2>
                      <ul>
                        {item.descriptions.map((desc, descIndex) => (
                          <li className="wayofwork-item-list" key={descIndex}>
                            <span className="bold">{desc.method}: </span>{" "}
                            {desc.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </div>
              );
            })}
          </div>
        </ol>
      </div>
    </div>
  );
};

export default WayOfWork;
