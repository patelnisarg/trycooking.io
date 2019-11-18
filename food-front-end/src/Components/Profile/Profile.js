import React, { Component } from "react";
import "./Profile.css";
import "../../App.css";
import Navbar from "../Subcomponent/Nav";
import profilepic from "../../Images/profile.jpg";
import Dropzone from "react-dropzone";
export default class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Dropzone onDrop={this.onDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              Click me to upload a file!
            </div>
          )}
        </Dropzone>
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
