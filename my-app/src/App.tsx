import React from 'react';
import logo from './logo.svg';
import './App.css';

// import comps
import SearchBar from './sections/searchBar';
import Main from './sections/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
      </header>
      <body id='App-body'>
        <Main/>
      </body>
    </div>
  );
}

export default App;
