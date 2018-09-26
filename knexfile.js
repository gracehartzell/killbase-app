// Update with your config settings.
module.exports = {
  
development: {
    client: 'pg',
    connection: 'postgres://localhost/assassins_dev'
  },

production: {
    client: `pg`,
    connection: `postgres://hnskxlkgacthwz:642a0107954097803e7a6ade982f76396a95950137baaa339475c5919d724ef3@ec2-174-129-32-37.compute-1.amazonaws.com:5432/d9j6f567en260q`
  },

test: {
  client: 'pg',
  connection: 'postgres://localhost/killbase_test'
  }
  
};
