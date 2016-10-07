import React from 'react'
import { browserHistory, Router, Route } from 'react-router'
import App from "./containers/App"
import Game from './components/Game'
import Home from './components/Home'


export default class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='/home' component={Home} />
          <Route path='/game' component={Game}>
            <Route path='/game/:id' component={Game} />
          </Route>
        </Route>
      </Router>
    )
  }
}
