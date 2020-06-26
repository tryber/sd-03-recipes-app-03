import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Profile from '../pages/UserProfile/Profile';
import Foods from '../pages/FoodMainPage/Foods';
import Drinks from '../pages/DrinkMainPage/Drinks';
import Explorer from '../pages/ExplorerPages/Explorer';
import DrinkOrFoods from '../pages/ExplorerPages/DrinkOrFoods';

const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/perfil" component={Profile} />
      <Route exact path="/comidas" component={Foods} />
      <Route exact path="/bebidas" component={Drinks} />
      <Route exact path="/explorar" component={Explorer} />
      <Route exact path="/explorar/comidas" component={DrinkOrFoods} />
      <Route exact path="/explorar/bebidas" component={DrinkOrFoods} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
