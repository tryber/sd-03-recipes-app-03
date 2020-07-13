import React from 'react';
import { cleanup, waitForDomChange } from '@testing-library/react';
import renderWithContext from './utilitiesTest/renderWithContext';
import DetailsRecipeContent from '../pages/DetailsPage/DetailsRecipePage/DetailsRecipeContent';
import meals from '../../cypress/mocks/meals';
import drinks from '../../cypress/mocks/drinks';
import mockFetch from './utilitiesTest/mockFetch';
import ShareButton from '../components/Share/ShareButton';
import FavoriteButton from '../components/Favorite/FavoriteButton';

jest.spyOn(window, 'fetch').mockImplementation(mockFetch);

describe('Testing Details Page', () => {
  afterEach(() => cleanup());

  test('testing image', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977');
    await waitForDomChange();

    const imageTest = getByTestId('recipe-photo');
    expect(imageTest).toBeInTheDocument();
    expect(imageTest).toHaveAttribute('src', corba.strMealThumb);
  });

  test('testing title', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977');
    await waitForDomChange();

    const titleTest = getByTestId('recipe-title');
    expect(titleTest).toBeInTheDocument();
    expect(titleTest.innerHTML).toBe(corba.strMeal);
  });

  test('testing category', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977');
    await waitForDomChange();

    const categoryTest = getByTestId('recipe-category');
    expect(categoryTest).toBeInTheDocument();
    expect(categoryTest.innerHTML).toBe(corba.strCategory);
  });

  test('testing ingredients', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977');
    await waitForDomChange();

    for (let i = 0; i < 13; i++) {
      const ingredientsTest = getByTestId(`${i}-ingredient-name-and-measure`);
      expect(ingredientsTest).toBeInTheDocument();
      expect(ingredientsTest.innerHTML).toBe(`${corba[`strIngredient${1 + i}`]} - ${corba[`strMeasure${1 + i}`]}`);
    }
  });

  test('testing instructions', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977');
    await waitForDomChange();

    const instructionsTest = getByTestId(`instructions`);
    expect(instructionsTest).toBeInTheDocument();
    expect(instructionsTest.innerHTML).toBe(corba.strInstructions);
  });

  test('testing video', async () => {
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977');
    await waitForDomChange();

    const videoTest = getByTestId('video');
    expect(videoTest).toBeInTheDocument();
  });

  test('testing carrosel', async () => {
    const recommendedDrinks = drinks.drinks;
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977');
    await waitForDomChange();

    for (let i = 0; i < 6; i++) {
      const carroselTestCard = getByTestId(`${i}-recomendation-card`);
      expect(carroselTestCard).toBeInTheDocument();
      const carroselCardTitle = getByTestId(`${i}-recomendation-title`);
      expect(carroselCardTitle.innerHTML).toBe(recommendedDrinks[i].strDrink);
    }
  });

  test('testing recipe button', async () => {
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977');
    await waitForDomChange();

    const buttonTest = getByTestId('start-recipe-btn');
    expect(buttonTest).toBeInTheDocument();
    expect(buttonTest).toHaveTextContent('Iniciar Receita')
    expect(buttonTest).toHaveAttribute('href', '/comidas/52977/in-progress');
  });
})
