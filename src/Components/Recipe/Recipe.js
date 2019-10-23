import React, { Component } from "react";
import bannerImg from "../../Images/banner.png";
export default class Recipe extends Component {
  render() {
    return (
      <div>
        <img src={bannerImg} className="Banner-Component" alt="banner" />
      </div>
    );
  }
}
