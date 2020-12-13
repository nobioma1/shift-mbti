import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PerspectiveTestPage from '../pages/PerspectiveTestPage';
import ResultPage from '../pages/ResultPage';

const AppRoute = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <PerspectiveTestPage />
      </Route>
      <Route path="/result">
        <ResultPage />
      </Route>
    </Switch>
  );
};

export default AppRoute;
