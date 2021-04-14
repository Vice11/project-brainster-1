import React from "react";
import Button from "../Button/Button";
import "./EventSpace.css";

const EventSpaceButtons = ({ buttontitle, buttonLogo }) => {
  return (
    <div className="btn-item">
      <div href="/" className="bl bt-lg line-none">
        <div>
          {buttonLogo}
          {buttontitle}
        </div>
      </div>
    </div>
  );
};

export default EventSpaceButtons;
