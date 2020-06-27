import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Profile from '../pages/UserProfile/Profile';
import DetailsMealsPage from '../pages/DetailsPage/DetailsMealsPage/DetailsMealsPage';
import DetailsDrinksPage from '../pages/DetailsPage/DetailsDrinksPage/DetailsDrinksPage';
import Foods from '../pages/FoodMainPage/Foods';
import Drinks from '../pages/DrinkMainPage/Drinks';
import Explorer from '../pages/ExplorerPages/Explorer';
import DrinkOrFoods from '../pages/ExplorerPages/ExplorerDrinkOrFoods';
import ExplorerByIngredients from '../pages/ExplorerPages/ExplorerByIngredients';
import ExplorerByArea from '../pages/ExplorerPages/ExplorerByArea';
import NotFound from '../pages/ExplorerPages/NotFound';

const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/explorar/bebidas/area" component={NotFound} />
      <Route exact path="/explorar/comidas/area" component={ExplorerByArea} />      
      <Route exact path="/explorar/comidas/ingredientes" component={ExplorerByIngredients} />
      <Route exact path="/explorar/bebidas/ingredientes" component={ExplorerByIngredients} />
      <Route exact path="/explorar/comidas" component={DrinkOrFoods} />
      <Route exact path="/explorar/bebidas" component={DrinkOrFoods} />
      <Route exact path="/explorar" component={Explorer} />
      <Route exact path="/comidas/:id" component={DetailsMealsPage} />
      <Route exact path="/bebidas/:id" component={DetailsDrinksPage} />
      <Route exact path="/comidas" component={Foods} />
      <Route exact path="/bebidas" component={Drinks} />
      <Route exact path="/perfil" component={Profile} />
      <Route exact path="/" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
