import React, { Component } from "react";
import EventsCard from "./EventsCard";
import image1 from "../images/IMG_7481.jpg";
import image2 from "../images/instruktori.jpg";
import image3 from "../images/Hristijan-Nosecka-1024x536.jpg";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      card: [
        {
          id: 6,
          title: "Codeworks",
          text:
            "Вистинскиот настан за сите tech таленти кои сакаат да кодираат и да научат што е ново во tech заедницата. Настан кој ги поврзува mid програмерите со IT компании. Deep Dive Intensive Seminar. Ексклузивни семинари кои комбинираат три различни техники на учење.",
          image: image1,
        },
        {
          id: 7,
          title: "Deep Dive into Marketing",
          text:
            "Deep Dive into Marketing се серија од интезивни семинари кои се наменски подготвени да ти помогнат да ги совалдаш и предвидиш современите промени, предизвици и идните трендови во областа на маркетингот.",
          image: image2,
        },
        {
          id: 8,
          title: "Deep Dive into Data Science",
          text:
            "Deep Dive into Data Science се серија од интезивни семинари кои се наменски подготвени да ти помогнат да ги совалдаш и предвидиш современите промени, предизвици и идните трендови во областа на Data Science.",
          image: image3,
        },
      ],
    };
  }

  render() {
    const { card } = this.state;
    return (
      <main>
        <section className="py-10-4">
          <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center font-weight-bold mt-5">Настани</h2>
              </div>
              {card.map((el) => {
                return (
                  <div className="col-md-4">
                    <EventsCard
                      key={el.id}
                      title={el.title}
                      text={el.text}
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

export default Events;
