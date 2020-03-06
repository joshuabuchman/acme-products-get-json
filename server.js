const express = require('express')

const fs = require('fs')

const path = require('path')

const db = require('./db')

const app = express()

app.get('/api/products', (req, res, next) => 
{
    db.readJSON('./products.json')
    .then(response => res.send(response))
    .catch(next)
})

app.get('/', (req, res, next) => 
{
    res.sendFile(path.join(__dirname, 'index.html'))
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`))
