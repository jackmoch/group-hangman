import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from {this.props.user.hello}</h1>
        <button onClick={() => this.props.setName('hello')}>Hello</button>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
