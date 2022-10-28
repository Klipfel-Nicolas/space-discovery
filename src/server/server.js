const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser');
var hbs = require('express-handlebars');

const app = express()

app.use(express.static(path.resolve(__dirname, '../../dist')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Handelbars Config
app.set('views', path.join(__dirname, '../views'));
app.engine( 'hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '../views'),
    partialsDir: path.join(__dirname, '../views/partials/'),
}))
app.set('view engine', 'hbs');

/**
 * Home Page
 */
app.get('/', (req, res) => {

    res.render('main.hbs', {
        title: 'Space Discovery',
        template: 'home',
        // Dynamic template handelbars
        whichPartial: function() {
            return "pages/home";
        }
    })
})

/**
 * Perseverence Page
 */
app.get('/perseverence/', (req, res) => {

    res.render('main.hbs', {
        title: 'Perseverence',
        template: 'perseverence',
        whichPartial: function() {
            return "pages/perseverence";
        }
    })
})


app.listen(3000, () => {
    console.log('Application is running on http://localhost:3000/')
})