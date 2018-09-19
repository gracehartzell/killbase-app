const environment = 'development';
const config = require('../knexfile.js')[environment];
const knex = require('knex')(config);


// const knex = require('knex')(process.env.NODE_ENV || 'development');

module.exports = knex;