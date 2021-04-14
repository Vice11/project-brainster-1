import React, { useState } from "react";
import "./Footer.css";
import PopUp from "./PopUp";
import Logo from "../brainster_space_logo.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main-footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <h4>Корисни Линкови</h4> */}
            <ul>
              {/* <li className="font-weight-bold ">Корисни линкови</li> */}
              <li>
                <a className="footer-links" type="button" onClick={togglePopup}>
                  Контакт
                </a>
              </li>
              <li>
                <a
                  type="button"
                  href="https://www.wearelaika.com/"
                  target="_blank"
                >
                  Отворени Позиции
                </a>
              </li>
              <li>
                <a type="button" href="https://medium.com/" target="_blank">
                  Галерија
                </a>
              </li>
              <li>
                <a type="button" href="">
                  Календар
                </a>
              </li>
            </ul>
            {isOpen && (
              <PopUp
                content={
                  <>
                    <h3>Kонтакт</h3>
                    <p>
                      Емаил:
                      <br />
                      viktor@multimedia-net.mk
                      <br />
                      Број:
                      <br />
                      074/206-106
                    </p>
                    <a
                      href="/EventSpace"
                      className="bs btn-black-footer mb-3 btnAcademy"
                    >
                      За повеќе инфо
                    </a>
                  </>
                }
                handleClose={togglePopup}
              />
            )}
          </div>
          <div className="col-md-2">
            {/* <h4>Социјални Мрежи</h4> */}
            <ul>
              <a href="https://www.facebook.com/brainster.co" target="_blank">
                <FaFacebookSquare className="fb-icon" icon="facebook" />
              </a>
              <a href="https://www.instagram.com/brainsterco/" target="_blank">
                <FaInstagram className="insta-icon" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedin className="in-icon" />
              </a>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row font-weight-bold">
          <p className="col-sm text-center">
            COPYRIGHT&copy;{new Date().getFullYear()} BrainsterSpace | All
            Rights Reserved
            <a href="" className="footer-logo">
              <img src={Logo} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
