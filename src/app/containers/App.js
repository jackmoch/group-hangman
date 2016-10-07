import React from 'react'
import { connect } from 'react-redux'

import Game from '../components/Game'

class App extends React.Component {
    render() {
      return (
        <div className='container'>
          <h1>Hello from {this.props.user.hello}</h1>
          <button onClick={() => this.props.setName('hello')}>Hello</button>
          <Game {...this.props}/>
        </div>
      )
    }
  }

const mapStateToProps = state => {
  return {
    user: state.reducer,
    guess: state.guessArrayReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch({
        type: 'HELLO',
        payload: name
      })
    },
    guessLetter: letter => {
      dispatch({
        type: 'GUESS_LETTER',
        payload: letter
      })
    },
    userInput: character => {
      dispatch({
        type: 'INPUT',
        payload: character
      })
    },
    pushUnderscores: underscore => {
      dispatch({
        type: 'PUSH_UNDERSCORES',
        payload: underscore
      })
    },
    sliceGuessArray: letter => {
      dispatch({
        type: 'SLICE_GUESS_ARRAY',
        
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
