import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/homePage" exact component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
