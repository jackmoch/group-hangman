'use strict'
const express = require('express')
const     app = express()
const    PORT = process.env.PORT || 3000
const    path = require('path')
const  routes = require('./routes/index')


app.set('port', PORT)
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use(routes)

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`)
})
