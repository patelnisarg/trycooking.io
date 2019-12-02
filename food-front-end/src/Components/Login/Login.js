import React, { Component } from "react";
import bannerImg from "../../Images/banner.png";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../../App.css";
import "./Login.css";
import { post } from "../../lib/apiMethods.js";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  handleChange (event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  
  handleSubmit (event) {
    event.preventDefault();
    var username = this.state.username;
    var password = this.state.password;
    post('http://localhost:3001/api/login',
      {
        username: username,
        password: password
      },
      (x) => {
        if (x.success) {
          alert('login successfull');
          this.props.history.push('/');
        }
        else {
          alert('Incorrect username or Password');
        }
      }
    );
    //alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <div id="main">
        <img src={bannerImg} className="Banner-Component" alt="banner" />
        <div id="parent">
          <form onSubmit={this.handleSubmit} classname="login">
            <FormGroup controlId="username" bsSize="large">
              Username
              <FormControl
                autoFocus
                className="form-input margin-20"
                type="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              Password
              <FormControl
                className="form-input margin-20"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}
