import "./Nav.css";
import bannerImg from "../../Images/banner.png";
import React, { Component } from "react";
import Home from "../Home/Home";
import { Link } from "react-router-dom";
export default class search extends Component {
  render() {
    return (
      <div>
        <div id="temp">
          Ingredient:
          <input type="text" id="ingredient" value="text" />
          Amount:
          <input type="text" id="amount" value="text" />
        </div>
        <input type="button" id="newingredient" value="New" />
      </div>
    );
  }
}
