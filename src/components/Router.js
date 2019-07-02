import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProgressiveLoading from './progressiveLoading';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/lazyLoading" component={ProgressiveLoading} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
