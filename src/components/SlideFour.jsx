import React, { Component } from "react";
import "../assets/slideFour.css";

class SlideFour extends Component {
  state = {};
  render() {
    return (
      <div className="container-bg-fourth">
        <div className="row text-center">
          <div className="col-6 ">
            <img
              className="image-fourth"
              src={require("../assets/slide fourth.png")}
              alt=""
            />
          </div>
          <div className="col-3 insta-barai card-custom-class px-5">
            <img
              className="w100 pt-3"
              src={require("../assets/icon-insta.svg")}
              alt=""
            ></img>
            <h1 className="text-sixth-card-1 mt-3">@baraistudios</h1>
          </div>
          <div className="col-3 bunny-image">
            <img src={require("../assets/purple bunny.svg")} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default SlideFour;
