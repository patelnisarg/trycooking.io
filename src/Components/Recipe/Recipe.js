import React, { Component } from "react";
import bannerImg from "../../Images/banner.png";
import "./Recipe.css";
import "../../App.css";
import Navbar from "../Subcomponent/Nav";
export default class Recipe extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        <div className="Information">
          <div className="Picture">
            <center>
              <img
                id="temp"
                src="https://storage.googleapis.com/wp-engine-festivalblog/1/2019/04/burger-time.JPG"
                alt="banner"
              ></img>
            </center>
            <center>
              <p>
                <b>By: Creator</b>
              </p>
            </center>
          </div>
          <div className="Description">Description Information</div>
          <div className="Ingredients">Ingredient Information</div>
          <div className="Instructions">Intruction Information</div>
        </div>
      </div>
    );
  }
}
