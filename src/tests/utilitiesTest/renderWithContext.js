import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { RecipeInProgressProvider } from '../../pages/RecipesInProgress/RecipeInProgressProvider';
import FoodProvider from '../../pages/FoodMainPage/Context/FoodProvider';
import SearchBarProvider from '../../components/HeaderSearchBar/HeaderSearchBarContext';

const renderWithContext = (children, route = '/', path = '/') => {
  const initialEntries = [route];
  const history = createMemoryHistory({ initialEntries });
  return {
    ...render(
      <Router history={history}>
        <Route path={path}>
          <RecipeInProgressProvider>
            <FoodProvider>
              <SearchBarProvider>
                {children}
              </SearchBarProvider>
            </FoodProvider>
          </RecipeInProgressProvider>
        </Route>
      </Router>,
    ),
    history,
  };
};

export default renderWithContext;
