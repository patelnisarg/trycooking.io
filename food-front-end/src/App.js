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
  console.log("Test")
  call('http://localhost:3001/api/ping', (x) => console.log('ping: ' + JSON.stringify(x)));
  call('http://localhost:3001/api/open', (x) => console.log('response: ' + JSON.stringify(x)));
}

function call(apiMethod, func){
  fetch(apiMethod).then((x) => x.json().then(func));
}

export default App;
