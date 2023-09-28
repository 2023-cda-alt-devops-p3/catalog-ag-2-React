import React, { useState } from 'react';
import Title from './components/Title'
import Nav from './components/Nav'
import Article from './components/Article';
import Footer from './components/Footer';

function App() {

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonValue) => {
    setSelectedButton(buttonValue);
  };

  return (
    <main>
        <Title />
        <div className="page">
          <Nav onButtonClick={handleButtonClick} />
          <Article selectedButton={selectedButton} />
        </div>
      <Footer />
    </main>
  );
}

export default App;
