import React, { Component } from "react";
import "./Recipe.css";
import "../../App.css";
import Navbar from "../Subcomponent/Nav";
import { Link } from "react-router-dom";
export default class EditRecipe extends Component {
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
          <div className="Description">
            <textarea id="description" rows="3" cols="80">
              Description Information
            </textarea>
          </div>
          <div className="Ingredients">
            <div id="temp">
              Ingredient:
              <input type="text" id="ingredient" value="text" />
              Amount:
              <input type="text" id="amount" value="text" />
            </div>

            <div id="newingredient">
              <a href="newingredient">
                <Link to="/recipe">edit</Link>
              </a>
            </div>
          </div>
          <div className="Instructions">
            <textarea id="info" rows="3" cols="80">
              Instruction Information
            </textarea>
          </div>
        </div>
      </div>
    );
  }
}
