const bodyParser = require('body-parser');
const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;
const knexPath = path.join(__dirname, 'knexfile.js');
const app = express();

const knex = require('./db/knex');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(favicon(path.join(__dirname, 'public', 'gun_favicon.ico')));
app.use(express.static(path.join('public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.disable('x-powered-by');

let assassins = require('./routes/assassins');
app.use(assassins);
const contracts = require('./routes/contracts');
app.use(contracts);

app.get('/', (req, res) => {
    res.render('index');
});

app.use((req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
});

module.exports = app;