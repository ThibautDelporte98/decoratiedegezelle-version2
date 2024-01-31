import React from "react";
import { Link } from "react-router-dom";
import "../../scss/contact/info.scss";

const Social = ({items}) => {

  return (
        <div className="block">
          <h2>Volg ons:</h2>
          <ul className="block-list block-list-social">
            {items.map((item, index) => (
              <Link className="block-link block-link-social" to={item.link} key={index} target="_blank">
                <img src={item.icon} alt={item.title} />
                <li className="block-item block-item-social">{item.text}</li>
              </Link>
            ))}
          </ul>
        </div>
  );
};

export default Social;
