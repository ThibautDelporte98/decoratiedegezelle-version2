import React from "react";
import { Link } from "react-router-dom";
import "../../scss/contact/info.scss";

const ContactInfo = ({ items}) => {

  
  return (
        <div className="block">
          <h2>Onze gegevens:</h2>
          <ul className="block-list">
            {items.map((item, index) => (
              <Link className="block-link" to={item.link} key={index} target="_blank">
                <img src={item.icon} alt={item.title} />
                <li className="block-item">{item.text}</li>
              </Link>
            ))}
          </ul>
        </div>
  );
};

export default ContactInfo;
