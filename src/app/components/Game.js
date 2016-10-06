import React from 'react'

export default class Game extends React.Component {
  render() {
    const {
      props, populateArray,
      testLetter, clearInputs } = this
    const { user, guessLetter } = props

    let letter
    const handleChange = ({target}) => {
       letter = target.value.length === 1
        ? target.value
        : target.value.slice(0,1)
     }
    ;(user.guessArray.length === 0) ? populateArray(user) : null
    testLetter(user)

    return (
      <div>
        <h3>Turns remaining: {user.turns}</h3>
        {user.guessArray.map((v = _,i) => <span key={i}>{v}</span>)}
        <input type='text' onChange={handleChange} onBlur={clearInputs} placeholder='your letter here'/>
        <button onClick={() => guessLetter(letter)}>Placeholder</button>
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
}
