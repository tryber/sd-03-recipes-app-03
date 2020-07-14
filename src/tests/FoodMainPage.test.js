import React from 'react';
import { cleanup, waitForDomChange, fireEvent } from '@testing-library/react';
import renderWithContext from './utilitiesTest/renderWithContext';
import mockFetch from './utilitiesTest/mockFetch';
import breakfastMeals from '../../cypress/mocks/breakfastMeals';
import mealCategories from '../../cypress/mocks/mealCategories';
import meals from '../../cypress/mocks/meals';
import Food from '../pages/FoodMainPage/Foods';

jest.spyOn(window, 'fetch').mockImplementation(mockFetch);

describe('Testing Food Main Page', () => {
  afterEach(() => cleanup());

  test('testing fetch', async () => {
    renderWithContext(<Food />, '/comidas');
    await waitForDomChange();
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  });

  test('Testing Meals Cards', async () => {
    const { getByTestId } = renderWithContext(<Food />, '/comidas');
    await waitForDomChange();
    for(let index = 0; index < 12; index += 1) {
      const card = getByTestId(`${index}-recipe-card`);
      const cardImg = getByTestId(`${index}-card-img`);
      const cardName = getByTestId(`${index}-card-name`);
      expect(card).toBeInTheDocument();
      expect(cardImg).toBeInTheDocument();
      expect(cardImg).toHaveAttribute("src", meals.meals[index].strMealThumb);
      expect(cardName).toHaveTextContent(meals.meals[index].strMeal);
    }
  });
  test('Testing redirect img', async () => {
    const { getAllByTestId, history } = renderWithContext(<Food />, '/comidas');
    await waitForDomChange();
    const redirectBtns = getAllByTestId('0-redirect-btn');
    expect(redirectBtns[0]).toBeInTheDocument();
    fireEvent.click(redirectBtns[0]);
    expect(history.location.pathname).toBe('/comidas/52977');
  });

  test('Testing redirect title', async () => {
    const { getAllByTestId, history } = renderWithContext(<Food />, '/comidas');
    await waitForDomChange();
    const redirectBtns = getAllByTestId('0-redirect-btn');
    expect(redirectBtns[1]).toBeInTheDocument();
    fireEvent.click(redirectBtns[1]);
    expect(history.location.pathname).toBe('/comidas/52977');
  });
});

describe('Testing categorie s component', () => {
  afterEach(() => cleanup());

  test('Testing category fetch', async () => {
    renderWithContext(<Food />, '/comidas');
    await waitForDomChange();
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
  });

  test('Testing card meal Elements', async () => {
    const { getByTestId } = renderWithContext(<Food />, '/comidas');
    await waitForDomChange();
    const breakFastBtn = getByTestId('Breakfast-category-filter');
    fireEvent.click(breakFastBtn);
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast');
    await waitForDomChange();
    breakfastMeals.meals.forEach((meal, index) => {
      expect(getByTestId(`${index}-card-img`)).toHaveAttribute("src", meal.strMealThumb);
      expect(getByTestId(`${index}-card-name`)).toHaveTextContent(meal.strMeal);
    });
    fireEvent.click(breakFastBtn);
    meals.meals.slice(0, 12).forEach((meal, index) => {
      expect(getByTestId(`${index}-card-img`)).toHaveAttribute("src", meal.strMealThumb);
      expect(getByTestId(`${index}-card-name`)).toHaveTextContent(meal.strMeal);
    });
  });

  test('Testing categories', async () => {
    const { getByTestId } = renderWithContext(<Food />, '/comidas');
    await waitForDomChange();
    mealCategories.meals.slice(0, 5).forEach(({ strCategory }) => {
      expect(getByTestId(`${strCategory}-category-filter`)).toBeInTheDocument();
    });
  });
});
