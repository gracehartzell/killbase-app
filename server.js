const bodyParser = require('body-parser');
const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;

const knexPath = path.join(__dirname, 'knexfile.js');
const knex = require('./db/knex');

// const assassins = require('./routes/assassins');
// const contracts = require('./routes/contracts');

const app = express();
app.use(favicon(path.join(__dirname, 'public', 'gun_favicon.ico')));
app.use(express.static(path.join('public')));
app.disable('x-powered-by');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(assassins);
// app.use(contracts);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/assassins', (req, res) => {
    res.render('../assassins');
});

app.use((req, res) => {
    res.sendStatus(404);
})

app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
});

module.exports = app;