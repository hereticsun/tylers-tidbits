import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './base/configure-store';
import './index.css';

import App from './base/App';
import PageHome from './modules/pages/page-home/page-home';
import PageRestaurants from './modules/pages/page-restaurants/page-restaurants';
import PageCategory from './modules/pages/page-category/page-category';
import PageSearch from './modules/pages/page-search/page-search';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PageHome} />
        <Route path="restaurants" component={PageRestaurants} />
        <Route path="category/:category" component={PageCategory} />
        <Route path="search" component={PageSearch} />
        <Route path="search/:term" component={PageSearch} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
