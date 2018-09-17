const knex = require('knex')(process.env.NODE_ENV || 'development');

module.exports = knex;