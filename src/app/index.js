import React from "react";
import {render} from "react-dom";

import App from "./containers/App"

import { createStore, combineReducers, applyMiddleware } from'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

import { browserHistory, Router, Route } from 'react-router'
import Game from './components/Game'
import Home from './components/Home'







import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client'

let socket = io('http://localhost:3000')
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/")


const userReducer = (state = {
  letter: '',
  word: 'dracula',
  turns: 6,
  guessArray: []
}, action) => {

  switch(action.type) {
    case "GUESS_LETTER":
      state = {
        ...state,
        letter: action.payload,
        turns: state.turns - action.incrementOrDecrement
      }
      return state
    default:
      return state
  }
}

const clientReducer = (state = {}, action) => {
  switch(action.type) {
    case "MESSAGE":
      return Object.assign({}, {message: action.data})
    default:
      return state
  }
}

let store = applyMiddleware(socketIoMiddleware)(createStore)(combineReducers({userReducer}))
store.subscribe(() => {
  console.log('new client state', store.getState())
})

store.dispatch({type: 'server/hello', date: 'hello'})

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/home' component={Home} />
        <Route path='/game' component={Game} />
      </Route>
    </Router>
  </Provider>, window.document.getElementById('app'));
