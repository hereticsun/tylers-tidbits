import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './base/configure-store';
import './index.css';

import App from './base/App';
import PageHome from './modules/pages/page-home/page-home';
import PageRestaurants from './modules/pages/page-restaurants/page-restaurants';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PageHome} />
        <Route path="restaurants" component={PageRestaurants} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
