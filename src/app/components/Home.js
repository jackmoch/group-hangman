import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <button className='btn' onClick={() => this.props.serverTest()}>
          <Link to={'/game'}>New Game</Link>
        </button>
      </div>
    )
  }
}
