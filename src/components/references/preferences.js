import React from "react";
import PropTypes from "prop-types";
import "../../scss/button/buttons.scss";

function Preferences({
  titleProduct,
  color,
  colorName,
  colorInfo,
  showColor,
  productImage,
  productName,
  productInfo,
  showProduct,
  goalListItem,
  showGoalChoice,
}) {
  return (
    <>
      {showColor && (
        <div className="preferences-response preferences-response-color">
          <h3>Kleur</h3>
          <div className="color-item d-flex">
            <div
              className="color-square"
              style={{ backgroundColor: color }}
            ></div>
            <div className="color-info">
              <h4>{colorName}</h4>
              <p>{colorInfo}</p>
            </div>
          </div>
        </div>
      )}
      {showProduct && (
        <div className="preferences-response preferences-response-product">
          <h3>{titleProduct}</h3>
          <div className="product-item d-flex">
              <img src={productImage} alt={titleProduct} />
            <div className="product-info">
              <h4>{productName}</h4>
              <p>{productInfo}</p>
            </div>
          </div>
        </div>
      )}
      {showGoalChoice && (
        <div className="preferences-response preferences-response-goal">
          <h3>Doel van keuze</h3>
              <p>{goalListItem}</p>
        </div>
      )}
    </>
  );
}

Preferences.propTypes = {
  titleProduct: PropTypes.node,

  //Color element
  color: PropTypes.string,
  colorName: PropTypes.string,
  colorInfo: PropTypes.string,
  showColor: PropTypes.bool,

  //Product element
  productImage: PropTypes.string,
  productName: PropTypes.string,
  productInfo: PropTypes.string,
  showProduct: PropTypes.bool,

  //Goal of choice element
  goalListItem: PropTypes.string,
  showGoalChoice: PropTypes.bool,
};

export default Preferences;
