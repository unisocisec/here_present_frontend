import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import AnswerCall from '../pages/AnswerCall';
import Signup from '../pages/Signup';
import CallReports from '../pages/callReports';
import ClassesBoard from '../pages/ClassesBoard';
import { Route } from './route'

function Routes(){
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact Component={Login} isLogin/>
        <Route path="/AnswerCall/:call_list_id" exact Component={AnswerCall} isPublic/>
        <Route path="/signup" exact Component={Signup} isLogin/>
        <Route path="/CallReports/:classroom_id" exact Component={CallReports} isPrivate />
        <Route path="/ClassesBoard" exact Component={ClassesBoard} isPrivate />
      </Switch>
    </HashRouter>
  );
}

export default Routes;