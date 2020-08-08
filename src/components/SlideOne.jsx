import React, { Component } from "react";
import "../assets/slideOne.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SlideOne extends Component {
  state = {};
  render() {
    return (
      <div className="container-bg-first">
        <div className="row">
          {/* <div className="col-6">
            <div className="row">
              <div className="col-6"></div>
            </div>
          </div>
          <div className="col-6">
            <img
              className="w100"
              src={require("../assets/slide one img.jpg")}
              alt=""
            ></img> */}
          {/* </div> */}

          {/* <div class="col order-3-sm comment order-xl-0 text-center">
            <p className="hey-there ">
              Hey you there !!!!<br></br>Chillll, Relaxxx <br></br>Explore our
              page first
            </p>
          </div>
          <div class="col order-sm-4 order-1">Scroll Down icon</div>

          <div class="col order-sm-1">
            <div className="col-11 card-custom-class">
              <h1 className="text-sixth-card-4 mt-5">
                Welcome to Barai Studios
              </h1>
            </div>
          </div>
          <div class="col order-sm-2">
            <img
              className="w100 image-slide-one"
              src={require("../assets/slide one img.jpg")}
              alt=""
            ></img>{" "}
          </div> */}

          <div className="col-6">
            <div class="d-flex flex-column bd-highlight mb-3">
              <div class="p-2 bd-highlight">
                <div className="bubble-chat-container">
                  <p className="hey-there ">
                    Hey you there !!!!<br></br>Chillll, Relaxxx <br></br>Explore
                    our page first
                  </p>
                </div>
              </div>
              <div class="p-2 bd-highlight">
                <div className="arrow-container row">
                  <div className="col-6">
                    <p className="scroll-down-text">scroll down</p>
                  </div>
                  <div className="col-6">
                    <FontAwesomeIcon
                      className="arrow-class"
                      icon="long-arrow-alt-down"
                      size="10x"
                      fixedWidth
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="d-flex flex-column bd-highlight mb-3">
              <div class="p-2 bd-highlight">
                <div className="welcome-banner">
                  <p className="welcome-to-text">WELCOME TO </p>
                  <h1 className="barai-studio-text">Barai Studios</h1>
                </div>
              </div>
              <div class="p-2 bd-highlight">
                <div className="image-container">
                  <img
                    className="img-fluid image-slide-one"
                    src={require("../assets/slide one img.jpg")}
                    alt=""
                  ></img>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideOne;
