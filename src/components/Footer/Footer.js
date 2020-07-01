import React from 'react';
import { Link } from 'react-router-dom';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import drinkIcon from '../../images/drinkIcon.svg';
import './Footer.css';

function renderIconToRoute(route, icon, testid) {
  return (
    <Link to={`/${route}`}>
      <div>
        <img
          className="icon-footer"
          src={icon}
          alt={icon}
          data-testid={`${testid}-bottom-btn`}
        />
      </div>
    </Link>
  );
}

export default function Footer() {
  return (
    <div className="footer" data-testid="footer">
      <div className="footer-container">
        {renderIconToRoute('bebidas', drinkIcon, 'drinks')}
        {renderIconToRoute('explorar', exploreIcon, 'explore')}
        {renderIconToRoute('comidas', mealIcon, 'food')}
      </div>
    </div>
  );
}
