import React from 'react'

export default class Game extends React.Component {
  render() {
    let letter
    const handleChange = function(e) {
       letter = e.target.value
    }
    const word = 'word'
    return (
      <div>
        <h3>Turns remaining: XXXXXX</h3>
        {word.split('').map((v,i) => <span key={i}>_ </span>)}
        <input type='text' onChange={handleChange}/>
        <button onClick={() => this.props.guessLetter(letter)}>Placeholder</button>
      </div>
    )
  }
}
