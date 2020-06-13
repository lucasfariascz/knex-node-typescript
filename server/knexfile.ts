import path from 'path';
module.exports = {
    client: 'pg',
    connection: {
      database: 'knex_test',
      user:     'knex',
      password: '123'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    onUpdateTrigger: (table: String) => {
      `CREATE TRIGGER ${table}_updated_at
      BEFORE UPDATE ON ${table}
      FOR EACH ROW
      EXECUTE PROCEDURE on_update_timestamp();`
    },
    useNullAsDefault: true
};