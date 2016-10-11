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
  			Game.create({})
  			.then(game => {
					const gameState = Object.assign({}, {
						id: game._id,
						guessArray: game.state.guessArray,
						turns: game.state.turns,
						letter: game.state.letter,
						word: game.state.word
					})
					gameState.word.split('').forEach(v => gameState.guessArray.push(' _ '))
					return game.save()
				})
				.then(g => socket.emit('action', {type: 'NEW_GAME', data: g.state}))
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
			case "server/LOAD_GAME":
				Game.find({_id: action.id})
				.then(game => socket.emit('action', {type:'GAME_LOADED', data: game}))
				.catch(console.error)
			case "server/GUESS_LETTER":
				Game
					.findOne({_id: action.id})
					.then(game => {
						const gameState = Object.assign({}, {
							id: game._id,
							guessArray: game.state.guessArray,
							turns: game.state.turns,
							letter: game.state.letter,
							word: game.state.word
						})
						gameState.word.split('').forEach((v,i) => {
				      if(action.letter.toLowerCase() === v.toLowerCase()) {
				        gameState.guessArray.splice(i, 1, ` ${v} `)
				      }
				    })
						return game.save()
					})
					.then(g => socket.emit('action', {type: 'GAME_UPDATE', data: g.state}))
					.catch(console.error)
			default:
				break
  	}
  })
  socket.on('disconnect', () => console.log(`Socket disconnected: ${socket.id}`))
})
