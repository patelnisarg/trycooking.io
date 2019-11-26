import React, { Component } from "react";
import bannerImg from "../../Images/banner.png";
import "../../App.css";
import "./Home.css";
import Navbar from "../Subcomponent/Nav";
import Slide from "./Slideshow";
import hamburgerImg from "./../../Images/hamburger.jpg";
/*import slide1 from "../../Images/slide1.jpg";
import slide2 from "../../Images/slide2.jpg";
import slide3 from "../../Images/slide3.jpg";
import Slideshow from "./Sildeshow";*/
const s = {
  container: "screenW screen H dGray col",
  main: "flex8 white"
};
/*const slides = [slide1, slide2, slide3];*/
export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className={s.container}>
          <div className={s.main}>
            <Slide />
          </div>
        </div>
        <div className="sec1">
          <button>
            <img src={hamburgerImg} />
          </button>
          <button>
            <img src={hamburgerImg} />
          </button>
          <button>
            <img src={hamburgerImg} />
          </button>
        </div>
        <div className="sec3">
          <button>
            <img src={hamburgerImg} />
          </button>
          <button>
            <img src={hamburgerImg} />
          </button>
          <button>
            <img src={hamburgerImg} />
          </button>
        </div>
      </div>
    );
  }
}
