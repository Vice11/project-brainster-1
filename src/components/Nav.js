import React, { Component } from "react";
import Logo from "../brainster_space_logo.svg";
import LogInForm from "../components/Form/LogInForm";
import Button from "../components/Button/Button";
import { NavLink } from "react-router-dom";
import PartnerUpForm from "./Form/PartnerUpForm";
import ReorderIcon from "@material-ui/icons/Reorder";
import Reorder from "@material-ui/icons/Reorder";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      showLinks: false,
      fullName: "",
      password: "",
      companyName: "",
      number: "",
      comments: "",
      name: "",

      // menuItems: [
      //   {
      //     title: "SPACE БЛОГ",
      //     url: "/",
      //     className: "nav-links",
      //   },
      //   {
      //     title: "НАСТАНИ",
      //     url: "/",
      //     className: "nav-links",
      //   },
      //   {
      //     title: "CO-WORKING",
      //     url: "/",
      //     className: "nav-links",
      //   },
      //   {
      //     title: "АКАДЕМИИ",
      //     url: "/Academies",
      //     className: "nav-links",
      //   },
      //   {
      //     title: "ПРОСТОР ЗА НАСТАНИ",
      //     url: "/EventSpace",
      //     className: "nav-links",
      //   },
      //   {
      //     title: "ПАРТНЕРИ",
      //     url: "/PartnerUpForm",
      //     className: "nav-links",
      //   },
      // ],
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  showModal2 = () => {
    this.setState({ show2: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  hideModal2 = () => {
    this.setState({ show2: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleFormData = (e) => {
    const name = e.target.name,
      value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  toggleNav = () => {
    this.setState({ showLinks: !this.state.showLinks });
  };

  render() {
    const { showLinks } = this.state;

    return (
      <nav className="Nav">
        <div className="left-side">
          <div className="logo-icon">
            <a href="/">
              <img src={Logo} />
            </a>
          </div>
          <div
            className="links"
            aria-expanded="true"
            id={showLinks ? "hidden" : ""}
          >
            <a href="">SPACE БЛОГ</a>
            <a href="">НАСТАНИ</a>
            <a href="">CO-WORKING</a>
            <a href="/Academies">АКАДЕМИ</a>
            <a href="/EventSpace">ПРОСТОР ЗА НАСТАНИ</a>
            <a href="#" onClick={this.showModal2}>
              ПАРТНЕРИ
            </a>
          </div>
          <button className="burger-icon" onClick={this.toggleNav}>
            <Reorder className="reorder-icon" />
          </button>
        </div>
        <div className="right-side">
          <Button className="login-button" showModal={this.showModal}>
            + Најави се
          </Button>
        </div>

        {/* <nav className="navItems">
          <div className="logo-icon">
            <a href="/">
              <img src={Logo} />
            </a>
          </div>

          <ul className="nav-menu" id={showLinks ? "hidden" : ""}>
            <li>
              <NavLink to="#" className="nav-links">
                SPACE БЛОГ
              </NavLink>
              <NavLink to="#" className="nav-links">
                НАСТАНИ
              </NavLink>
              <NavLink to="#" className="nav-links">
                CO-WORKING
              </NavLink>
              <NavLink to="/Academies" className="nav-links">
                АКАДЕМИИ
              </NavLink>
              <NavLink to="/EventSpace" className="nav-links">
                ПРОСТОР ЗА НАСТАНИ
              </NavLink>
              <NavLink onClick={this.showModal2} to="#" className="nav-links">
                ПАРТНЕРИ
              </NavLink>
            </li> */}
        {/* <button>Open</button> */}
        {/* {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    // onClick={this.showModal2}
                    className={item.className}
                    to={item.url}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })} */}
        {/* </ul>
          {
            <Button className="login-button" showModal={this.showModal}>
              + Најави се
            </Button>
          }
        </nav> */}

        <LogInForm
          show={this.state.show}
          hideModal={this.hideModal}
          handleSubmit={this.handleSubmit}
          handleFormData={this.handleFormData}
          fullName={this.state.fullName}
          password={this.state.password}
        ></LogInForm>

        <PartnerUpForm
          show2={this.state.show2}
          hideModal2={this.hideModal2}
          handleSubmit={this.handleSubmit}
          handleFormData={this.handleFormData}
          fullName={this.state.fullName}
          companyName={this.state.companyName}
          number={this.state.number}
          comments={this.state.comments}
        />
      </nav>
    );
  }
}

export default Nav;
