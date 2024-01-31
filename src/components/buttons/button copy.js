import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Button({ to, children, layout, color }) {
  return (
      <div className={`button-item d-flex ${layout === "center" ? "button-item-more" : "button-subject"}`}>
        <Link className="button-link" to={to} target={"_blank"}>
          <div className="button-element d-flex">
          <div className="button-subject" style={{color: color}}>
                {children}
                
            </div>
            <div className="button-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
  );
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  layout: PropTypes.oneOf(["default", "center"]),
};

Button.defaultProps = {
  layout: "default",
};

export default Button;
