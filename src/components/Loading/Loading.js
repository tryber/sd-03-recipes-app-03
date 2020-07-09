import React, { useState, useEffect } from 'react';
import './Loading.css';
import brigadeiro from './icons/brigadeiro.png';
import lasanha from './icons/lasanha.png';
import vinho from './icons/vinho.png';
import cereja from './icons/cereja.png';
import sushi from './icons/sushi.png';

const Loading = () => {
  const [icon, setIcon] = useState('brigadeiro');

  useEffect(() => {
    const icons = [brigadeiro, lasanha, cereja, sushi, vinho];
    const interval = setInterval(() => {
      setIcon(icons[parseInt(Math.random() * (4), 10)]);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="spinner">
      <img className="loading" src={icon} alt="icone de uma comida" />
    </div>
  );
};

export default Loading;
