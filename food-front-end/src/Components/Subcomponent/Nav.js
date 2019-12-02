import "./Nav.css";
import bannerImg from "../../Images/banner.png";
import React, { Component } from "react";
import Home from "../Home/Home";
import { Link } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <header>
        <div>
          <div className="center">
            <img src={bannerImg} className="Banner-Component" alt="banner" />
          </div>
          <p className="log">
            <a href="Login">
              <Link to="/login">Login</Link>
            </a>
            <a href="Sign Up">
              <Link to="/signup">Sign Up</Link>
            </a>
          </p>
        </div>
        <div className="Nav">
          <ul>
            <li>
              <a href="Home URL">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a href="Recipe URL">
                <Link to="/recipe">Recipe</Link>
              </a>
            </li>
            <li>
              <a href="Creators URL">
                <Link to="/profile">Creators</Link>
              </a>
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
