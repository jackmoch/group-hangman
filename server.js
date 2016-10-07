'use strict'
// const express = require('express')
// const     app = express()
const    PORT = process.env.PORT || 3000
const    path = require('path')



const { createServer } = require('http')
const server = createServer()
const socket_io = require('socket.io')

server.listen(PORT)

const io = socket_io()
io.attach(server)

//
// app.set('port', PORT)
//
//
// app.listen(PORT, () => {
//   console.log(`Now listening on port ${PORT}`)
// })

io.on('connection', socket => {
  console.log(`Socket connected: ${socket.id}`)

  socket.on('disconnect', () => console.log(`Socket disconnected: ${socket.id}`))
})
