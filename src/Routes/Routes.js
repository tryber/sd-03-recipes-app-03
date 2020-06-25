import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Profile from '../pages/UserProfile/Profile';

const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/perfil" component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
