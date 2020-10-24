import React from 'react';

import './index.css';
import logo from '../../images/logo.svg';

const Logo = () => (
  <p className="logo">
    <img className="logo__img" src={logo} width="68" height="68" alt="Логотип компании" />
  </p>
);

export default Logo;
