import React from 'react';
import { cleanup, waitForDomChange, fireEvent } from '@testing-library/react';
import renderWithContext from './utilitiesTest/renderWithContext';
import mockFetch from './utilitiesTest/mockFetch';
import cocktailDrinks from '../../cypress/mocks/cocktailDrinks';
import drinkCategories from '../../cypress/mocks/drinkCategories';
import drinks from '../../cypress/mocks/drinks';
import Drinks from '../pages/DrinkMainPage/Drinks';

jest.spyOn(window, 'fetch').mockImplementation(mockFetch);

describe('Testing Drink Main Page', () => {
  afterEach(() => cleanup());

  test('testing fetch', async () => {
    const DrinkMainPage = renderWithContext(<Drinks />, '/bebidas');
    await waitForDomChange();
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  });

  test('Testing Drinks Cards', async () => {
    const { getByTestId } = renderWithContext(<Drinks/>, '/bebidas');
    await waitForDomChange();
    for(let index = 0; index < 12; index += 1) {
      const card = getByTestId(`${index}-recipe-card`);
      const cardImg = getByTestId(`${index}-card-img`);
      const cardName = getByTestId(`${index}-card-name`);
      expect(card).toBeInTheDocument();
      expect(cardImg).toBeInTheDocument();
      expect(cardImg).toHaveAttribute("src", drinks.drinks[index].strDrinkThumb);
      expect(cardName).toHaveTextContent(drinks.drinks[index].strDrink);
    }
  });

  test('Testing redirect img', async () => {
    const { getAllByTestId, history } = renderWithContext(<Drinks />, '/bebidas');
    await waitForDomChange();
    const redirectBtns = getAllByTestId('0-redirect-btn');
    expect(redirectBtns[0]).toBeInTheDocument();
    fireEvent.click(redirectBtns[0]);
    expect(history.location.pathname).toBe('/bebidas/15997');
  });

  test('Testing redirect title', async () => {
    const { getAllByTestId, history } = renderWithContext(<Drinks />, '/bebidas');
    await waitForDomChange();
    const redirectBtns = getAllByTestId('0-redirect-btn');
    expect(redirectBtns[1]).toBeInTheDocument();
    fireEvent.click(redirectBtns[1]);
    expect(history.location.pathname).toBe('/bebidas/15997');
  });
});

describe('Testing categorie s component', () => {
  afterEach(() => cleanup());

  test('Testing category fetch', async () => {
    renderWithContext(<Drinks />, '/bebidas');
    await waitForDomChange();
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  });

  test('Testing card drink Elements', async () => {
    const { getByTestId } = renderWithContext(<Drinks />, '/bebidas');
    await waitForDomChange();
    const cocktail = getByTestId('Cocktail-category-filter');
    fireEvent.click(cocktail);
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    await waitForDomChange();
    cocktailDrinks.drinks.slice(0, 12).forEach((drink, index) => {
      expect(getByTestId(`${index}-card-img`)).toHaveAttribute("src", drink.strDrinkThumb);
      expect(getByTestId(`${index}-card-name`)).toHaveTextContent(drink.strDrink);
    });
    fireEvent.click(cocktail);
    drinks.drinks.slice(0, 12).forEach((drink, index) => {
      expect(getByTestId(`${index}-card-img`)).toHaveAttribute("src", drink.strDrinkThumb);
      expect(getByTestId(`${index}-card-name`)).toHaveTextContent(drink.strDrink);
    });
  });
  test('Testing categories', async () => {
    const { getByTestId } = renderWithContext(<Drinks />, '/bebidas');
    await waitForDomChange();
    drinkCategories.drinks.slice(0, 5).forEach(({ strCategory }) => {
      expect(getByTestId(`${strCategory}-category-filter`)).toBeInTheDocument();
    });
  });
});
