import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Profile from '../pages/UserProfile/Profile';
import DetailsMealsPage from '../pages/DetailsPage/DetailsMealsPage/DetailsMealsPage';
import DetailsDrinksPage from '../pages/DetailsPage/DetailsDrinksPage/DetailsDrinksPage';

const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/perfil" component={Profile} />
      <Route exact path="/comidas/:id" component={DetailsMealsPage} />
      <Route exact path="/bebidas/:id" component={DetailsDrinksPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
