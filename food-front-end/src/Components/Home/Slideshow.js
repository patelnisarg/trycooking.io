import React, { Component } from "react";
import { Fade } from "react-slideshow-image";
import slide1 from "../../Images/slide1.jpg";
import slide2 from "../../Images/slide2.jpg";
import slide3 from "../../Images/slide3.jpg";
import "./Home.css";
const Images = [slide1, slide2, slide3];
const fade = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
};
export default class Slideshow extends Component {
  render() {
    return (
      <div className="slide-container">
        <Fade {...fade}>
          <div className="each-fade">
            <div className="image-container">
              <img className="image-fit" src={Images[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img className="image-fit" src={Images[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img className="image-fit" src={Images[2]} />
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
