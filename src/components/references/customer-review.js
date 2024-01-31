import React from "react";
import { useParams } from "react-router-dom";
import "../../scss/references/customer-review.scss";

const CustomerReview = ({ items }) => {
  // const { id } = useParams();

  // // Find the corresponding service based on the ID
  // const realisation = items.find((item) => item.id === parseInt(id));

  return (
    <div className="Review">
      <div className="container">
        <div className="review">
          <div className="review-text">
            <p>
              Mijn verouderde inrichting was aan vernieuwing toe. Zelf
              schilderen was geen optie dus op zoek naar een schilder. Gelukkig
              via mond op mond reclame contact genomen met Decoratie Degezelle
              wat een schot in de roos blijkt te zijn. Strakke planning, goeie
              begeleiding, mooie afgewerkte schilderwerken en een zeer eerlijke
              prijs voor dit alles. Mijn living is een pareltje geworden.
              Bedankt Alexandro
            </p>
          </div>
          <div className="review-signature">Peggy Herrisen - eigenaresse</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
