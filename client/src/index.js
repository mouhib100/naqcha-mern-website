import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './redux/reducer';
import { BrowserRouter } from 'react-router-dom'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(userReducer, composeEnhancers(applyMiddleware(thunk)))
  

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App /> 
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
   document.getElementById('root') //version 17
);

