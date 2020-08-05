import React, { Component } from "react";
import "../assets/slideTwo.css";

class SlideTwo extends Component {
  state = {};
  render() {
    return (
      <div className="container-bg">
        <div className="row image-row text-center my-50">
          <div className="col-8 nopadding float-left">
            <img
              className="image-1  "
              src={require("../assets/slide two - 1.png")}
              alt=""
            />
          </div>

          <div className="col-4 nopadding  float-left">
            <img
              className="image-2 "
              src={require("../assets/slide two - 2.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SlideTwo;
