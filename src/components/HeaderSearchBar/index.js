import React from 'react';
import './style.css';

const HeaderSearchBar = () => (
  <div className="search-container">
    <input
      type="text"
      placeholder="Buscar Receita"
      data-testid="search-input"
      className="search-input"
    />
    <label htmlFor="ingredient" className="ingredient-search-label">
      <input
        type="radio"
        data-testid="ingredient-search-radio"
      />
      Ingrediente
    </label>
    <label htmlFor="name" className="name-search-label">
      <input type="radio" data-testid="name-search-radio" />
      Nome
    </label>
    <label htmlFor="first-letter" className="first-letter-search-label">
      <input
        type="radio"
        data-testid="first-letter-search-radio"
      />
      Primeira letra
    </label>
    <button
      type="button"
      data-testid="exec-search-btn"
      className="search-button"
    >
      Buscar
    </button>
  </div>
);

export default HeaderSearchBar;