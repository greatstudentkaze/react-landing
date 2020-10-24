import React from 'react';

import './index.css';
import Advantage from '../Advantage';

const Advantages = () => {
  const advantagesList = [
    'Первое целевое преимущество',
    'Второе целевое преимущество',
    'Третье целевое преимущество',
    'четвертое целевое преимущество',
  ];

  const advantages = advantagesList.map((advantage, i) =>
    <Advantage key={i} advantage={advantage} number={i + 1} />
  );

  return (
    <section className="advantages container">
      <h2 className="advantages__title">Уникальный заголовок для преимущества компании</h2>
      <div className="advantages__about">
        <h3 className="advantages__label">О нас</h3>
        <p className="advantages__text">
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить.
        </p>
      </div>
      <ul className="advantages__list">
        {advantages}
      </ul>
    </section>
  );
};

export default Advantages;
