exports.up = function(knex) {
  return knex.schema.createTable('contracts', (table) => {
      table.increments('contract_id').primary();
      table.string('Target Name').notNullable();
      table.string('Target Location');
      table.string('Target Photo').notNullable();
      table.integer('Target Security').notNullable();
      table.string('Client Name').notNullable();
      table.integer('Budget').notNullable();
      table.boolean('Completed');
    //   table.integer('Completed By').references('assassin_id').inTable('assassins').nullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('contracts');
};
