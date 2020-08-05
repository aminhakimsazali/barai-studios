import React, { Component } from "react";
import "../assets/slideThree.css";

import { Button } from "react-bootstrap";

class SlideThree extends Component {
  state = {};
  render() {
    return (
      <div className="container-bg-three">
        <div className="row">
          <div className="col-4">
            <img
              className="image-1-three"
              src={require("../assets/slide three.png")}
              alt=""
            />
          </div>
          <div className="col-4 text-center">
            <p className="text-center pt-3 web-design-text">Web Design </p>
            <div className="row ">
              <div className="col-1 "></div>
              <div className="col-4  custom-card-class">
                <img
                  className="image-card img-fluid"
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_49310635-e1538423585879.png?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
              <div className="col-1 "></div>
              <div className="col-4  custom-card-class">
                <img
                  className="image-card img-fluid"
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_49310635-e1538423585879.png?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
              <div className="col-2 "></div>
            </div>
            <div className="row">
              <div className="col-1 "></div>
              <div className="col-4  custom-card-class">
                <img
                  className="image-card img-fluid"
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_49310635-e1538423585879.png?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
              <div className="col-1 "></div>
              <div className="col-4  custom-card-class">
                <img
                  className="image-card img-fluid"
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_49310635-e1538423585879.png?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
              <div className="col-2 "></div>
            </div>

            <div className="text-center">
              <Button className="view-more-button">View More</Button>
            </div>
          </div>
          <div className="col-4 text-center">
            <p className="text-center pt-3 web-design-text">
              Brand & Marketing
            </p>
            <div className="row">
              <div className="col-1 "></div>
              <div className="col-4  custom-card-class"></div>
              <div className="col-1 "></div>
              <div className="col-4 custom-card-class"></div>
              <div className="col-2 "></div>
            </div>
            <div className="row">
              <div className="col-1 "></div>
              <div className="col-4  custom-card-class"></div>
              <div className="col-1 "></div>
              <div className="col-4  custom-card-class"></div>
              <div className="col-2 "></div>
            </div>
            <div className="text-center">
              <Button className="view-more-button">View More</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideThree;
