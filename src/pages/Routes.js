import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import Login from './Login';
import Register from './Register';
import MakeOrder from './MakeOrder';
import NotFound from './NotFound';
import Parcels from './Parcels';

const Routes = () => (
  <div>
    <Notifications />
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/make-order" component={MakeOrder} />
        <Route path="/orders" component={Parcels} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </div>
);

export default Routes;
