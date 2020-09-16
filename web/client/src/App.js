import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './content/Dashboard';
import Events from './content/Events';
import Devices from './content/Devices';
import Firefighters from './content/Firefighters';
import Firefighter from './content/Firefighter';
import Reports from './content/Reports';
import Profile from './content/Profile';
import Settings from './content/Settings';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/devices" component={Devices} />
      <Route exact path="/firefighters" component={Firefighters} />
      <Route exact path="/firefighter" component={Firefighter} />
      <Route exact path="/reports" component={Reports} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  );
}

export default App;
