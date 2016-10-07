import React from 'react'
import { Link } from 'react-router'

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to={'/home'}>Home</Link></li>
          <li><Link to={'/game'}>New Game</Link></li>
        </ul>
      </nav>
    )
  }
}
