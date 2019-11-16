import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/SingUp";
import Profile from "./Components/Profile/Profile";
class App extends Component {

  /* fetch('http://localhost:3001/api/ping');
  fetch('http://localhost:3001/api/open').then((x) => console.log(x.json()));*/
  render() {
    test();
    return (
      <div>
        <Signup />
      </div>
    );
  }
}

function test(){
  call(
    'http://localhost:3001/api/ping', 
    (x) => console.log('ping: ' + JSON.stringify(x))
  );
  
  post(
    'http://localhost:3001/api/open', 
    {id: 3},
    (x) => console.log('open: ' + JSON.stringify(x))
  );

  post(
    'http://localhost:3001/api/save', 
    {
      id: -1, 
      auth:{
        username: "RJ",
        password: 'FOO'
      },
      recipe: 
      {
        name: "shit",
        ingrediants: [],
        description: 'This recepe is foo.',
        body: 'Here are the steps for the foo recipe',
        author: 'RJ'
      }
    },
    (x) => console.log('save: ' + JSON.stringify(x))
  );

  post(
    'http://localhost:3001/api/delete', 
    {id: -1},
    (x) => console.log('delete: ' + JSON.stringify(x))
  );
}

function call(apiMethod, func){
  fetch(apiMethod).then((x) => x.json().then(func));
}

function post(apiMethod, data, func){
  fetch(
    apiMethod, 
    {
      method: 'POST', 
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  ).then((x) => x.json().then(func));
}

export default App;
