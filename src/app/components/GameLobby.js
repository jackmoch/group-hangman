import React from 'react'
import { Link } from 'react-router'

class GameLobby extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="collection with-header">
          <h4 className="collection-header text-center">Available Games</h4>
          <Link to="/game/asdas" className="collection-item" activeClassName='active'>Alvin</Link>
          <Link to="/game/sada" className="collection-item" activeClassName='active'>Alvin</Link>
          <Link to="/game/lkj" className="collection-item" activeClassName='active'>Alvin</Link>
          <Link to="/game/asbmnbdas" className="collection-item" activeClassName='active'>Alvin</Link>
        </div>
        <button className='btn'>New Game</button>
      </div>
    )
  }
}

export default GameLobby
