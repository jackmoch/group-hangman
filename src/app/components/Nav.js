import React from 'react'

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/game'>New Game</a></li>
        </ul>
      </nav>
    )
  }
}
