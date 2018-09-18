exports.up = function(knex) {
    return knex.schema.createTable('assassins', (table) => {
        table.increments('assassins_id').primary();
        table.string('photo').notNullable();
        table.string('full_name').nullable();
        table.string('code_name').nullable();
        table.string('weapon').notNullable();
        table.string('contact_info').notNullable();
        table.integer('age').notNullable();
        table.integer('price').notNullable();
        table.float('rating').notNullable();
        table.integer('kills').notNullable();
        table.integer('open_contracts').nullable();
    });
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('assassins')
  };
  