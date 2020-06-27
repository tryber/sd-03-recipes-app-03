import React from 'react';
import { Link } from 'react-router-dom';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import drinkIcon from '../../images/drinkIcon.svg';
import './Footer.css';

function renderIconToRote(rote, icon) {
  return (
    <Link to={`/${rote}`}>
      <div>
        <img className="icon-footer" src={icon} alt={icon} />
      </div>
    </Link>
  );
}

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        {renderIconToRote('bebidas', drinkIcon)}
        {renderIconToRote('explorar', exploreIcon)}
        {renderIconToRote('comidas', mealIcon)}
      </div>
    </div>
  );
}
