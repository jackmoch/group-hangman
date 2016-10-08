import React from 'react'
import { Link } from 'react-router'

export default class Nav extends React.Component {
  render() {
    return (
      <nav className='nav-bar'>
        <ul>
          <li><Link to={'/home'} onClick={() => this.props.loadGames()}>Home</Link></li>
          <li><Link to={'/game'}>Lobby</Link></li>
        </ul>
      </nav>
    )
  }
}
