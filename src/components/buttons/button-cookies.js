import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../scss/button/buttons.scss";

function Button({ to, children, layout, color, bgborder, onClick, scrollToTop }) {
  
  const buttonStyle = {
    color: color,
    "--c": bgborder,
  };

  const handleNavLinkClick = () => {
    window.scrollTo(
      0,
      0 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (scrollToTop) handleNavLinkClick();
  };


  return (
    <div className={`Button ${layout}`}>
      <Link
        className="Button-link Button-link--cookies"
        to={to}
        onClick={handleClick}

      >
        <div className="Button-txt Button-txt-form" style={buttonStyle}>
          {children}
        </div>
      </Link>
    </div>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  layout: PropTypes.oneOf(["default", "display-flex-center" , "display-flex-end"]),
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  scrollToTop: PropTypes.bool,

};

Button.defaultProps = {
  layout: "default",
  color: "#caa35c",
  onClick: () => {},
  scrollToTop: true, 
};

export default Button;
