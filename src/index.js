import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Details from './containers/Details';
import 'antd/dist/antd.css'; 

import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={customHistory}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/actress/:id'>
        <Details  />
      </Route>
    </Switch>
    </Router>,
  document.getElementById('root')
);

