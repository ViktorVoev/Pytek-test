import React from 'react';
import './App.css';
import Header from './Header/Header';
import Questions from './Questions/Questions';

function App() {
  return (
    <div className="App">
      <Header />
      <React.StrictMode>
      <Questions />
      </React.StrictMode>
    </div>
  );
}

export default App;
