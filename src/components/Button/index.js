import React from 'react';

import './index.css';

const Button = ({ text, type = 'button' }) => (
  <button className="button" type={type}>{text}</button>
);

export default Button;
