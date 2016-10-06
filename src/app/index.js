import React from "react";
import {render} from "react-dom";

import App from "./containers/App"

import { createStore, combineReducers, applyMiddleware } from'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

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
    <App />
  </Provider>, window.document.getElementById('app'));
