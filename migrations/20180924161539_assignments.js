exports.up = function(knex, Promise) {
    return knex.schema.createTable('assignments', (table) => {
        table.increments();
        table.integer('assassins_id');
        table.integer('contract_id')
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assignments')
};
