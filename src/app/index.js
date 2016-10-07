import React from "react";
import {render} from "react-dom";

import { Provider } from 'react-redux'
import Routes from './routes'

// begin redux/redux-socket.io config/setup
import { createStore, combineReducers, applyMiddleware, compose } from'redux'
import logger from 'redux-logger'

import * as reducers from './reducers'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client'

let socket = io('http://localhost:3000')
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/")

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// let store = applyMiddleware(socketIoMiddleware, logger())(createStore)(combineReducers({...reducers}))
let store = composeEnhancers(applyMiddleware(socketIoMiddleware, logger()))(createStore)(combineReducers({...reducers}))

// const store = compose(
//   applyMiddleware(m1, m2, m3),
//   reduxReactRouter({
//     routes,
//     createHistory
//   }),
//   devTools()
// )(createStore)(reducer);
store.subscribe(() => {})
// end redux setup

render(
  <Provider store={store}>
    <Routes />
  </Provider>, window.document.getElementById('app'));
