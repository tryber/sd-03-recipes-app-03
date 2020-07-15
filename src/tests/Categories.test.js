import React from 'react';
import { cleanup, fireEvent, waitForDomChange } from '@testing-library/react';
import renderWithContext from './utilitiesTest/renderWithContext';
import
import mockFetch from './utilitiesTest/mockFetch';

jest.spyOn(window, 'fetch').mockImplementation(mockFetch);

const categories = [
  { strCategory: "All" },
  { strCategory: "Beef" },
  { strCategory: "Breakfast" },
  { strCategory: "Chicken" },
  { strCategory: "Dessert" },
  { strCategory: "Goat" },
  { strCategory: "Lamb" },
  { strCategory: "Miscellaneous" },
];

describe('Testing categories buttons', () => {
  afterEach(() => cleanup());

  test('Testing fetch', async () => {
    renderWithContext(
      <ListCategories
        type="meal"
        strCategories ={categories}
      />);
    await waitForDomChange();
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  });
  // test('', async () => {
  //   const { getByTestId } = renderWithContext(
  //   <ListCategories
  //     type="meal"
  //     strCategories ={categories}
  //   />, '/comidas');
  //   await waitForDomChange();
  //   const breakFastCategory = getByTestId('Breakfast-category-filter')
  // });
});
