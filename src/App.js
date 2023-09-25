import React, { useState } from 'react';
import './App.css';
import Title from './components/Title'
import Nav from './components/Nav'
import Article from './components/Article';

function App() {

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonValue) => {
    setSelectedButton(buttonValue);
  };

  return (
    <div className="App">
      <Title />
      <div className="page">
        <Nav onButtonClick={handleButtonClick} />
        <section className="section">
          <Article selectedButton={selectedButton} />
        </section>
      </div>
    </div>
  );
}

export default App;
