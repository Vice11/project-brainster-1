import React, { useState } from "react";
import "./Coworking.css";
import image1 from "../images/coworking.jpg";
import { AiOutlineWarning } from "react-icons/ai";

const Coworking = () => {

  const [show, setShow] = useState(false);

  return (
    <section className="coworking py-4">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-7 col-xs-12 js--wp-4 animated">
            <div className="photo">
              <img
                src={image1}
                className="img-responsive img-round"
                alt="Coworking-Image"
              />
            </div>
          </div>
          <div className="col-md-5 col-xs-12 js--wp-3 animated fadeInLeftBig">
            <button className="btn-round line-none mb-2">Sold Out</button>
            <h2 className="mb-2 line-th">Coworking</h2>
            <div className="paragraph mb-4 line-th">
              <p>
                Биди дел од tech заедницата на иноватори, креативци и
                претприемачи. Резервирај стол во нашата shared office. Пичирај
                го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со
                кого да ги дели своите канцеларии.
              </p>
            </div>
            <button
              onClick={() => setShow(true)}
              className="bs btn-black line-none mr-1 mb-5 btnAcademy"
            >
              Резервирај место
            </button>
            {
              show ? <div className="msgDiv">
                <p className="msgPlace">
                  <AiOutlineWarning className="warning-icon" />
                "Местата се распродадени"
              </p>
              </div> : null
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coworking;
