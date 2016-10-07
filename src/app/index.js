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
  input: '',
  character: ''
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
        letter: action.payload
      }
    case "INPUT": 
      state = {
        ...state,
        character: action.payload
      }
      return state
  }
  return state
}

const guessArrayReducer = (state = {
  guessArray: [],
}, action) => {

  switch(action.type) {
    case "PUSH_UNDERSCORES":
      state = {
        ...state,
        guessArray: [...state.guessArray, action.payload] 
      }
    break
    case "SLICE_GUESS_ARRAY":
      let array = []
      state = {
        ...state,
        guessArray: array.concat(state.guessArray.slice(0, state.guessArray.length - 1))
      }
    break
      return state
    }
  return state
}

const store = createStore(
  combineReducers({reducer, guessArrayReducer}),
  {},
  applyMiddleware(logger())
)

store.subscribe(() => {

})
render(
  <Provider store={store}>
    <App />
  </Provider>, window.document.getElementById('app'));
