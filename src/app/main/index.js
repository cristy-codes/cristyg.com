import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/home';

const Main = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Main;
