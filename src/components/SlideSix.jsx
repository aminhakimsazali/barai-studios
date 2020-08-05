import React, { Component } from "react";
import "../assets/slideSix.css";

class SlideSix extends Component {
  state = {};
  render() {
    return (
      <div className="container-bg-six">
        <div className="row">
          <div className="col-4">
            <img
              className="img-fluid image-six"
              src={require("../assets/slide six.png")}
              alt=""
            ></img>
          </div>

          <div className="col-8 row-spacing">
            <div className="row text-center mb-3">
              <div className="col-5 ">
                <div className="col-11 card-custom-class">
                  <img
                    className="w100 pt-3"
                    src={require("../assets/icon-insta.svg")}
                    alt=""
                  ></img>
                  <h1 className="text-sixth-card-1 mt-3">@baraistudios</h1>
                </div>
              </div>
              <div className="col-5 ">
                <div className="col-11 card-custom-class">
                  <img
                    className="w100 pt-3"
                    src={require("../assets/icon-ws.svg")}
                    alt=""
                  ></img>
                  <h1 className="text-sixth-card-2 mt-5">Click Me</h1>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-5 ">
                <div className="col-11 card-custom-class">
                  <img
                    className="w100 pt-3"
                    src={require("../assets/icon-phone.svg")}
                    alt=""
                  ></img>
                  <h1 className="text-sixth-card-3 mt-3">011-17684057</h1>
                </div>
              </div>
              <div className="col-5 ">
                <div className="col-11 card-custom-class">
                  <img
                    className="w100 pt-3"
                    src={require("../assets/icon-mail.svg")}
                    alt=""
                  ></img>
                  <h1 className="text-sixth-card-4 mt-5">
                    baraistudios@gmail.com
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright ">
          <h4 className="word-copyright pt-3">
            Copyright © All rights reserved. Barai Studios Sdn Bhd (000000-M)
          </h4>
        </div>
      </div>
    );
  }
}

export default SlideSix;
