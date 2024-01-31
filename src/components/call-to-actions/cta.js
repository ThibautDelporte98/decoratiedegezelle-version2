import React from "react";
import { Link } from "react-router-dom";
import "../../scss/services/cta.scss";
import logo from "../../images/logo/trustlocal.png";
import Button from "../buttons/button";
import thrustlocal from "../../images/logo/trustlocal.png";
import google from "../../images/logo/Google.png";
import dataGoogle  from "./data/google-review.js";
import dataLocal  from "./data/thrustlocal-review.js";

const generateStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 1; i <= fullStars; i++) {
    stars.push(
      <span key={i} className="star filled">
        ★
      </span>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <span key="half" className="star half-filled">
        ★
      </span>
    );
  }

  for (let i = stars.length + 1; i <= 5; i++) {
    stars.push(
      <span key={i} className="star">
        ★
      </span>
    );
  }

  return stars;
};

const Cta = ({}) => {
  const totalRatingsGoogle = dataGoogle.length;
  const totalScoreGoogle = dataGoogle.reduce((sum, item) => sum + item.rating, 0);
  const averageScoreGoogle = totalRatingsGoogle > 0 ? (totalScoreGoogle / totalRatingsGoogle).toFixed(1) : "0.0";
  const totalRatingsLocal = dataLocal.length;
  const totalScoreLocal = dataLocal.reduce((sum, item) => sum + item.rating, 0);
  const averageScoreLocal = totalRatingsLocal > 0 ? (totalScoreLocal / totalRatingsLocal).toFixed(1) : "0.0";

  


  return (
    <div className="call-to-action"  id="testimonials">
      <div className="container">
        <div className="reviews-items">
          <div className="info">
            <div className="average-score">
              <div className="score">
                {averageScoreGoogle}
                <span className="review-logo">
                  <img src={google} />
                </span>
              </div>
              <div className="reviews-item">
                <div className="reviews-title">Google reviews</div>
                <div className="stars">{generateStars(averageScoreGoogle)}</div>
                <Link
                  className="reviews-amount"
                  to={
                    "https://www.google.com/search?sca_esv=600084738&tbm=lcl&sxsrf=ACQVn0_XSQ1aKL3YmnvX2icMsw3K1q0Iag:1705765138812&q=Decoratie+Degezelle+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MbE0NTM1NDQzMzC3NLCwsDA12sDI-IpR2iU1Ob8osSQzVcElNT21KjUnJ1UhKLUsM7W8eBErPlkAEmjMXFYAAAA&rldimm=4495651166079088852&hl=nl-BE&sa=X&ved=2ahUKEwjm5ayppuyDAxVCUqQEHUymAp4Q9fQKegQIOBAF&biw=1536&bih=750&dpr=1.25#lkt=LocalPoiReviews"
                  }
                  target={"_blank"}
                >
                  Bekijk {totalRatingsGoogle} reviews
                </Link>
              </div>
            </div>
            <div className="average-score average-score-end">
              <div className="score">
                {averageScoreLocal}
                <span className="review-logo">
                  <img src={thrustlocal} />
                </span>
              </div>
              <div className="reviews-item">
                <div className="reviews-title">Thrustlocal reviews</div>
                <div className="stars">{generateStars(averageScoreLocal)}</div>
                <Link
                  className="reviews-amount"
                  to={
                    "https://trustlocal.be/west-vlaanderen/harelbeke/schilder/decoratie-degezelle/?filters=eyJzZXJ2aWNlVXJsIjoic2NoaWxkZXIiLCJwYWdlIjoxLCJyZWdpb25VcmwiOiJ3ZXN0LXZsYWFuZGVyZW4iLCJsb2NhdGlvbiI6ImhhcmVsYmVrZSJ9&fromProviderId=decoratie-degezelle&originCity=harelbeke&originRegion=west-vlaanderen&top10page=1"
                  }
                  target={"_blank"}
                >
                  Bekijk {totalRatingsLocal} reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
