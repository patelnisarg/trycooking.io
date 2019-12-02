import React, { Component, useState } from "react";
import bannerImg from "../../Images/banner.png";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../../App.css";
import "./Login.css";
import '../../lib/apiMethods.js';
import { post } from "../../lib/apiMethods.js";

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

    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirm
    );
  }

  handleSubmit(event) {
    var username = this.state.username;
    var email = this.state.email;

    if (email !== username) {
      alert('Usernames do not match');
      return;
    }
    var password = this.state.password;
    var confirm = this.state.confirm;

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    post('http://localhost:3001/api/newUser',
      {
        username: username,
        password: password
      },
      (x) => {
        if (x.success) {
          alert('New User Created.\nPlease log in from the main page.');
          this.props.history.push('/');
        }
        else {
          alert('That user already exists. Please select a different username');
        }
      }
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <div className="main">
        <img src={bannerImg} className="Banner-Component" alt="banner" />
        <h2>Sign Up</h2>
        <div>
          <form className="login">
            <div>
              <div className='row center-boxes'>
                <FormGroup controlID="usernameLabel" bsSize="large">
                  Username
                      <br />
                  <FormControl
                    autoFocus
                    className='form-input margin-20'
                    id="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup controlID="email" bsSize="large">
                  RE:Username
                      <br />
                  <FormControl
                    className='form-input margin-20'
                    id='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </div>
              <div className='row center-boxes'>
                <FormGroup constrolID="password" bsSize="large">
                  Password
                    <br />
                  <FormControl
                    className='form-input margin-20'
                    id='password'
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup contrplID="confirm" bsSize="large">
                  Re:Password
                    <br />
                  <FormControl
                    className='form-input margin-20'
                    id='confirm'
                    type="password"
                    value={this.state.confirm}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </div>
            </div>
            <div>
              <FormGroup contrplID="submit" bsSize="large">
                <Button className='form-input form-button' onClick={this.handleSubmit}>Register</Button>
              </FormGroup>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
