import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import SlideOne from "./components/SlideOne";
import SlideTwo from "./components/SlideTwo";
import SlideThree from "./components/SlideThree";
import SlideFour from "./components/SlideFour";
import SlideFive from "./components/SlideFive";
import SlideSix from "./components/SlideSix";
import "./components/FontAwesome";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <SlideOne></SlideOne>

      <SlideTwo></SlideTwo>

      <SlideThree></SlideThree>
      <SlideFour></SlideFour>
      <SlideFive></SlideFive>
      <SlideSix />
    </div>
  );
}

export default App;
