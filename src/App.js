import React from 'react';
import Routes from './Routes/Routes';
import { DetailsPageProvider } from './pages/DetailsPage/DetailsPageProvider';
import FoodProvider from './pages/FoodMainPage/Context/FoodProvider';
import SearchBarProvider from './components/HeaderSearchBar/HeaderSearchBarContext';

function App() {
  return (
    <div>
      <SearchBarProvider>
        <FoodProvider>
          <DetailsPageProvider>
            <Routes />
          </DetailsPageProvider>
        </FoodProvider>
      </SearchBarProvider>
    </div>
  );
}

export default App;
