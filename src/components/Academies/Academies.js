import React, { Component } from "react";
import AcademiesCards from "./AcademiesCards";
import "./Academies.css";
import image from "../images/IMG_7481.jpg";
import image1 from "../images/academy_1.jpg";
import image2 from "../images/academy_2.jpg";
import image3 from "../images/academy_3.jpg";
import image4 from "../images/academy_4.jpg";
import image5 from "../images/academy_5.jpg";
import image6 from "../images/academy_6.jpg";

class Academies extends Component {
  constructor() {
    super();
    this.state = {
      academiesCards: [
        {
          id: 0,
          title: "Академија за графички дизајн",
          image: image1,
        },
        {
          id: 1,
          title: "Академија за дигитален маркетинг",
          image: image2,
        },
        {
          id: 2,
          title: "Академија за Front-end програмирање",
          image: image3,
        },
        {
          id: 3,
          title: "Академија за Full-stack програмирање",
          image: image4,
        },
        {
          id: 4,
          title: "Академија за    Data Science",
          image: image5,
        },
        {
          id: 5,
          title: "Академија за sofware testing",
          image: image6,
        },
      ],
    };
  }

  render() {
    const { academiesCards } = this.state;
    return (
      <main>
        <section className="academy py-10-4" >
          <div className="container-fluid">
            <div className="row d-flex">
              <div className="col-md-4 mb-3">
                <div className="row">
                  <div className="col-sm-12">
                    <h2 className="mb-2" >Академии</h2>
                  </div>
                </div>
                <div className="paragraph mb-4">
                  <p>
                    Нашите академии ќе ти помогнат да ги свладаш најбараните
                    вештини на денешницата преку интерактивна настава и
                    практична работа на реални проекти.
                    <br />
                    <br />
                    Инструкторите кои се докажени експерти во својата област.
                    Преку нив имаш можност да ги научиш и предвидиш предизвиците
                    на иднината на работaта и да се поврзеш со сегашните и
                    идните врвни професионалци и компании.
                    <br />
                    <br />
                    Академиите ќе ти го отворат патот кон кариера каква што
                    посакуваш.
                  </p>
                </div>
              </div>
              <div className="col-md-7 col-xs-12 js--wp-4">
                <div className="photo">
                  <img className="img-responsive" src={image} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Cards */}
        <section className="academy-cards">
          <div className="container">
            <div className="row">
              {academiesCards.map((el) => {
                return (
                  <div className="col-md-4 col-sm-6 col-xs-12 d-flex justify-content-around pb-3">
                    <AcademiesCards
                      key={el.id}
                      title={el.title}
                      image={el.image}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Academies;
