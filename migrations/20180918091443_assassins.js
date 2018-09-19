exports.up = function(knex) {
    return knex.schema.createTable('assassins', (table) => {
        table.increments('assassins_id').primary();
        table.string('photo');
        table.string('full_name');
        table.string('code_name');
        table.string('weapon');
        table.string('contact_info');
        table.integer('age');
        table.integer('price');
        table.float('rating');
        table.integer('kills');
        table.integer('open_contracts');
    });
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('assassins')
  };
  