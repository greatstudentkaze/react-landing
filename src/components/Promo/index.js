import React from 'react';

import './index.css';
import Header from '../Header';
import Button from '../Button';

const Promo = () => (
  <section className="promo">
    <div className="promo__container container">
      <div className="promo__header">
        <Header />
      </div>
      <h1 className="promo__title">Заголовок c&nbsp;уникальным торговым предложение по&nbsp;системе 4U</h1>
      <p className="promo__description">
        Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему.
      </p>
      <Button text="Подробнее" />
    </div>
  </section>
);

export default Promo;
