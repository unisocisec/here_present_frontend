import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import AnswerCall from './pages/AnswerCall';
import Signup from './pages/Signup';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/AnswerCall" exact component={AnswerCall} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;