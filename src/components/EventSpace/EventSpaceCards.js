import React from "react";
import "./EventSpace.css";

const EventSpaceCards = ({ subtitle, subimage }) => {
  return (
    <div className=" gallery-content col-md-4 col-sm-6 col-xs-12">
      <img
        className="event-images img-responsive mb-1 img-top"
        src={subimage}
        alt="Image"
      />
      <h5 className="h5-style mb-2-2">{subtitle}</h5>
    </div>
  );
};

export default EventSpaceCards;
