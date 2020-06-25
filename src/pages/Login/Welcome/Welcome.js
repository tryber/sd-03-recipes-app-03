import React from 'react';
import './Welcome.css';

const Welcome = () => (
  <div className="welcome-container">
    <h1>Welcome</h1>
    <div>
      <img className="personal-icon" src={require('./pessoa.svg')} alt="icone de um homem"/>
      <img className="personal-icon" src={require('./mulher.svg')} alt="icone de uma mulher"/>
    </div>
  </div>
);

export default Welcome;
