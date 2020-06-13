import Knex from 'knex';

export async function seed(knex: Knex)
{
  await knex('users').insert([
    { name: 'Lucas' },
    { name: 'Jerliane' },
    { name: 'Daniel' },
  ]);
}