import React from "react";
import "./Card.css";
import { FaArrowRight } from "react-icons/fa";

const CardItem = ({ title, text, image, url }) => {
  return (
    <a href={url} target="_blank" className="card-url">
      <div className="card text-left bg-dark">
        <div className="div">
          <img src={image} className="card-img-top"></img>
        </div>
        <div className="card-body text-light ">
          <h5 className="card-title mx-2">{title}</h5>
          <div className="caption-align">
            <p className="card-text">{text}</p>
          </div>
          <div className="icon-align">
            <i className="arrow_icon">
              <FaArrowRight className="arrow-right"></FaArrowRight>
            </i>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CardItem;
