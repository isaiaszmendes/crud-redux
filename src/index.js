import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import postReducer from './reducer/postReducer' // depois refatorar colocando o combineReducers

const store = createStore(postReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

// passando a store para os components com o provider 
ReactDOM.render(
   <Provider store={store}> 
      <App />
   </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// Store possui métodos, e um deles é o dispatch(action) 

/*

action = {
    type: 'add_post',
    dados: ...
}

*/ 