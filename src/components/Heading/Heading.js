
import React from 'react';
import PropTypes from 'prop-types';
import './Heading.css';
import chef from './chef.svg';

const Heading = ({ title }) => (
  <div className="heading-container">
    <h1 className="title">{title}</h1>
    <div>
      <img className="personal-icon" src={chef} alt="icone de um chef" />
    </div>
  </div>
);

Heading.propTypes = { title: PropTypes.string.isRequired };

export default Heading;
