import React from 'react'
import { Link } from 'react-router'

export default class Game extends React.Component {
  render() {
    const { props, clearInputs, checkWinner } = this
    const       { user, guessLetter, params } = props

    let letter
    const handleChange = ({target}) => {
       letter = target.value.length === 1
        ? target.value
        : target.value.slice(0,1)
     }

    if(checkWinner(user)) {
      return (
        <div>
          <h3>You won!</h3>
          <h4>The word was: {user.gameState.word}</h4>
        </div>
      )
    }
    if(!checkWinner(user) && user.gameState.turns === 0) {
      return (
        <div>
          <h3>You lost!</h3>
        </div>
      )
    }
    return (
      <div>
        <h3>Turns remaining: {user.gameState.turns}</h3>
        {user.gameState.guessArray.map((v,i) => <span key={i}>{v}</span>)}
        <input type='text' onChange={handleChange} onBlur={clearInputs} placeholder='your letter here'/>
        <button className='btn' onClick={() => guessLetter(letter, params.id)}>Placeholder</button>
      </div>
    )
  }
  clearInputs(e) {
    e.target.value = ''
  }
  checkWinner(user) {
     if (user.gameState.guessArray.includes(' _ ')) {
       return false
     }
     return true
  }
}
