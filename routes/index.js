'use strict';

const { Router } = require('express')
const      route = Router()

route.get('/', (req, res) => {
	res.render('index', {name: 'React'})
})

route.get('/game', (req,res) => {
	res.render('game', {name: 'React'})
})

module.exports = route