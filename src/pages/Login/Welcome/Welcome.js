import React from 'react';
import './Welcome.css';
import woman from './mulher.svg';
import man from './pessoa.svg';

const Welcome = () => (
  <div className="welcome-container">
    <h1>Welcome</h1>
    <div>
      <img className="personal-icon" src={woman} alt="icone de um homem" />
      <img className="personal-icon" src={man} alt="icone de uma mulher" />
    </div>
  </div>
);

export default Welcome;
