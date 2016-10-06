const React = require('react')
const DefaultLayout = require('./layouts/master')



const Index = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name}>
        <div name={this.props.name}>
          <h1>This is built using React {this.props.name}</h1>
        </div>
      </DefaultLayout>
    )
  }
})

module.exports = Index
