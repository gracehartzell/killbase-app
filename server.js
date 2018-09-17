const bodyParser = require('body-parser');
const express = require('express');
const knex = require('./db/knex');
const port = process.env.PORT || 3000;

const app = express();
app.disable('x-powered-by');
app.set('view engine','ejs');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('TEXT');
});



app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
});