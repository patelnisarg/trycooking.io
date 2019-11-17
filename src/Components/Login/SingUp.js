import React, { Component } from "react";
import bannerImg from "../../Images/banner.png";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../../App.css";
import "./Login.css";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
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
  render() {
    return (
      <div className="main">
        <img src={bannerImg} className="Banner-Component" alt="banner" />
        <h2>Sign Up</h2>
        <div>
          <form className="login">
            <div className="sec1">
              <FormGroup controlID="firstname" bsSize="large">
                First Name
                <br />
                <FormControl autoFocus value={this.state.first} />
              </FormGroup>
              <FormGroup controlID="lastname" bsSize="large">
                Last Name
                <br />
                <FormControl autoFocus value={this.state.last} />
              </FormGroup>
              <FormGroup controlID="username" bsSize="large">
                Username
                <br />
                <FormControl autoFocus value={this.state.username} />
              </FormGroup>
            </div>

            <div className="sec2">
              <FormGroup controlID="email" bsSize="large">
                Email
                <br />
                <FormControl autoFocus value={this.state.email} />
              </FormGroup>
              <FormGroup constrolID="password" bsSize="large">
                Password
                <br />
                <FormControl autoFocus value={this.state.password} />
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
