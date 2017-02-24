import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import AuthService from './utils/authService';

import App from './views/App';
import Login from './views/Login';
import Home from './views/Home';
import Cinemas from './views/Cinemas';
import Employees from './views/Employees';
import Users from './views/Users';
import Rooms from './views/Rooms';
import Clients from './views/Clients';
import Providers from './views/Providers';
import Films from './views/Films';
import Sessions from './views/Sessions';
import Orders from './views/Orders';
import Products from './views/Products';
import NotFound from './views/NotFound';
import CinemaSelection from './views/tickets/CinemaSelection';
import FilmSelection from './views/tickets/FilmSelection';
import SessionSelection from './views/tickets/SessionSelection';

import './stylesheets/reset.css';
import './stylesheets/variables.css';
import './stylesheets/colors.css';
import './stylesheets/typography.css';
import './stylesheets/button.css';
import './stylesheets/form.css';
import './../node_modules/sweetalert/dist/sweetalert.css';
import './index.css';

const auth = new AuthService('kR2EUygv0YR3EIoAPfde0UD3AS7XIhL8', 'pensemos.eu.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({pathname: '/login'});
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} auth={auth}>
      <IndexRoute component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/cinemas" component={Cinemas} onEnter={requireAuth}/>
      <Route path="/employees" component={Employees} onEnter={requireAuth}/>
      <Route path="/users" component={Users} onEnter={requireAuth}/>
      <Route path="/rooms" component={Rooms} onEnter={requireAuth}/>
      <Route path="/clients" component={Clients} onEnter={requireAuth}/>
      <Route path="/providers" component={Providers} onEnter={requireAuth}/>
      <Route path="/films" component={Films} onEnter={requireAuth}/>
      <Route path="/sessions" component={Sessions} onEnter={requireAuth}/>
      <Route path="/orders" component={Orders} onEnter={requireAuth}/>
      <Route path="/products" component={Products} onEnter={requireAuth}/>
      <Route path="/tickets" component={CinemaSelection} onEnter={requireAuth}/>
      <Route path="/tickets/:cinemaSelectionId" component={FilmSelection}/>
      <Route path="/tickets/:cinemaSelectionId/:movieSelectionId" component={SessionSelection}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
