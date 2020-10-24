import React from 'react';

import './index.css';

import Copyright from '../Copyright';

const Footer = () => (
  <footer className="page-footer">
    <div className="page-footer__container container">
      <div className="page-footer__copyright">
        <Copyright />
      </div>
      <p className="page-footer__developer">
        Сделано
        {' '}
        <a className="page-footer__developer-link" href="https://greatstudentkaze.ru">"ВАШЕ ИМЯ"</a>
      </p>
      <p className="page-footer__contact">
        <a className="page-footer__tel" href="tel:+79999991234">+7 (999) 999 - 1234</a>
        <a className="page-footer__contact-link" href="/">Перезвоните мне</a>
      </p>
    </div>
  </footer>
);

export default Footer;
