const React = require('react')

const DefaultLayout = React.createClass({
  render: function() {
    return (
        <html>
          <head>
          	<meta charset="utf-8" />
          	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
          	<title>Hangman</title>
            <link rel="stylesheet" href="/lib/materialize/dist/css/materialize.min.css"/>
          	<link rel="stylesheet" href="/styles/main.css" />
          </head>
          <body>
            <nav>
              <ul className='nav'>
                <li><a href='/'>Home</a></li>
                <li><a href='/game'>New Game</a></li>
              </ul>
            </nav>
            {this.props.children}
          </body>
        </html>
    )
  }
})

module.exports = DefaultLayout
