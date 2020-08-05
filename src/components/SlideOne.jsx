import React, { Component } from "react";
import "../assets/slideOne.css";

class SlideOne extends Component {
  state = {};
  render() {
    return (
      <div className="container-bg-first">
        <img
          className="w100"
          src={require("../assets/slide one.png")}
          alt=""
        ></img>
      </div>
    );
  }
}

export default SlideOne;
