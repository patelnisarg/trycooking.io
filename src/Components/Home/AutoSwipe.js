import React, { Component } from "react";
import hamburgerimg from "../../Images/hamburger.png";
import omletteimg from "../../Images/omlette.png";
import pancakeimg from "../../Images/pancake.png";
export default class AutoSwipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0
    };
  }
  getRandomImageId() {
    const min = 0;
    const max = 3;
    return Math.floor(Math.random() * (max - min)) + min;
  }
  componentDidMount() {
    setInterval(
      (function() {
        this.setState({
          currentImage: this.getRandomImageId()
        });
      })(),
      5000
    );
  }
  render() {
    const image = [hamburgerimg, omletteimg, pancakeimg];
    return (
      <div>
        <img src={image[this.state.currentImage]} />
      </div>
    );
  }
}
