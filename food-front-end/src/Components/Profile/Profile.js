import React, { Component } from "react";
import "./Profile.css";
import "../../App.css";
import Navbar from "../Subcomponent/Nav";
import profilepic from "../../Images/profile.jpg";
import addbutton from "../../Images/plusbutton.jpg";
import Dropzone from "react-dropzone";
export default class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="row">
          <div class="column">
            <Dropzone onDrop={this.onDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} class="drop">
                  <input {...getInputProps()} />
                  <img src={addbutton} alt="PlusButton" />
                </div>
              )}
            </Dropzone>
          </div>
          <div class="column1">
            <canvas id="canvasbox" />
            <div class="card">
              <img src={profilepic} alt="ProPic" />
              <h1>Jizhou Zhang</h1>
              <p>My name is Jizhou.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
