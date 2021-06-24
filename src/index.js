import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, combineReducers, createStore, compose ,} from 'redux';
import {Provider}   from 'react-redux';
import { usersReducer,taskReducer } from './store/reducer';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
const reducer=combineReducers({ user:usersReducer ,task:taskReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = (store) => {
  return (next) => {
    return action => {
      console.log("[from middleware]" + action)
      let res = next(action);
      console.log("[from middleware after next]" + action.type)
      console.log(res)
      return res;
    }

  }
}
ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
    <Provider store={createStore(reducer, composeEnhancers(
      applyMiddleware(logger, thunkMiddleware)
    ))}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
