import Knex from 'knex';

export async function seed(knex: Knex)
{
  await knex('projects').insert([
    { user_id: 1, title: 'Meu Projeto1'},
    { user_id: 2, title: 'Meu Projeto2'},
    { user_id: 3, title: 'Meu Projeto3'},
  ]);
}