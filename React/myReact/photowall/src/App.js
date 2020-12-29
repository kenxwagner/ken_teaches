import React from 'react';
import logo from './logo.svg';
import './App.css';
import car from './images/car.jpg'; // gives image path
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
      </header>
	  <img src={car} alt="this is car image" />
    </div>
  );
}

export default App;
