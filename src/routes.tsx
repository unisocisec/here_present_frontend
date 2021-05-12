import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import AnswerCall from './pages/AnswerCall';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/AnswerCall" exact component={AnswerCall} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;