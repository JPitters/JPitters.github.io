import React from 'react';
//import logo from '../logo.svg';
import '../css/app.scss';
import { hot } from 'react-hot-loader';
import { Router, Switch, Route } from 'react-router-dom';
import Main from './scenes/Main';
import { history } from './store';

function App() {
  return (
    <Router history={history} onUpdate={() => { window.scrollTo(0, 0); }}>
      <Switch>
        <Route path="/" name="Main" component={Main}/>
      </Switch>
    </Router>
  );
}

export default hot(module)(App);
