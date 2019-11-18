import "./Nav.css";
import bannerImg from "../../Images/banner.png";
import React, { Component } from "react";
export default class Nav extends Component {
  render() {
    return (
      <header>
        <div>
          <img src={bannerImg} className="Banner-Component" alt="banner" />
          <p className="log">
            <a href="Login">Login</a> <a href="Sign Up">Sign Up</a>
          </p>
        </div>
        <div className="Nav">
          <ul>
            <li>
              <a href="Home URL">Home</a>
            </li>
            <li>
              <a href="Recipe URL">Recipe</a>
            </li>
            <li>
              <a href="Creators URL">Creators</a>
            </li>
            <li>
              <a href="About us URL">About Us</a>
            </li>
          </ul>
          <div className="Search">
            <form class="search">
              <input
                type="text"
                placeholder="Recipe Search"
                name="search"
              ></input>
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}
