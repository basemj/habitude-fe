import { fetch } from 'whatwg-fetch';
import React from 'react';
import './App.css';

function App() {
  const fetchSomeData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => console.table(json));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={fetchSomeData}>fetch data</button>
      </header>
    </div>
  );
}

export default App;
