import React from "react";
import { Link } from "react-router-dom";
import "../../scss/contact/info.scss";

const Info = ({ items }) => {

  return (
    <div className="col-12 col-lg-4">
      <div className="contact-details">
        <div className="block">
          <h2>Onze gegevens:</h2>
          <ul className="block-list">
            {items.map((item, index) => (
              <Link className="block-link" to={item.link} key={index} target="_blank">
                <img src={item.icon} alt={item.title}/>
                <li className="block-item">{item.text}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="block">
          <h2>Openings uren:</h2>
          <ul className="block-list block-list-hours">
                <li className="block-item block-item-hours"><span className="bold">Maandag - Zaterdag : </span> 9:00 - 17:00 u</li>
                <li className="block-item block-item-hours"><span className="bold">Zondag : </span>GESLOTEN</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
