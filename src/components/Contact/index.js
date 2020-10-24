import React from 'react';

import './index.css';

const Contact = () => (
  <section className="contact">
    <div className="contact__container">
      <h2 className="contact__title">Остались вопросы?</h2>
      <p className="contact__info">Оставьте номер телефона, и&nbsp;мы перезвоним&nbsp;Вам</p>
      <form>
        <p className="contact__form-item">
          <label className="visually-hidden" htmlFor="name">Ваше имя</label>
          <input className="contact__input" type="text" id="name" name="name" placeholder="Ваше имя" />
        </p>
        <p className="contact__form-item">
          <label className="visually-hidden" htmlFor="tel">Телефон</label>
          <input className="contact__input" type="tel" id="tel" name="tel" placeholder="Телефон" />
        </p>
        <p className="contact__form-item">
          <label className="visually-hidden" htmlFor="email">E-mail</label>
          <input className="contact__input" type="email" id="email" name="email" placeholder="E-mail" />
        </p>
        <button className="contact__submit" type="submit">Позвонить мне</button>
        <p className="contact__agreement">
          Я даю своё <a href="/">согласие</a> на&nbsp;обработку моих персональных&nbsp;данных.
        </p>
      </form>
    </div>
  </section>
);

export default Contact;
