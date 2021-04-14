import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn-primary", "btn-outline"];

const SIZES = ["btn-medium", "btn-large"];

const Button = ({ children, type, buttonStyle, buttonSize, showModal }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="#" className="Button">
      <button
        className={`navBtn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={showModal}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
