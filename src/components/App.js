import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../containers/Register';
import Login from '../containers/Login';
import Welcome from './index';
import Dashboard from '../containers/Dashboard';
import Display from '../containers/DisplaySteps';
import SingleStep from '../containers/SingleStep';
import Profile from '../containers/Profile';
import EditProfile from '../containers/EditProfile';

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={Welcome} exact />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/display" component={Display} />
      <Route path="/steps/:id" component={SingleStep} />
      <Route path="/profile" component={Profile} />
      <Route path="/edit-profile" component={EditProfile} />
    </Switch>
  </div>
);

export default App;
