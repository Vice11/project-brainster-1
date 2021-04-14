import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Events.css";

const EventsCard = ({ title, text, image }) => {
  return (
    <div className="eventcard text-left bg-dark">
      <div>
        <img src={image} className="card-img-top" />
      </div>
      <div className="eventcard-body text-light">
        <h5 className="eventcard-title mx-2" >{title}</h5>
        <div className="caption-align">
          <p className="eventcard-text" >{text}</p>
        </div>
        <div className="icon-align">
          <i className="arrow_icon">
            <FaArrowRight className="arrow-right"></FaArrowRight>
          </i>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
