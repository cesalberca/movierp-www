import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './views/App';
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
import CinemaSelection from './views/CinemaSelection';

import './stylesheets/reset.css';
import './stylesheets/variables.css';
import './stylesheets/colors.css';
import './stylesheets/typography.css';
import './stylesheets/button.css';
import './stylesheets/form.css';
import './../node_modules/sweetalert/dist/sweetalert.css';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="cinemas" component={Cinemas}/>
      <Route path="employees" component={Employees}/>
      <Route path="users" component={Users}/>
      <Route path="rooms" component={Rooms}/>
      <Route path="clients" component={Clients}/>
      <Route path="providers" component={Providers}/>
      <Route path="films" component={Films}/>
      <Route path="sessions" component={Sessions}/>
      <Route path="orders" component={Orders}/>
      <Route path="products" component={Products}/>
      <Route path="cinemaselection" component={CinemaSelection}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
