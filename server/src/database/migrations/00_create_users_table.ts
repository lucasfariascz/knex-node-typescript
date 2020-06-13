import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('name').unique().notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at');
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('users');
}