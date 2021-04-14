import React, { Component } from "react";
import EventSpaceCards from "./EventSpaceCards";
import Button from "../Button/Button";
import { Link } from "react-scroll";
import "./EventSpace.css";
import image from "../images/prostor za nastani.jpg";
import image1 from "../images/2.jpg";
import image2 from "../images/C3 1.jpg";
import image3 from "../images/C3 2.jpg";
import image4 from "../images/C3 EXIBITION_1.jpg";
import image5 from "../images/C2 1.jpg";
import image6 from "../images/C1 1.jpg";
import image7 from "../images/HOL KON SEDENJE.jpg";
import image8 from "../images/OFIS LEASURE_01_1.jpg";
import image9 from "../images/KITCHEN_03 (1).jpg";
import image13 from "../images/IMG_7361.jpg";
import EventSpaceButtons from "./EventSpaceButtons";
import { FaLightbulb } from "react-icons/fa";
import { FaBlender } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaSpaceShuttle } from "react-icons/fa";
import { AiOutlineSound } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

class EventSpace extends Component {
  constructor() {
    super();
    this.state = {
      eventcards: [
        {
          subtitle: "Brainster",
          subimage: image1,
        },
        {
          subtitle: "Конференциска сала",
          subimage: image2,
        },
        {
          subtitle: "Сала со бина",
          subimage: image3,
        },
        {
          subtitle: "Адаптибилна училница",
          subimage: image4,
        },
        {
          subtitle: "Училница",
          subimage: image5,
        },
        {
          subtitle: "Училница",
          subimage: image6,
        },
        {
          subtitle: "Хол",
          subimage: image7,
        },
        {
          subtitle: "Канцелариски простор",
          subimage: image8,
        },
        {
          subtitle: "Space Kitchen",
          subimage: image9,
        },
      ],
      eventbuttons: [
        {
          buttontitle: "Простор ",
          buttonLogo: <FaSpaceShuttle className="event-logos" />,
        },
        {
          buttontitle: "Space Kitchen",
          buttonLogo: <FaBlender className="event-logos" />,
        },
        {
          buttontitle: "Логистика",
          buttonLogo: <BiWorld className="event-logos" />,
        },
        {
          buttontitle: "Техничка поддршка",
          buttonLogo: <AiOutlineSound className="event-logos" />,
        },
        {
          buttontitle: "Звук",
          buttonLogo: <FaMicrophone className="event-logos" />,
        },
        {
          buttontitle: "Светло",
          buttonLogo: <FaLightbulb className="event-logos" />,
        },
        {
          buttontitle: "Помош при организација",
          buttonLogo: <FaLayerGroup className="event-logos" />,
        },
        {
          buttontitle: "Видео и фотографија",
          buttonLogo: <FaPhotoVideo className="event-logos" />,
        },
        {
          buttontitle: "Промоција на социјални мрежи",
          buttonLogo: <FaFacebook className="event-logos" />,
        },
      ],
    };
  }

  render() {
    const { eventcards, eventbuttons } = this.state;

    return (
      <main>
        {/* SPACE EVENTS*/}
        <section className="event-book py-3 mb-5">
          <div className="container-fluid">
            <div className="row d-flex">
              <div className="col-md-4">
                <h2 className="mb-2 h2-style">Простор за настани</h2>

                <div className="paragraph mb-4">
                  <p>
                    Нашиот простор се прилагодува според потребите на вашиот
                    настан. Седум различни простори и Space Kitchen.
                    <br />
                    <br />
                    Наменски создадени да се прилагодуваат и менуваат во
                    согласност со типот на настан кој го орагнизирате.
                    <br />
                    <br />
                    Организираме конференции до 150 учесници и обуки и предавање
                    за групи од 20 учесници. Контактирај не за да ви хостираме
                    одличен настан.
                  </p>
                  <Link
                    className="link-type-btn"
                    type="button"
                    activeClass="active"
                    to="myTarget"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                  >
                    Букирај не
                  </Link>
                </div>
              </div>
              <div className="col-md-7">
                <div className="image">
                  <img className="img-responsive" src={image} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* OUR SPACES */}
        <section className="event-space py-6">
          <div className="container-fluid">
            <div className="row d-flex">
              <div className="col-md-3 col-sm-12">
                <h2 className="mb-2 h2-style">Нашите простории</h2>

                <div className="paragraph mb-3">
                  <p>
                    Комплетно адаптибилни. Една сала за 150 учесници или три
                    помали сали за групи од по 50 учесника. училници за од 25 до
                    40 учесника. Избор од две локации.
                    <br />
                    <br />
                    Пулт за прием. И најважното место за networking-Brainster
                    Kitchen.
                    <br />
                    <br />
                    Како го замислувате вашиот следен настан?
                  </p>
                </div>
              </div>
              <div className="col-md-8 d-flex">
                <div className="row-mr">
                  {eventcards.map((el) => {
                    return (
                      <EventSpaceCards
                        subtitle={el.subtitle}
                        subimage={el.subimage}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SPACE KITCHEN */}
        <section className="space-kitchen py-3">
          <div className="container-fluid">
            <div className="row d-flex">
              <div className="col-md-7 col-sm-12 col-xs-12 height-all">
                <div className="row px--11">
                  <div className="col-md-6 col-sm-6 col-xs-12 height-pic px-11 mb-2-3">
                    <div className="first-pic"></div>
                    <div className="row px--11">
                      <div className="col-md-6 height-pic px-11">
                        <img src={image13} className="second-pic" />
                      </div>
                      <div className="col-md-6 height-pic px-11">
                        <div className="third-pic"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12 height-all px-11 mb-2-3">
                    <div className="fourth-pic"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 md-none">
                <h2 className="h2-style">Space Kitchen</h2>
                <div className="paragraph">
                  <p>
                    Место каде сите настани започнуваат и завршуваат. Место каде
                    нашиот тим готви и експериментира. Нашата кујна има само
                    едно правило
                    <br />
                    <br />
                    Храната мора да биде вегетаријанска. Пијалок, кафе или мезе.
                    Вие одберете вид на кетеринг ние ќе го обезбедиме.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* OFFERS */}
        <section className="event-offers py-6">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 ">
                <h2 className className="h2-style mb-5">
                  Нудиме
                </h2>
                {eventbuttons.map((el) => {
                  return (
                    <EventSpaceButtons
                      buttontitle={el.buttontitle}
                      buttonLogo={el.buttonLogo}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* EVENT HOST */}
        <section className="event-host" id="myTarget">
          <div className="container-fluid">
            <div className="row d-flex">
              <div className="col-sm-6 col-xs-12">
                <div className="basic-info">
                  <h2 className="h2-style">Event Host</h2>
                  <p className="paragraph-info">
                    Петрушевски Виктор
                    <br />
                    viktor@multimedia-net.mk
                    <br />
                    074/206-106
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="portrait">
                  <div className="fill cover-img"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default EventSpace;
