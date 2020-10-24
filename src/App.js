import React from 'react';

import './css/normalize.css';
import './css/fonts.css';
import './css/index.css';

import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Advantages />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
