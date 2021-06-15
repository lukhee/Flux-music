import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavBar } from './components/Widgets';
import {
  Login,
  Logout,
  Register,
  ForgetPassword,
} from './components/Pages/Auths/index';
import HomePage from './components/Pages/Home';

function App() {
  return (
    <div className="text-dark">
      {/* <NavBar /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/forget_password">
            <ForgetPassword />
          </Route>
          <Route exact path="/HomePage">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
