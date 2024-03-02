import React from "react";
import { useParams } from "react-router-dom";
import "../../scss/references/customer-review.scss";

const CustomerReview = ({ items }) => {
  const { url } = useParams();
  const realisation = items.find((item) => item.url === url);

  if (
    !realisation ||
    !realisation.review ||
    !realisation.review[0].text.trim()
  ) {
    return null; 
  }

  return (
    <div className="Review">
      <div className="container">
        {realisation && realisation.review && (
          <div className="review">
            <div className="review-text">
              <p>{realisation.review[0].text}</p>
            </div>
            <div className="review-signature">
              {realisation.review[0].owner}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerReview;
