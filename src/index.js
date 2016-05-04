import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router'

import App from './components/app';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory }>
      <Route path="/" component={App}>
        <Route path="about" component={About} />
        <Route path="portfolio" component={Portfolio} />
        <Route path="contact" component={Contact} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
