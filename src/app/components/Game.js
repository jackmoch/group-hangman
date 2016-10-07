import React from 'react'

export default class Game extends React.Component {
  render() {
    const {user} = this.props
    const {guess} = this.props
    const populateArray = function (){
      user.word.split('').forEach(v => this.props.pushUnderscores(' _ '))
    }.bind(this)
    if(guess.guessArray.length === 0) {
      populateArray()
    }
    const testLetter = function(letter) {
      user.word.split('').forEach((v,i) => {
        if(letter.toLowerCase() === v.toLowerCase()) {
          this.props.sliceGuessArray(i)
        }
      })
    }.bind(this)
    const clearInputs = function(e) {
      e.target.value = ''
    }
    return (
      <div>
        <h3>Turns remaining: {user.turns}</h3>
        {guess.guessArray.map((v = _,i) => <span key={i}>{v}</span>)}
        <input type='text' onChange={(event) => this.props.userInput(event.target.value)} onBlur={(event) => {event.target.value = ''}} placeholder='your letter here'/>
        <button onClick={() => testLetter(this.props.user.character)}>Placeholder</button>
      </div>
    )
  }
}
