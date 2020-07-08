import React, { useState, useEffect } from 'react';
import './Loading.css';

const Loading = () => {
  const [icon, setIcon] = useState('brigadeiro');

  useEffect(() => {
    const icons = ['brigadeiro', 'lasanha', 'cereja', 'sushi', 'vinho'];
    const interval = setInterval(() => {
      setIcon(icons[parseInt(Math.random() * (5))]);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="spinner">
      <img className="loading" src={require(`./icons/${icon}.png`)} alt="icone de uma comida" />
    </div>
  );
};

export default Loading;
