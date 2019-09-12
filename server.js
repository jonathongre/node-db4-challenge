const express = require('express')

const server = express();

const RecipeRouter = require('./routes/recipeRouter')

server.use('/api/recipes', RecipeRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'api up'})
})

module.exports = server;