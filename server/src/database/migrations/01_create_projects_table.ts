import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('projects', table => {
    table.increments('id');
    table.text('title');
    table.integer('user_id')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('projects');
}