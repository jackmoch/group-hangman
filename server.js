'use strict'
const    PORT = process.env.PORT || 3000

const { createServer } = require('http')
const server = createServer()
const socket_io = require('socket.io')

server.listen(PORT)

const io = socket_io()
io.attach(server)


io.on('connection', socket => {
  console.log(`Socket connected: ${socket.id}`)

  socket.on('disconnect', () => console.log(`Socket disconnected: ${socket.id}`))
})
