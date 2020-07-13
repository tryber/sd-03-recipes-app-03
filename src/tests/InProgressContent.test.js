import React from 'react';
import { waitForDomChange, cleanup} from '@testing-library/react';
import renderWithContext from './utilitiesTest/renderWithContext';
import LocalStorage from './utilitiesTest/LocalStorage';
import RecipesInProgressContent from '../pages/RecipesInProgress/RecipesInProgressPage/RecipesInProgressContent';
import meals from '../../cypress/mocks/meals';
import mockFetch from './utilitiesTest/mockFetch';

localStorage = new LocalStorage();
jest.spyOn(window, 'fetch').mockImplementation(mockFetch);

describe('testing first render page', () => {
  afterEach(cleanup)
  const inProgressRecipes = { cocktails: {}, meals: {} };
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    localStorage.setItem(
      'doneRecipes',
      JSON.stringify([]),
    );
  });

  test('testing initial localStorage', async () => {
    // localStorage.setItem('inProgressRecipes', { meals: { }, cocktails: { } });
    const { getByTestId } = renderWithContext(<RecipesInProgressContent />, '/comidas/52977/in-progress');
    await waitForDomChange();
    const inProgressLocalStorage = JSON.stringify({
      meals: {},
      cocktails: {},
    })

    expect(localStorage.getItem('inProgressRecipes')).toEqual(inProgressLocalStorage);
  })
})
