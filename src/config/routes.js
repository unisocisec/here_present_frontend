import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import AnswerCall from '../pages/AnswerCall';
import Signup from '../pages/Signup';
import CallReports from '../pages/callReports';
import ClassesBoard from '../pages/ClassesBoard';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/AnswerCall" exact component={AnswerCall} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/CallReports" exact component={CallReports} />
        <Route path="/ClassesBoard" exact component={ClassesBoard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;