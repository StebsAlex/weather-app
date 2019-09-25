import React from 'react';
import Weather from './components/Weather/Weather'
import Banner from './components/Banner/Banner'
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="container">
        <Weather />
      </div>
    </div>
  );
}

export default App;
