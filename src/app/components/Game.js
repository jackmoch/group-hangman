import React from 'react'

export default class Game extends React.Component {
  render() {
    let letter
    const {user} = this.props
    const handleChange = function(e) {
       letter = e.target.value
    }
    const populateArray = function (){
      user.word.split('').forEach(v => user.guessArray.push(' _ '))
    }
    if(user.guessArray.length === 0) {
      populateArray()
    }
    const testLetter = function() {
      user.word.split('').forEach((v,i) => {
        if(user.letter.toLowerCase() === v.toLowerCase()) {
          user.guessArray.splice(i, 1, ` ${v} `)
        }
      })
    }()
    const clearInputs = function(e) {
      e.target.value = ''
    }
    return (
      <div>
        <h3>Turns remaining: {user.turns}</h3>
        {user.guessArray.map((v = _,i) => <span key={i}>{v}</span>)}
        <input type='text' onChange={handleChange} onBlur={clearInputs} placeholder='your letter here'/>
        <button onClick={() => this.props.guessLetter(letter)}>Placeholder</button>
      </div>
    )
  }
}
