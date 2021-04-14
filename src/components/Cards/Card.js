import React, { Component } from "react";
import CardItem from "./CardItem";
import "./Card.css";
import photo1 from "../images/edukacija1.jpg";
import photo2 from "../images/nastani.jpg";
import photo3 from "../images/coworking.jpg";
import photo4 from "../images/prostor za nastani.jpg";
import photo5 from "../images/partnerstva so tech komp.jpg";
import photo6 from "../images/IMG_7397.jpg";



class Card extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: 0,
          title: "Едукација",
          text:
            "Научи практични вештини за трансфорамција во кариерата. Нашата специјалност е да ти помогнеме да го најдеш правилниот skill set кој ќе одговори на релните потреби на пазарот на труд. Оранизираме курсеви, академии и персонализирани обуки кои одговараат на реалните потреби на денешницата.",
          url: "https://brainster.co/",
          image: photo1,
        },
        {
          id: 1,
          title: "Настани",
          text:
            "Специјално креирани и организирани настани кои ги поврзуваат правите таленти со иновативните компании. Идејата е да нашата tech заедница расте, се инспирира и креира преку овие настани",
          url: "",
          image: photo2,
        },
        {
          id: 2,
          title: "Coworking",
          text:
            "Биди дел од tech заедницата за иноватори, креативци и претрпиемачи. Резервирај стол во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со коги ги дели своите канцеларии.",
          url: "",
          image: photo3,
        },
        {
          id: 3,
          title: "Простор за настани",
          text:
            "Имаш идеја за обука или настан од tech областа? Ние имаме простор за реализација. Нашиот тим внимателно ги одбира и курира сите настани.",
          url: "/EventSpace",
          image: photo4,
        },
        {
          id: 4,
          title: "Партнерства со Tech компани",
          text:
            "Целта и идејата е креаирање на tech заедница која ќе се негува, расте и креира подобро утро за сите нас. Преку директно и индиректно поврзување на tech талентите со компаниите.",
          url: "https://drive.google.com/drive/u/0/folders/1uLpVURtS6fa0TODdFtIO3YWVo-eHXo77",
          image: photo5,
        },
        {
          id: 5,
          title: "Иновации за компани",
          text:
            "Нов концепт кој ќе им помогне на компаниите да преминат од стариот во новиот начин на работење. Подготевете ја вашата компанија за дигитална трансформација.",
          image: photo6,
        },
      ],
    };
  }

  render() {
    const { cards } = this.state;

    return (
      <main>
        <section className="forus py-10-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center font-weight-bold mt-5">За Нас</h2>
              </div>
              {cards.map((el) => {
                return (
                  <div className="col-md-4 col-sm-6 col-xs-12 d-flex justify-content-around pb-3">
                    <CardItem
                      key={el.id}
                      title={el.title}
                      text={el.text}
                      image={el.image}
                      url={el.url}
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

export default Card;
