import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../scss/button/buttons.scss";

function Button({ to, children, layout, color , bgborder, onClick}) {

  const buttonStyle = {
    color: color,
    "--c": bgborder,

  };
  return (
    <Link className={`Button ${layout}`} to={to} onClick={onClick}>
    <div className="Button-txt Button-txt-form" style={buttonStyle}>{children}</div>
  </Link>
  );
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string, 
  layout: PropTypes.oneOf(["default", "end"]),
};

Button.defaultProps = {
  layout: "default",
  color: "#caa35c", 
};

export default Button;
