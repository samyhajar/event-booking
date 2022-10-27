import './App.css';
import AuthPage from '/Users/samyhajar/projects/event-booking/frontend/src/pages/Auth.js';
import BookingsPage from '/Users/samyhajar/projects/event-booking/frontend/src/pages/Bookings.js';
import EventsPage from '/Users/samyhajar/projects/event-booking/frontend/src/pages/Events.js';
import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainNavigation from './components/Navigation/MainNavigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <React.Fragment>
          <MainNavigation />
          <main className="main-content">
            <Switch>
              <Redirect from="/" to="/auth" exact />
              <Route path="/auth" component={AuthPage} />
              <Route path="/events" component={EventsPage} exact />
              <Route path="/bookings" component={BookingsPage} exact />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
