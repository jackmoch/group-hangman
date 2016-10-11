import React from 'react'
import { connect } from 'react-redux'

import Nav from '../components/Nav'

class App extends React.Component {
    render() {
      const childComponents = React.Children.map(this.props.children,
        child => React.cloneElement(child, {
          ...this.props
        }))

      return (
        <div className='container'>
          <Nav {...this.props}/>
          {childComponents}
        </div>
      )
    }
  }

const mapStateToProps = state => {
  return {
    user: state.userReducer,
    client: state.clientReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    guessLetter: letter => {
      dispatch({
        type: 'GUESS_LETTER',
        payload: letter,
        incrementOrDecrement: 1
      })
    },
    newGame: () => {
      dispatch({
        type: 'server/NEW_GAME'
      })
    },
    loadGames: () => {
      dispatch({
        type: 'server/LOAD_GAMES'
      })
    },
    loadGame: id => {
      dispatch({
        type: 'server/LOAD_GAME',
        id
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
