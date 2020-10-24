import React from 'react';

import './index.css';

const Advantage = ({ advantage, number }) => (
  <li className={`advantage advantage--${number}`}>{advantage}</li>
);

export default Advantage;
