import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer/index'
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
