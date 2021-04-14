import React from "react";
import "./LogInForm.css";
import Logo from "../images/3.png";

const LogInForm = ({
  show,
  hideModal,
  handleSubmit,
  handleFormData,
  fullName,
  password,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  return (
    <div className={showHideClassName}>
      <div className="gatewayFrameContainer">
        <div className="gatewayFrame">
          <div className="html">
            <div className="body">
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

              {/* LOGIN */}
              <div className="st-g-wrapper st-loginForm-wrapper">
                <div className="st-loginForm-middleWrapper st-center anim-slideLeft">
                  <h2 className="h2-login">Најава</h2>
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
                              <div>
                                <div className="st-form-parameterWrapper anim-slideLeft-1">
                                  <label
                                    htmlFor="1"
                                    className="st-sub-secondary"
                                  >
                                    E-mail адреса
                                  </label>
                                  <div className="st-inputWithIcon-wrapper st-inputType-1">
                                    <input
                                      name="fullName"
                                      value={fullName}
                                      onChange={handleFormData}
                                      autoCapitalize="off"
                                      type="text"
                                      className="textbox input_default"
                                      id="1"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div>
                                {/* PASSWORD INPUT */}
                                <div className="st-form parameterWrapper anim-slideLeft-2">
                                  <div>
                                    <label
                                      className="st-sub-secondary"
                                      htmlFor="5"
                                    >
                                      Лозинка
                                    </label>
                                    <div className="st-inputWithIcon-wrapper st-inputType-5">
                                      <input
                                        className="textbox input_default"
                                        autoCapitalize="off"
                                        onChange={handleFormData}
                                        id="5"
                                        type="password"
                                        required
                                        pattern="^.{6,}$"
                                        name="password"
                                        value={password}
                                        required
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
                                        onClick={hideModal}
                                        className="btn submit"
                                        type="submit"
                                        id="gw_login_06_sign_in"
                                      >
                                        Најава
                                      </button>
                                    </div>
                                  </brainster-button>
                                </div>
                              </div>
                            </brainster-button>
                          </div>
                        </div>
                      </>
                      {/* FORGOT PASSWORD BUTTONS */}

                      <div>
                        <div className="link-container first">
                          <button
                            className="btn btn-secondary"
                            id="brainster_login_registration_reset_paswword_modal"
                          >
                            Заборавена лозинка?
                          </button>
                        </div>
                        {/*  */}
                      </div>
                      <div>
                        {/*  */}
                        <div className="link-container">
                          <button
                            className="btn btn-secondary"
                            id="brainster_login_registration_no_account"
                          >
                            Сè уште не сте регистрирани?
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-close">
        <span className="icon-gocss-close" onClick={hideModal}></span>
      </div>
      <div className="modal-overlay"></div>
    </div>
  );
};

export default LogInForm;
