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
    user: state.reducer
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
        payload: letter,
        incrementOrDecrement: 1
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
