import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import {createStore,applyMiddleware,compose,combineReducers} from "redux";
import thunk from "redux-thunk"
import Reducer from "./store/reducer/Reducer"
import CartReducer from "./store/reducer/CartReducer"
import App from './App';
import './index.css';

const RootReducer=combineReducers({
  Reducer:Reducer,
  CartReducer:CartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store=createStore(RootReducer,composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>
, document.getElementById('root'));
