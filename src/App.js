import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Questions from './Questions/Questions';

function App() {
  return (
    <div className="App">
      <Footer />
      <React.StrictMode>
      <Questions />
      </React.StrictMode>
    </div>
  );
}

export default App;
