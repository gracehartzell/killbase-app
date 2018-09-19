const express = require('express');
const router = express.Router();
// const path = require('path');
const knex = require('../db/knex');

router.get('/assassins', (req, res) => {
    knex('assassins')
    .then((assassins) => {
        res.send(assassins)
    });
});