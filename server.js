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
	state: {
		letter: {type: String, default: ''},
		word: {type: String, default: 'wood'},
		turns: {type: Number, default: 6},
		guessArray: {type: Array, default: []}
	},
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
				.catch(err => {
					socket.emit({type:'ERROR', msg: err.stack})
					console.error(err.stack)
				})
			case "server/LOAD_GAMES":
				Game.find({})
				.then(games => {
					const gameIds = games.map(game => game._id)
					socket.emit('action', {type: 'GAMES_LIST', data: gameIds})
				})
				.catch(console.error)
			default:
				break
  	}
  })
  socket.on('disconnect', () => console.log(`Socket disconnected: ${socket.id}`))
})
