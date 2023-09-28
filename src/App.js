import React, { useState, useEffect } from 'react';
import Title from './components/Title'
import Nav from './components/Nav'
import Article from './components/Article';
import Image from './../src/img/upward-arrow_2268143.png'


function App() {

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonValue) => {
    setSelectedButton(buttonValue);
  };

  useEffect(() => {
    const backToTop = document.querySelector('#backToTop');

    const handleScroll = () => {
      // Add the "show" class when scrolled down 400 pixels or more, remove it otherwise
      if (window.scrollY > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <Title />
      <div className="page">
        <Nav onButtonClick={handleButtonClick} />
        <Article selectedButton={selectedButton} />
      </div>
      <footer id="backToTop">
        <a href='#HautDePage'><img src={Image} alt="icone pour revenir en haut de page" className='img-retour-haut-de-page' /></a>
      </footer>
    </main>
  );
}

export default App;

