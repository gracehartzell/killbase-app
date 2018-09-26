exports.up = function(knex) {
  return knex.schema.createTable('contracts', (table) => {
      table.increments('contract_id').primary();
      table.string('target_name');
      table.string('target_location');
      table.string('target_photo');
      table.integer('target_security');
      table.string('client_name');
      table.integer('budget');
      table.boolean('completed');
      table.string('completed_by');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('contracts');
};
