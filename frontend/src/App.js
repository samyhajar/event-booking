import AuthPage from '/Users/samyhajar/projects/event-booking/frontend/src/pages/Auth.js';
import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <Switch>
          <Redirect from="/" to="/auth" exact />
          {/* <Route path="/" element={<Navigate to="/Auth" />} /> */}
          <Route to="/auth" component={AuthPage} />
          <Route path="/events" component={null} />
          <Route path="/bookings" component={null} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
