import React from 'react';
import { cleanup, waitForDomChange, fireEvent } from '@testing-library/react';
import renderWithContext from './utilitiesTest/renderWithContext';
import DoneRecipesList from '../pages/DoneRecipes/DoneRecipesList';

const doneMeal = [
  {
    id: "52977",
    type: "comida",
    area: "Turkish",
    category: "Side",
    alcoholicOrNot: "",
    name: "Corba",
    image: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    doneDate: "14 / 07 / 2020",
    tags: ["Soup"],
  }
];

describe('testing DoneRecipes page', () => {
  afterEach(() => cleanup());
  localStorage.setItem('doneRecipes' ,JSON.stringify(doneMeal));

  test('testing if elements are in the document', () => {
    const { getByTestId } = renderWithContext(<DoneRecipesList recipes={doneMeal} type="doneRecipes" />, '/receitas-feitas');
    const foodFilterBtn = getByTestId('filter-by-food-btn');
    fireEvent.click(foodFilterBtn);
    const title = getByTestId('0-horizontal-name');
    const img = getByTestId('0-horizontal-image');
    const infomations = getByTestId('0-horizontal-top-text');
    const date = getByTestId('0-horizontal-top-text');
    const tags = getByTestId('0-Soup-horizontal-tag');
    expect(title).toBeInTheDocument();
    expect(img).toHaveAttribute('src', "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg");
    expect(infomations).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(tags).toBeInTheDocument();
  });
})
