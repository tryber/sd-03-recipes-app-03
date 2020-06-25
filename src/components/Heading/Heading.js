import React from 'react';
import './Heading.css';
import woman from './mulher.svg';
import man from './pessoa.svg';

const Heading = ({ title }) => (
  <div className="heading-container">
    <h1>{title}</h1>
    <div>
      <img className="personal-icon" src={woman} alt="icone de um homem" />
      <img className="personal-icon" src={man} alt="icone de uma mulher" />
    </div>
  </div>
);

export default Heading;
