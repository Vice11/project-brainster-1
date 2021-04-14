import React from "react";
import image from "../images/edukacija1.jpg";
import './Education.css';

const EducationFunc = () => {
  return (
    <section className="education py-4">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-5 col-xs-12 js--wp-3">
            <h2 className="mb-2">Едукација</h2>
            <div className="paragraph mb-4">
              <p>
                Дали си подготвен да одговориш на потребите на иднината.
                Вистинските курсеви, академии и семинари кои ќе ти овозможат
                кариерна трансфорамција во областа дигирален маркетинг, дизајн,
                програмирање и Data Science.
              </p>
            </div>
            <a type="button" className="bs btn-black line-none mr-1 mb-5 btnAcademy">
              Академии
            </a>
            <a type="button" className="bm btn-yellow line-none ml-2 mb-5 btnCompany">
              За Компании
            </a>
          </div>
          <div className="col-md-7 col-xs-12 js--wp-4">
            <div className="photo">
              <img
                src={image}
                className="img-responsive img-round"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationFunc;
