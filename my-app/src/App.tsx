import React from 'react';
import logo from './logo.svg';
import './App.css';

// import comps
import SearchBar from './sections/searchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
