import React from 'react'
import { connect } from 'react-redux'

import Game from '../components/Game'
import Nav from '../components/Nav'

class App extends React.Component {
    render() {
      return (
        <div className='container'>
          <Nav />
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
