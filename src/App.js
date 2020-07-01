import React from 'react';
import Routes from './Routes/Routes';
import { DetailsPageProvider } from './pages/DetailsPage/DetailsPageProvider';
import { RecipeInProgressProvider } from './pages/RecipesInProgress/RecipeInProgressProvider';
import FoodProvider from './pages/FoodMainPage/Context/FoodProvider';
import SearchBarProvider from './components/HeaderSearchBar/HeaderSearchBarContext';

function App() {
  return (
    <div>
      <RecipeInProgressProvider>
        <SearchBarProvider>
          <FoodProvider>
            <DetailsPageProvider>
              <Routes />
            </DetailsPageProvider>
          </FoodProvider>
        </SearchBarProvider>
      </RecipeInProgressProvider>
    </div>
  );
}

export default App;
