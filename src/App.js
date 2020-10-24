import React from 'react';

import './css/normalize.css';
import './css/fonts.css';
import './css/index.css';

import Promo from './components/Promo';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Promo />
      <Advantages />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
