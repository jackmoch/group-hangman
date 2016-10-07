'use strict'
const    PORT = process.env.PORT || 3000

const { createServer } = require('http')
const server = createServer()
const socket_io = require('socket.io')

server.listen(PORT)
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/hangman'

const io = socket_io()
io.attach(server)

const mongoose = require('mongoose')
mongoose.Promise = Promise

mongoose.connect(MONGODB_URL, () => {
	console.log('Mongod Connected')
}) 

const Game = mongoose.model('Game', {
	wordToGuess: String,
})

io.on('connection', socket => {

	console.log(socket.handshake.headers.referer.split('/').slice(-1)[0])

  console.log(`Socket connected: ${socket.id}`)
  socket.on('action', action => {
  	switch (action.type) {
  		case "server/NEW_GAME":
  			Game.create({
  				wordToGuess: 'test'
  			})
  			.then(game => socket.emit('action', {type: 'NEW_GAME', data: game._id}))
  	}
    console.log('ACTION',action)
    if(action.type === 'server/hello') {
      console.log('GOT DATA!', action.data)
      socket.emit('action', {type: 'MESSAGE', data: 'good day!'})
    }
  })
  socket.on('disconnect', () => console.log(`Socket disconnected: ${socket.id}`))
})
