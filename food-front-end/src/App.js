import React from 'react';
import logo from './logo.svg';
import './App.css';
//import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={test}>Test</button>
      </header>
    </div>
  );
}

function test(){
  call(
    'http://localhost:3001/api/ping', 
    (x) => console.log('ping: ' + JSON.stringify(x))
  );

  post(
    'http://localhost:3001/api/open', 
    {id: -1},
    (x) => console.log('open: ' + JSON.stringify(x))
  );

  post(
    'http://localhost:3001/api/save', 
    {
      id: -1, 
      recipe: 
      {
        name: "foo",
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
