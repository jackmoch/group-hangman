const React = require('react')
const DefaultLayout = require('./layouts/master')

const GameComponent = React.createClass({
	render: function() {
		return(
			<DefaultLayout name={this.props.name}>
				<div>
					<h1>XXXXX</h1>
					<input/>
				</div>
			</DefaultLayout>
		)
	}
})

module.exports = GameComponent