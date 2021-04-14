import React from "react";
import "./HomeImage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeImage = (props) => {
  return (
    <div className="container-fluid">
      <div className="row home-img vh-100 d-flex align-items-center">
        <div className="header-content col-md-5 offset-md-1 mb-5">
          <h1 className="h2 d-block text-center">
            Центар за учење, Кариера и <br /> Иновација{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
