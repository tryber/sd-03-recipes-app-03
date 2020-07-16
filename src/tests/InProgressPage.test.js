import React from 'react';
import { fireEvent, waitForDomChange, cleanup} from '@testing-library/react';
import renderWithContext from './utilitiesTest/renderWithContext';
import RecipesInProgressContent from '../pages/RecipesInProgress/RecipesInProgressPage/RecipesInProgressContent';
import meals from '../../cypress/mocks/meals';
import drinks from '../../cypress/mocks/drinks';
import mockFetch from './utilitiesTest/mockFetch';

jest.spyOn(global, 'fetch').mockImplementation(mockFetch);

describe('Testing In Progress Page', () => {
  afterEach(cleanup)
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem(
      'inProgressRecipes',
      JSON.stringify({ meals: { 52977: [] }, cocktails: {} }),
    );
    localStorage.setItem(
      'doneRecipes',
      JSON.stringify([]),
    );
  });

  test('testing image', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<RecipesInProgressContent />, '/comidas/52977/in-progress', '/comidas/:id/in-progress');
    await waitForDomChange();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977');

    const imageTest = getByTestId('recipe-photo');
    expect(imageTest).toBeInTheDocument();
    expect(imageTest).toHaveAttribute('src', corba.strMealThumb);
  })

  test('testing title', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<RecipesInProgressContent />, '/comidas/52977/in-progress');
    await waitForDomChange();

    const titleTest = getByTestId('recipe-title');
    expect(titleTest).toBeInTheDocument();
    expect(titleTest.innerHTML).toBe(corba.strMeal);
  });

  test('testing category', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<RecipesInProgressContent />, '/comidas/52977/in-progress');
    await waitForDomChange();

    const categoryTest = getByTestId('recipe-category');
    expect(categoryTest).toBeInTheDocument();
    const titleTest = getByTestId('recipe-title');
    expect(titleTest).toBeInTheDocument();
    expect(categoryTest.innerHTML).toBe(corba.strCategory);
  });

  test('testing ingredients', async () => {
    const corba = meals.meals[0]
    const { getByTestId, getAllByTestId } = renderWithContext(<RecipesInProgressContent />, '/comidas/52977/in-progress');
    await waitForDomChange();

    for (let i = 0; i < 13; i++) {
      const ingredientsTest = getByTestId(`${i}-ingredient-step`);
      expect(ingredientsTest).toBeInTheDocument();
      const labelText = getAllByTestId('label')
      expect(labelText).toHaveLength(13);
      // const { getByText } = within(labelText[i])
      // expect(getByText(`${corba[`strIngredient${1 + i}`]} - ${corba[`strMeasure${1 + i}`]}`)).toBeInTheDocument()
      // console.log(typeof `${corba[`strIngredient${1 + i}`]} - ${corba[`strMeasure${1 + i}`]}`)
      // expect(labelText.value).toEqual(`${corba[`strIngredient${1 + i}`]} - ${corba[`strMeasure${1 + i}`]}`)
    }

  });

  test('testing risk ingredient', async () => {
    const { getAllByTestId } = renderWithContext(<RecipesInProgressContent />, '/comidas/52977/in-progress');
    await waitForDomChange();

    for (let i = 0; i < 13; i++) {
      const ingredientCheckbox = getAllByTestId(`label`)[i];
      fireEvent.click(ingredientCheckbox);
      expect(ingredientCheckbox).toHaveStyle('text-decoration: line-through')
    }

    for (let i = 0; i < 13; i++) {
      const ingredientCheckbox = getAllByTestId(`label`)[i];
      fireEvent.click(ingredientCheckbox);
      expect(ingredientCheckbox).toHaveStyle('text-decoration:')
    }
  });

  test('testing checked ingredients', async () => {
    localStorage.setItem('inProgressRecipes', JSON.stringify({ meals: { 52977: [1, 2, 3] } }));
    const { getByTestId } = renderWithContext(<RecipesInProgressContent />, '/comidas/52977/in-progress');
    await waitForDomChange();
    expect(getByTestId('1-ingredient-test')).toBeChecked();
    expect(getByTestId('2-ingredient-test')).toBeChecked();
    expect(getByTestId('3-ingredient-test')).toBeChecked();
    expect(getByTestId('4-ingredient-test')).not.toBeChecked();
  })

  test('testing instructions', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<RecipesInProgressContent />, '/comidas/52977/in-progress');
    await waitForDomChange();

    const instructionsTest = getByTestId(`instructions`);
    expect(instructionsTest).toBeInTheDocument();
    expect(instructionsTest.innerHTML).toBe(corba.strInstructions);
  });

  test('testing finish button', async () => {
    const { getByTestId, history } = renderWithContext(<RecipesInProgressContent />, '/comidas/52977/in-progress', '/comidas/:id/in-progress');
    await waitForDomChange();
    const inProgressLocalStorage = JSON.stringify({
      meals: {
        52977: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
      cocktails: {},
    })

    const finishButtonTest = getByTestId('finish-recipe-btn');
    expect(finishButtonTest).toBeInTheDocument();
    expect(finishButtonTest).toHaveAttribute('disabled');

    for (let i = 0; i < 13; i++) {
      const ingredientCheckbox = getByTestId(`${i}-ingredient-test`);
      fireEvent.click(ingredientCheckbox);
      expect(ingredientCheckbox).toBeChecked();
    }

    expect(localStorage.getItem('inProgressRecipes')).toEqual(inProgressLocalStorage)
    expect(finishButtonTest).toBeInTheDocument();
    expect(finishButtonTest).toBeEnabled();

    fireEvent.click(finishButtonTest);
    expect(history.location.pathname).toBe('/receitas-feitas')

    const doneRecipeTest = JSON.stringify([{id: "52977", type: "comida", area: "Turkish", category: "Side", alcoholicOrNot: "", name: "Corba", image: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg", doneDate: "16 / 07 / 2020", tags: ["Soup"]}]);

    expect(localStorage.getItem('doneRecipes')).toEqual(doneRecipeTest);

  });

  test('testing drink image', async () => {
    const GG = drinks.drinks[0]
    const { getByTestId } = renderWithContext(<RecipesInProgressContent />, '/bebidas/178319/in-progress', '/bebidas/:id/in-progress');
    await waitForDomChange();

    expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178319');

    const imageTest = getByTestId('recipe-photo');
    expect(imageTest).toBeInTheDocument();
    expect(imageTest).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg');
  })

  test('testing localStorage', async () => {
    localStorage.clear();
    renderWithContext(<RecipesInProgressContent />, '/comidas/52977/in-progress', '/comidas/:id/in-progress');
    await waitForDomChange();
    const inProgressRecipes = { cocktails: {}, meals: { 52977: [] }};
    expect(JSON.parse(localStorage.getItem('inProgressRecipes'))).toEqual(inProgressRecipes)
  });
})
