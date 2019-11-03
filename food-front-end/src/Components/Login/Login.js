import React, { Component } from "react";
import bannerImg from "../../Images/banner.png";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../../App.css";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div id="parent">
        <img src={bannerImg} className="Banner-Component" alt="banner" />
        <form onSubmit={this.handleSubmit} id="login">
          <FormGroup controlId="username" bsSize="large">
            Username
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            Password
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button>Submit</Button>
        </form>
      </div>
    );
  }
}
