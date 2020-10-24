import React from 'react';

import './index.css';
import phoneIcon from '../../images/phone.svg';

const Phone = () => (
  <p className="phone">
    <a className="phone__number" href="tel:+79999991234">
      <span>+7 (999) 999 - 1234</span>
      <img src={phoneIcon}  width="68" height="68" alt=""/>
    </a>
    <a className="phone__link" href="/">Перезвоните мне</a>
  </p>
);

export default Phone;
