import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Profile from '../pages/UserProfile/Profile';
import DetailsRecipeContent from '../pages/DetailsPage/DetailsRecipePage/DetailsRecipeContent';
import Foods from '../pages/FoodMainPage/Foods';
import Drinks from '../pages/DrinkMainPage/Drinks';

const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/comidas/:id" component={DetailsRecipeContent} />
      <Route exact path="/bebidas/:id" component={DetailsRecipeContent} />
      <Route exact path="/comidas" component={Foods} />
      <Route exact path="/bebidas" component={Drinks} />
      <Route exact path="/perfil" component={Profile} />
      <Route exact path="/" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
