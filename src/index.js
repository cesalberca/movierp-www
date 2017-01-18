import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './views/App';
import Home from './views/Home';
// import NotFound from './views/NotFound';

import './stylesheets/reset.css';
import './stylesheets/variables.css';
import './stylesheets/colors.css'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      
    </Route>
  </Router>,
  document.getElementById('root')
);
