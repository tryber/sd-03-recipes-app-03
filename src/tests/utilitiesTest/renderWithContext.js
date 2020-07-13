import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { RecipeInProgressProvider } from '../../pages/RecipesInProgress/RecipeInProgressProvider';
import FoodProvider from '../../pages/FoodMainPage/Context/FoodProvider';

const renderWithContext = (children, route = '/') => {
  const initialEntries = [route];
  const history = createMemoryHistory({ initialEntries });
  return {
    ...render(
      <Router history={history}>
        <RecipeInProgressProvider>
          <FoodProvider>
            {children}
          </FoodProvider>
        </RecipeInProgressProvider>
      </Router>,
    ),
    history,
  };
};

export default renderWithContext;
