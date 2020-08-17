import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../containers/Register'
import Login from '../containers/Login'
import Welcome from './index';
import Dashboard from '../containers/Dashboard';

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={Welcome} exact />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component ={Dashboard} />
    </Switch>
  </div>
);

export default App;
