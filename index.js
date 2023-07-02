const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('dist'))

app.get('*', (req, res) => {
    res.sendFile('micro-pets.html', {root: path.join(__dirname, 'dist')});
})

app.listen(9000, () => {
    console.log('dashboard app started on port 9000')
})

module.exports = app
