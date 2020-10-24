import React from 'react';

import './index.css';

import Copyright from '../Copyright';
import Phone from '../Phone';

const Footer = () => (
  <footer className="page-footer">
    <div className="page-footer__container container">
      <div className="page-footer__copyright">
        <Copyright />
      </div>
      <p className="page-footer__developer">
        Сделано <a className="page-footer__developer-link" href="https://greatstudentkaze.ru">"ВАШЕ ИМЯ"</a>
      </p>
      <Phone />
    </div>
  </footer>
);

export default Footer;
