import React from 'react';
import Routes from './Routes/Routes';
import { DetailsPageProvider } from './pages/DetailsPage/DetailsPageProvider';
import FoodProvider from './pages/FoodMainPage/Context/FoodProvider';

function App() {
  return (
    <div>
      <FoodProvider>
        <DetailsPageProvider>
          <Routes />
        </DetailsPageProvider>
      </FoodProvider>
    </div>
  )
}

export default App;
