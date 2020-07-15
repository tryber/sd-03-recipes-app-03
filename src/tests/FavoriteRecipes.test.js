import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithContext from './utilitiesTest/renderWithContext';
import LocalStorage from './utilitiesTest/LocalStorage';
import FavoriteRecipes from '../pages/FavoriteRecipes/FavoriteRecipes';

localStorage = new LocalStorage();

const favoriteRecipes = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot:  'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  },
];

describe('Testing Drink Main Page', () => {
  afterEach(() => cleanup());
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  });

  test('Testing localStorage favorite recipes', () => {
    expect(JSON.parse(localStorage.getItem('favoriteRecipes'))).toEqual(favoriteRecipes);
  });

  test('Testing disfavor button', () => {
    const { getByTestId } = renderWithContext(<FavoriteRecipes />, '/receitas-favoritas');
    const favorited = [{
      id: '178319',
      type: 'bebida',
      area: '',
      category: 'Cocktail',
      alcoholicOrNot:  'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    }];
    const blackHeart = getByTestId('0-horizontal-favorite-btn');
    fireEvent.click(blackHeart);
    expect(JSON.parse(localStorage.getItem('favoriteRecipes'))).toEqual(favorited);
  });

  test('Testing localStorage iniciation', () => {
    localStorage.clear();
    renderWithContext(<FavoriteRecipes />, '/receitas-favoritas');
    expect(JSON.parse(localStorage.getItem('favoriteRecipes'))).toEqual([]);
  });
});
