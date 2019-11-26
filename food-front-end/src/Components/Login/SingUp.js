import React, { Component, useState } from "react";
import bannerImg from "../../Images/banner.png";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../../App.css";
import "./Login.css";
/*const [setNewUser] = useState(null);*/
/*const [setIsLoading] = useState(false);*/
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirm: ""
    };
  }
  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirm
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    /*  setIsLoading(true);
    setIsLoading(false);*/
  }
  render() {
    return (
      <div className="main">
        <img src={bannerImg} className="Banner-Component" alt="banner" />
        <h2>Sign Up</h2>
        <div>
          <form onSubmit={this.handleSubmit} className="login">
            <div className="sec1">
              <FormGroup controlID="username" bsSize="large">
                Username
                <br />
                <FormControl autoFocus value={this.state.username} />
              </FormGroup>
              <FormGroup constrolID="password" bsSize="large">
                Password
                <br />
                <FormControl autoFocus value={this.state.password} />
              </FormGroup>
            </div>
            <div className="sec2">
              <FormGroup controlID="email" bsSize="large">
                Email
                <br />
                <FormControl autoFocus value={this.state.email} />
              </FormGroup>
              <FormGroup contrplID="confirm" bsSize="large">
                Re:Password
                <br />
                <FormControl
                  autoFocus
                  type="password"
                  value={this.state.confirm}
                />
              </FormGroup>
            </div>
            <br />
            <Button>Register</Button>
          </form>
        </div>
      </div>
    );
  }
}
