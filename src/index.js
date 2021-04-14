import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {enableES5} from 'immer';
import {createStore ,applyMiddleware} from 'redux';
import RootReducer from './RootReducer/RootReducer';
import GetInitialState from './RootReducer/GetInitialState';
import thunk from 'redux-thunk';


enableES5();

const store = createStore(RootReducer, GetInitialState(),applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
