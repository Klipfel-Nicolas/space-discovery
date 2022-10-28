const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser');
var hbs = require('hbs');

const app = express()

app.use(express.static(path.resolve(__dirname, '../../dist')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));



app.get('/', (req, res) => {

    /* const pathToHtmlFile = path.resolve(__dirname, '../../dist/home.html')
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')

    res.sendFile(contentFromHtmlFile); */

    res.render('index.hbs')
})

app.get('/perseverence/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../../dist/perseverence.html')
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')

    res.send(contentFromHtmlFile)
})

app.listen(3000, () => {
    console.log('Application is running on http://localhost:3000/')
})