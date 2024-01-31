import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../scss/references/realisation-images.scss"; // Create a CSS file for styling


const Slider = ({items}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { id } = useParams();

  // Find the corresponding service based on the ID
  const service = items.find((item) => item.id === parseInt(id));

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? service.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === service.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="before-after">
      <div className="container">
        <div className="slider-container">
          <div className="slider-element">
            <button
              onClick={handlePrev}
              className="slider-button slider-button-prev"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="slider-button slider-button-next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </button>
            <div className="slider">
              {service.images.map((image, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentIndex ? "active" : ""}`}
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  <img src={image.image} alt={`Slide ${index}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="slider-counter">
            <div>
              {currentIndex + 1}/{service.images.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
