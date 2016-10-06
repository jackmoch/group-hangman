const React = require('react')
const DefaultLayout = require('./layouts/master')

const GameComponent = React.createClass({
	handleSubmit: function(e) {
			console.log('handleSubmit', e)
		},

	render: function() {
		return(
			<DefaultLayout name={this.props.name}>
				<div>
					<h1>XXXXX</h1>
					<input type='text'  value={this.props.name} onChange={this.handleSubmit}/>
					<button onClick={() => console.log('hello')}>Submit</button>
				</div>
			</DefaultLayout>
		)
	}
})

module.exports = GameComponent
