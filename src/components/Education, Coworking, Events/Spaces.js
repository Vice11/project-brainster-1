import React from "react";
import "./Spaces.css";
import image from "../images/prostor za nastani.jpg";

const Spaces = () => {
  return (
    <section className="education py-4">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-5 col-xs-12 js--wp-3 animated fadeInLeftBig">
            <h2 className="mb-2">Простори за настани</h2>
            <div className="paragraph mb-4">
              <p>
                Можност за презентации, обуку, конференции, networking настани.
                Одбери ја просторијата која најмногу ќе одговара на твојата
                идеја. Го задржуваме правото да одбереме кој настан ќе се
                организира во нашиот Brainster Space.
              </p>
            </div>
            <a href="/EventSpace" className="bs btn-black line-none mr-1 mb-5 btnAcademy">
              Види го просторот
            </a>
          </div>
          <div className="col-md-7 col-xs-12 js--wp-4 animated fadeInRightBig">
            <div className="photo">
              <img
                src={image}
                className="img-responsive img-round"
                alt="Image"
              />
            </div>
          </div>
          <div className="partnership col-md-12 text-center">
            <h2>Партнери</h2>
            <p className="partnership-p">Имаш идеја? Отворени сме за соработка</p>
            <a href="/EventSpace" className="bs btn-black line-none mr-1 mb-5 btnAcademy">
              Види го просторот
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spaces;
