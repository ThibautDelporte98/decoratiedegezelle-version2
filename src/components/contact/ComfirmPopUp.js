import React from "react";
import { Link } from "react-router-dom";
import "../../scss/contact/confirmPopUp.scss";
import Button from "../buttons/button";

const ConfirmPopUp = ({ onClose }) => {
  const handlePopReload = () => {
    onClose();
    window.location.reload(false);
  };

  return (
    <div className="confirmPopUp">
      <div className="confirmPopUp__content">
        <div className="confirmPopUp-text">
          <h2>Uw bericht is succesvol verzonden!</h2>
          <p>
            We nemen zo snel mogelijk contact met u op!
          </p>          
        </div>
        <Button 
          children="Sluiten"
          color={"white"}
          onClick={handlePopReload}
        />
      </div>
    </div>
  );
};

export default ConfirmPopUp;
