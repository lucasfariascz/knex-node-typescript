import path from 'path';
import knex from 'knex';

const connection = knex({
  client: 'pg',
  connection: {
    database: 'knex_test',
    user:     'knex',
    password: '123'
  },
});
console.log(path.resolve(__dirname, '..', '..', 'knexfile'));
export default connection;