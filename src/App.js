import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import HelloPage from './pages/HelloPage';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/hello" component={HelloPage} />
  </Switch>
);

export default App;
