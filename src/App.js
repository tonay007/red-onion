import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;