import React, { Component } from "react";
import "./Profile.css";
import "../../App.css";
import bannerImg from "../../Images/banner.png";
import profilepic from "../../Images/profile.jpg";
export default class Profile extends Component {
  render() {
    return (
      <div>
        <img src={bannerImg} className="Banner-Component" alt="banner" />
        <canvas id="canvasbox" />
        <div class="card">
          <img src={profilepic} alt="ProPic" />
          <h1>Jizhou Zhang</h1>
          <p>
            My name is Jizhou. I am a highly-skilled programming cook. The
            greatest in the universe.
          </p>
        </div>
      </div>
    );
  }
}
