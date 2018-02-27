// Initialize node with express
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config/database')
const port = 8080

// Connecting to the database
mongoose.connect(config.uri, (err) => {
    if(err) {
        console.log('Error connecting to the database', err)
    } else {
        console.log('Successfully connected to the database')
    }
})

// Routes
app.get('/', (req, res) => {
    res.send('Hello world')
})

// Listening to the server
app.listen(port, () => {
    console.log('App listening on port ' + port)
})