import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Login,
  Logout,
  Register,
  ForgetPassword,
} from './components/Pages/Auths/index';
import HomePage from './components/Pages/Home';

function App() {
  return (
    <div className="text-white">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Logout">
            <Logout />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/ForgetPassword">
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
