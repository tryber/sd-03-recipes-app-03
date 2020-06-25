import React from 'react';
import Routes from './Routes/Routes';
import FoodProvider from './pages/FoodMainPage/Context/FoodProvider';

function App() {
  return (
    <FoodProvider>
      <Routes />
    </FoodProvider>
  );
}

export default App;
