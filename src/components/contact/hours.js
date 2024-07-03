import React from "react";
import "../../scss/contact/info.scss";

const Hours = ({ items }) => {

  return (
        <div className="block">
          <h2>Openings uren:</h2>
          <ul className="block-list block-list-hours">
                <li className="block-item block-item-hours"><span className="bold">Ma tot Za : </span> 9:00 - 17:00 u</li>
                <li className="block-item block-item-hours"><span className="bold">Zondag : </span>GESLOTEN</li>
          </ul>
        </div>

  );
};

export default Hours;
