import React from 'react';
import Routes from './Routes/Routes';
import { DetailsPageProvider } from './pages/DetailsPage/DetailsPageProvider';

function App() {
  return (
    <div>
      <DetailsPageProvider>
        <Routes />
      </DetailsPageProvider>
    </div>
  );
}

export default App;
