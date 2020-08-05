import React, { Component } from "react";
import "../assets/components.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-color navbar-expand-sm navbar-dark ">
        <div className="col-1"></div>
        <div className="container col-10">
          <div className="navbar-collapse collapse w-100 order-0 ">
            <a className="navbar-brand" href="/">
              <img
                src={require("../assets/logo.svg")}
                className="logo-class d-inline-block align-top "
                alt=""
              ></img>
            </a>
            <a className="navbar-brand" href="/">
              <img
                className="barai-logo-word w-50 align-top "
                src={require("../assets/logo_barai-studios.png")}
                alt=""
              ></img>
            </a>
          </div>

          <div className="navbar-collapse collapse w-100 order-2">
            <ul className="navbar-nav ">
              <li className="nav-item active nav-item-class">
                <a className="nav-link nav-item-class" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item  nav-item-class">
                <a className="nav-link" href="/">
                  Projects
                </a>
              </li>
              <li className="nav-item  nav-item-class">
                <a className="nav-link" href="/">
                  Case Study
                </a>
              </li>
              <li className="nav-item  nav-item-class">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1"></div>
      </nav>
    );
  }
}

export default Navbar;
