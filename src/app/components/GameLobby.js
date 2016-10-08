import React from 'react'
import { Link } from 'react-router'

class GameLobby extends React.Component {
  loadNewGame(cb) {

  }
  render() {
    const { props } = this
    const gameList = props.client.gamesList.map((id,i) => {
      return (
        <Link key={id} to={`/game/${id}`} className="collection-item" activeClassName='active'>Game {i+1}</Link>
      )
    })
    return (
      <div className='container'>
        <div className="collection with-header">
          <h4 className="collection-header text-center">Available Games</h4>
          {gameList}
        </div>
        <button className='btn' onClick={() => props.newGame()}>New Game</button>
      </div>
    )
  }
}

export default GameLobby
