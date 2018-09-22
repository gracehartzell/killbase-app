exports.up = function(knex, Promise) {
    return knex.schema.createTable('logins', table => {
        table.increments();
        table.string('login_email');
        table
            .foreign('login_email')
            .references('contact_info')
            .inTable('assassins');
        
        table.string('hashed_password')
        table
            .foreign('hashed_password')
            .references('hashed_password')
            .inTable('assassins');
    })
};

exports.down = function(knex, Promise) {
  
};
