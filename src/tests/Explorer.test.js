import React from 'react';
import { fireEvent, cleanup } from '@testing-library/react';
import renderWithContext from './utilitiesTest/renderWithContext';
import Explorer from '../pages/ExplorerPages/Explorer';
import ExplorerDrinkOrFood from '../pages/ExplorerPages/ExplorerDrinkOrFood';

afterEach(cleanup);

describe('Testing Explorer.js and ExplorerDrinkOrFood.js', () => {
  test('Testing Explorer.js', () => {
    const { getByTestId } = renderWithContext(<Explorer />);

    const btnExploreMeals = getByTestId('explore-food');
    const btnExploreDrink = getByTestId('explore-drinks');

    expect(btnExploreMeals).toBeInTheDocument();
    expect(btnExploreDrink).toBeInTheDocument();
  });

  test('Testing Meals of ExplorerDrinkOrFood.js', () => {
    const { getByText } = renderWithContext(<ExplorerDrinkOrFood />, {
      route: '/explorar/comidas',
    });

    expect(getByText('Por Ingredientes')).toBeInTheDocument();
    expect(getByText('Por Local de Origem')).toBeInTheDocument();
    expect(getByText('Me Surpreenda!')).toBeInTheDocument();
  });

  test('Testing Drinks of ExplorerDrinkOrFood.js', () => {
    const { getByText } = renderWithContext(<ExplorerDrinkOrFood />, {
      route: '/explorar/bebidas',
    });

    expect(getByText('Me Surpreenda!')).toBeInTheDocument();
    expect(getByText('Por Ingredientes')).toBeInTheDocument();
  });
});
