import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ClickMe from './ClickMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br /><br />
        <p>Hello world</p>
        <ClickMe />
      </header>
    </div>
  );
}

export default App;
