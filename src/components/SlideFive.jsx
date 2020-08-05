import React, { Component } from "react";
import "../assets/slideFive.css";
class SlideFive extends Component {
  state = {};
  render() {
    return (
      <div className="container-bg-fifth">
        <div className="row">
          <div className="col-4">
            <img
              className="img-fluid image-fifth"
              src={require("../assets/slide fifth.png")}
              alt=""
            ></img>
          </div>
          <div className="col-7 ">
            <video
              className="video-player"
              //   src="https://r1---sn-h5mpn-30ak.googlevideo.com/videoplayback?expire=1596628135&ei=R0gqX6yNDpim1gLJqpXQBQ&ip=212.40.116.27&id=o-APSEGQXQrR5sa1Wk_C3KhJpW_DvxRz2xy25TWs2ZyX5u&itag=22&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=258.716&lmt=1595163301276670&fvip=1&fexp=23883098&beids=9466586&c=WEB&txp=6216222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAIXOk68WygXU-L6MEBFmuIY9N19GfxmUILZBZnkFkQuEAiAR11QM7IZI6jq17S-79NzSWM3POHc3gVfTIsvHeIkXlg%3D%3D&title=Apa+itu+BARAI+STUDIOS%3F%3F%3F+KENAPA+BARAI%3F&cms_redirect=yes&mh=95&mip=113.210.109.20&mm=31&mn=sn-h5mpn-30ak&ms=au&mt=1596606525&mv=m&mvi=1&pcm2cms=yes&pl=22&lsparams=mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRQIgGxu-RUDE9rFEX167qXRFfZf6QUbQYMCnFGqF0fk-RbECIQCJhxew2VgNNAM236CIZqn-83VR0zep8iYwqIGVO7GV1A%3D%3D"
              width="1080"
              height="480"
              controls="controls"
              autoplay="false"
            />

            <div className="row text-center mt-5">
              <div className="col-2 ">
                <div className="col-10 rectangle"></div>
              </div>
              <div className="col-2 ">
                <div className="col-10 rectangle"></div>
              </div>
              <div className="col-2">
                <div className="col-10 rectangle"></div>
              </div>
              <div className="col-2">
                <div className="col-10 rectangle"></div>
              </div>
              <div className="col-2">
                <div className="col-10 rectangle"></div>
              </div>
              <div className="col-2">
                <div className="col-10 rectangle"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1"></div>
      </div>
    );
  }
}

export default SlideFive;
