import React from 'react'
import { Link } from 'react-router'

export default class GameLobby extends React.Component {
  render() {
    const { props } = this
    const gameList = props.client.gamesList.map((id,i) => {
      return (
        <Link
          key={id}
          to={`/game/${id}`}
          className="collection-item"
          activeClassName='active'
          onClick={() => props.loadGame(props.client.gamesList[i])}>
          Game {i+1}</Link>
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
