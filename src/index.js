import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Routes from './Routes';
import App from './components/App/App';
import NotFound from './NotFound'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Routes}>
      <IndexRoute component={App} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
