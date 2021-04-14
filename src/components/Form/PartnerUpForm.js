import React from "react";
import "./PartnerUpForm.css";
import Logo from "../images/3.png";

const PartnerUpForm = ({
  show2,
  hideModal2,
  handleSubmit,
  handleFormData,
  fullName,
  password,
  companyName,
  number,
  comments,
}) => {
  const showHideClassName = show2
    ? "modal display-block"
    : "modal display-none";
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  return (
    <div className={showHideClassName}>
      <div className="gatewayFrameContainer2">
        <div className="gatewayFrame">
          <div className="html">
            <div className="body2">
              {/* 2 STYLE LOGIN FORM-HEADER */}
              <div className="brainster-header">
                <div className="brainster-header-container">
                  <div className="brainster-logo-container">
                    <img
                      src={Logo}
                      useMap="#brainster-logo-map"
                      className="form-logo"
                    />
                    <map className="brainster-logo-map">
                      <area shape="circle" coords="80,10,10" />
                    </map>
                  </div>
                </div>
                <div className="brainster-header-placeholder"></div>
              </div>

              {/* LOGIN FORM */}
              <div className="st-g-wrapper st-loginForm-wrapper">
                <div className="st-loginForm-middleWrapper st-center anim-slideLeft">
                  <h2 className="h2-login">Приклучи се</h2>
                  <div className="st-loginForm-formWrapper">
                    <div>
                      <>
                        <div>
                          <div>
                            <form
                              action=""
                              className="form"
                              onSubmit={handleSubmit}
                              noValidate
                            >
                              {/* FULL NAME */}
                              <div>
                                <div className="st-form-parameterWrapper anim-slideLeft-1">
                                  <label
                                    htmlFor="1"
                                    className="st-sub-secondary"
                                  >
                                    Име и презиме
                                  </label>
                                  <div className="st-inputWithIcon-wrapper st-inputType-1">
                                    <input
                                      name="fullName"
                                      value={fullName}
                                      onChange={handleFormData}
                                      autoCapitalize="off"
                                      placeholder="Задолжително"
                                      type="text"
                                      className="textbox input_default"
                                      id="1"
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* NUMBER INPUT */}
                              <div>
                                <div className="st-form-parameterWrapper anim-slideLeft-2">
                                  <label
                                    htmlFor="5"
                                    className="st-sub-secondary"
                                  >
                                    Број
                                  </label>
                                  <div className="st-inputWithIcon-wrapper st-inputType-5">
                                    <input
                                      className="textbox input_default"
                                      autoCapitalize="off"
                                      onChange={handleFormData}
                                      id="5"
                                      type="number"
                                      required
                                      placeholder="Задолжително"
                                      name="number"
                                      value={number}
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* COMPANY NAME */}
                              <div>
                                <div className="st-form-parameterWrapper anim-slideLeft-1">
                                  <label
                                    htmlFor="2"
                                    className="st-sub-secondary"
                                  >
                                    Име на компанија
                                  </label>
                                  <div className="st-inputWithIcon-wrapper st-inputType-2">
                                    <input
                                      name="companyName"
                                      value={companyName}
                                      onChange={handleFormData}
                                      autoCapitalize="off"
                                      placeholder="Незадолжително"
                                      type="text"
                                      className="textbox input_default"
                                      id="1"
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* TEXTAREA */}
                              <div>
                                <div className="st-form parameterWrapper anim-slideLeft-2">
                                  <div>
                                    <label
                                      className="st-sub-secondary"
                                      htmlFor="5"
                                    >
                                      Предлог за соработка
                                    </label>
                                    <div className="st-inputWithIcon-wrapper st-inputType-6">
                                      <textarea
                                        className="textbox input_default"
                                        autoCapitalize="off"
                                        onChange={handleFormData}
                                        rows="10"
                                        cols="30"
                                        maxLength="300"
                                        id="6"
                                        type="text"
                                        placeholder="Во 300 карактери, опишите зошто сакате да соработуваме"
                                        name="textarea"
                                        value={comments}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>

                          {/* SUBMIT BUTTON */}

                          <div className="st-submitContainer st-center">
                            <brainster-button>
                              <div className="st-buttonLoadingWrapper">
                                <div className="st-submitContainer st-center">
                                  <brainster-button>
                                    <div className="st-buttonLoadingWrapper">
                                      <button
                                        onClick={hideModal2}
                                        className="btn submit"
                                        type="submit"
                                        id="gw_login_06_sign_in"
                                      >
                                        ИСПРАТИ ФОРМА
                                      </button>
                                    </div>
                                  </brainster-button>
                                </div>
                              </div>
                            </brainster-button>
                          </div>
                        </div>
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-close">
        <span className="icon-gocss-close" onClick={hideModal2}></span>
      </div>
      <div className="modal-overlay"></div>
    </div>
  );
};

export default PartnerUpForm;
