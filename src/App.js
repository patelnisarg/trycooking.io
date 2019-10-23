import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/SingUp";
import Profile from "./Components/Profile/Profile";
class App extends Component {
  /* fetch('http://localhost:3001/api/ping');
  fetch('http://localhost:3001/api/open').then((x) => console.log(x.json()));*/
  render() {
    return (
      <div>
        <Signup />
      </div>
    );
  }
}

export default App;
