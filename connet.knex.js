const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3050,
      user : 'root',
      password : '',
      database : 'vendor'
    }
  });

  module.exports = knex