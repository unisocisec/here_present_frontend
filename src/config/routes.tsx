import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import AnswerCall from '../pages/AnswerCall';
import CallReports from '../pages/callReports';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/AnswerCall" exact component={AnswerCall} />
        <Route path="/CallReports" exact component={CallReports} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;