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
          <Nav />
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
    },
    serverTest: () => {
      dispatch({
        type: 'server/hello',
        data: 'hello!'
      })
    },
    newGame: () => {
      dispatch({
        type: 'server/NEW_GAME'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
