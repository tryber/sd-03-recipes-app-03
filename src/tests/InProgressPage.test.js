import React from 'react';
import { fireEvent, waitForDomChange} from '@testing-library/react';
import renderWithContext from './utilitiesTest/renderWithContext';
import LocalStorage from './utilitiesTest/LocalStorage';
import RecipesInProgressContent from '../pages/RecipesInProgress/RecipesInProgressPage/RecipesInProgressContent';
import meals from '../../cypress/mocks/meals';
import mockFetch from './utilitiesTest/mockFetch';

localStorage = new LocalStorage();
jest.spyOn(window, 'fetch').mockImplementation(mockFetch);

describe('Testing In Progress Page', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem(
      'inProgressRecipes',
      JSON.stringify({ meals: { 52977: [] }, cocktails: {} }),
    );
  });

  test('testing image', async () => {
    const corba = meals.meals[0]
    const { getByTestId } = renderWithContext(<RecipesInProgressContent />, '/comidas/52977/in-progress');
    await waitForDomChange();

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
    const { getByTestId } = renderWithContext(<RecipesInProgressContent />, '/comidas/52977/in-progress');
    await waitForDomChange();

    const finishButtonTest = getByTestId('finish-recipe-btn');
    expect(finishButtonTest).toBeInTheDocument();
    expect(finishButtonTest).toHaveAttribute('disabled');

    for (let i = 0; i < 13; i++) {
      const ingredientCheckbox = getByTestId(`${i}-ingredient-test`);
      fireEvent.click(ingredientCheckbox);
      expect(ingredientCheckbox).toBeChecked();
    }

    expect(finishButtonTest).toBeInTheDocument();
    expect(finishButtonTest).not.toHaveAttribute('disabled');
  });
})
