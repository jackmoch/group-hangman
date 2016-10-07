import React from 'react'
import { Link } from 'react-router'

export default class Game extends React.Component {
  render() {
    const {
      props, populateArray,
      testLetter, clearInputs,
      checkWinner             } = this
    const { user, guessLetter } = props

    let letter
    const handleChange = ({target}) => {
       letter = target.value.length === 1
        ? target.value
        : target.value.slice(0,1)
     }
    ;(user.guessArray.length === 0) ? populateArray(user) : null
    testLetter(user)

    if(checkWinner(user)) {
      return (
        <div>
          <h3>You won!</h3>
          <h4>The word was: {user.word}</h4>
        </div>
      )
    }
    if(!checkWinner(user) && user.turns === 0) {
      return (
        <div>
          <h3>You lost!</h3>
        </div>
      )
    }
    return (
      <div>
        <h3>Turns remaining: {user.turns}</h3>
        {user.guessArray.map((v,i) => <span key={i}>{v}</span>)}
        <input type='text' onChange={handleChange} onBlur={clearInputs} placeholder='your letter here'/>
        <button className='btn' onClick={() => guessLetter(letter)}>Placeholder</button>
      </div>
    )
  }
  clearInputs(e) {
    e.target.value = ''
  }
  testLetter(user) {
    user.word.split('').forEach((v,i) => {
      if(user.letter.toLowerCase() === v.toLowerCase()) {
        user.guessArray.splice(i, 1, ` ${v} `)
      }
    })
  }
  populateArray(user) {
    user.word.split('').forEach(v => user.guessArray.push(' _ '))
  }
  checkWinner(user) {
     if (user.guessArray.includes(' _ ')) {
       return false
     }
     return true
  }
}
