const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.use('/', express.static(path.resolve(__dirname, '../dist')))

app.get('/', (req, res) => {
    const pathToHTML = path.resolve(__dirname, '../dist/index.html')
    const contentOfHTML = fs.readFileSync(pathToHTML, 'utf-8')
    res.send(contentOfHTML)
})

app.get('*', (req, res) => {
    console.log('visit route')
    const pathToHTML = path.resolve(__dirname, '../dist/index.html')
    const contentOfHTML = fs.readFileSync(pathToHTML, 'utf-8')
    res.send(contentOfHTML)
})

app.listen(9000, () => {
    console.log('dashboard app started on port 9000')
})

module.exports = app
