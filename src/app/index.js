import React from "react";
import {render} from "react-dom";

import App from "./containers/App"

import { createStore, combineReducers, applyMiddleware } from'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

import { browserHistory, Router, Route } from 'react-router'
import Game from './components/Game'
import Home from './components/Home'

const reducer = (state = {
  hello: 'goodbye',
  letter: '',
  word: 'dracula',
  turns: 6,
  guessArray: []
}, action) => {

  switch(action.type) {
    case "HELLO":
      state = {
        ...state,
        hello: action.payload
      }
    case "GUESS_LETTER":
      state = {
        ...state,
        letter: action.payload,
        turns: state.turns - action.incrementOrDecrement
      }
      return state
  }
  return state
}

const store = createStore(
  combineReducers({reducer}),
  {},
  applyMiddleware(logger())
)

store.subscribe(() => {

})
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/home' component={Home} />
        <Route path='/game' component={Game} />
      </Route>
    </Router>
  </Provider>, window.document.getElementById('app'));
