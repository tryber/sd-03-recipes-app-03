import React from 'react';
import { cleanup, waitForDomChange, fireEvent } from '@testing-library/react';
import { Route } from 'react-router-dom';
import renderWithContext from './utilitiesTest/renderWithContext';
import DetailsRecipeContent from '../pages/DetailsPage/DetailsRecipePage/DetailsRecipeContent';
import meals from '../../cypress/mocks/meals';
import drinks from '../../cypress/mocks/drinks';
import mockFetch from './utilitiesTest/mockFetch';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

jest.spyOn(window, 'fetch').mockImplementation(mockFetch);


describe('Testing Details Page', () => {
  afterEach(() => cleanup());
  beforeEach(() => {
    localStorage.clear();
  });

  test('testing image', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977', '/comidas/:id');
    await waitForDomChange();
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977');
    expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const imageTest = getByTestId('recipe-photo');
    expect(imageTest).toBeInTheDocument();
    expect(imageTest).toHaveAttribute('src', corba.strMealThumb);
  });

  test('testing title', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977', '/comidas/:id');
    await waitForDomChange();

    const titleTest = getByTestId('recipe-title');
    expect(titleTest).toBeInTheDocument();
    expect(titleTest.innerHTML).toBe(corba.strMeal);
  });

  test('testing category', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977', '/comidas/:id');
    await waitForDomChange();

    const categoryTest = getByTestId('recipe-category');
    expect(categoryTest).toBeInTheDocument();
    expect(categoryTest.innerHTML).toBe(corba.strCategory);
  });

  test('testing favorite button', async () => {
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977', '/comidas/:id');
    await waitForDomChange();
    const mockedObj = JSON.stringify([{
      id: '52977',
      type: 'comida',
      area: 'Turkish',
      category: 'Side',
      alcoholicOrNot: '',
      name: 'Corba',
      image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg'
    }]);
    const favoriteButtonTest = getByTestId("favorite-btn");
    expect(favoriteButtonTest).toHaveAttribute("src", whiteHeartIcon);
    fireEvent.click(favoriteButtonTest);
    expect(favoriteButtonTest).toHaveAttribute("src", blackHeartIcon);
    expect(localStorage.getItem('favoriteRecipes')).toEqual(mockedObj);
    fireEvent.click(favoriteButtonTest);
    expect(favoriteButtonTest).toHaveAttribute("src", whiteHeartIcon);
    expect(localStorage.getItem('favoriteRecipes')).toEqual('[]');
  })

  test('testing share button', async () => {

    const { getByTestId, getByText } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977', '/comidas/:id');
    await waitForDomChange();

    const shareButton = getByTestId('share-btn');
    expect(shareButton).toHaveAttribute('src', shareIcon);
    const shareTest = getByTestId('shareTest');
    // fireEvent.click(shareTest);
    // await waitForDomChange();
    // expect(getByText('Link copiado!')).toBeInTheDocument();
  });

  test('testing ingredients', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977', '/comidas/:id');
    await waitForDomChange();

    for (let i = 0; i < 13; i++) {
      const ingredientsTest = getByTestId(`${i}-ingredient-name-and-measure`);
      expect(ingredientsTest).toBeInTheDocument();
      expect(ingredientsTest.innerHTML).toBe(`${corba[`strIngredient${1 + i}`]} - ${corba[`strMeasure${1 + i}`]}`);
    }
  });

  test('testing instructions', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977', '/comidas/:id');
    await waitForDomChange();

    const instructionsTest = getByTestId(`instructions`);
    expect(instructionsTest).toBeInTheDocument();
    expect(instructionsTest.innerHTML).toBe(corba.strInstructions);
  });

  test('testing video', async () => {
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977', '/comidas/:id');
    await waitForDomChange();

    const videoTest = getByTestId('video');
    expect(videoTest).toBeInTheDocument();
  });

  test('testing carrosel', async () => {
    const recommendedDrinks = drinks.drinks;
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977', '/comidas/:id');
    await waitForDomChange();

    for (let i = 0; i < 6; i++) {
      const carroselTestCard = getByTestId(`${i}-recomendation-card`);
      expect(carroselTestCard).toBeInTheDocument();
      const carroselCardTitle = getByTestId(`${i}-recomendation-title`);
      expect(carroselCardTitle.innerHTML).toBe(recommendedDrinks[i].strDrink);
    }
  });

  test('testing start recipe button', async () => {
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977', '/comidas/:id');
    await waitForDomChange();

    const buttonTest = getByTestId('start-recipe-btn');
    expect(buttonTest).toBeInTheDocument();
    expect(buttonTest).toHaveTextContent('Iniciar Receita')
    expect(buttonTest).toHaveAttribute('href', '/comidas/52977/in-progress');
  });

  test('testing done recipe message', async () => {
    const doneRecipes = JSON.stringify([{
      id: "52977",
      type: "comida",
      area: "Turkish",
      category: "Side",
      alcoholicOrNot: "",
      name: "Corba",
      image: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
      doneDate: "14 / 07 / 2020",
      tags: ["Soup"],
    }])
    localStorage.setItem('doneRecipes', doneRecipes);
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977', '/comidas/:id');
    await waitForDomChange();

    const doneRecipeMessage = getByTestId('done-recipe!');
    expect(doneRecipeMessage).toBeInTheDocument();
    expect(doneRecipeMessage).toHaveTextContent('Receita Feita!');
  });

  test('testing continue recipe button', async () => {
    localStorage.setItem('inProgressRecipes', JSON.stringify({ meals: { 52977: [] }, cocktails: {} }));
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/comidas/52977', '/comidas/:id');
    await waitForDomChange();
    const buttonTest = getByTestId('start-recipe-btn');
    expect(buttonTest).toBeInTheDocument();
    expect(buttonTest).toHaveTextContent('Continuar Receita')
    expect(buttonTest).toHaveAttribute('href', '/comidas/52977/in-progress');
  });

  test('testing image', async () => {
    const { getByTestId } = renderWithContext(<DetailsRecipeContent />, '/bebidas/178319', '/bebidas/:id');
    await waitForDomChange();
    const imageTest = getByTestId('recipe-photo');
    expect(imageTest).toBeInTheDocument();
    expect(imageTest).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg');
  });
})
