import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk'

import { Header } from "./components/header.jsx";
import { ConnectedMainPanel as MainPanel } from "./components/main-panel.jsx";
import { fetchTrips } from "./actions/trips-actions.jsx";
import { expandsReducer } from "./reducers/expands-reducer.jsx";
import { tripsReducer } from "./reducers/trips-reducer.jsx";

import "./reset.css";
import "./base.css"

const store = createStore(combineReducers({
  trips: tripsReducer,
  expands: expandsReducer
}), applyMiddleware(thunk));

store.dispatch(fetchTrips());

const reactMount = document.getElementById("react-anchor");

ReactDOM.render((
  <Provider store={store}>
    <div>
      <Header userName="Zack"/>
      <MainPanel />
    </div>
  </Provider>
), reactMount);
