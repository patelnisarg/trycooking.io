import React, { Component } from "react";
import "./Recipe.css";
import "../../App.css";
import EditRecipe from "./EditRecipe";
import Navbar from "../Subcomponent/Nav";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
export default class Recipe extends Component {
  render() {
    return (
      <div className="main">
        <Router>
          <Switch>
            <Route path="/recipe">
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
                      <div id="edit">
                        <a href="edit">
                          <Link to="/editrecipe">edit</Link>
                        </a>
                      </div>
                      <button class="button button2">new</button>
                    </p>
                  </center>
                </div>
                <div className="Description">Description Information</div>
                <div className="Ingredients">Ingredient Information</div>
                <div className="Instructions">Intruction Information</div>
              </div>
            </Route>
            <Route
              path="/editrecipe"
              render={props => <EditRecipe {...props} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
