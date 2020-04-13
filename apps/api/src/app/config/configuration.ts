import { join } from 'path';
import { TodoEntity } from '../todo/todo.entity';

const SOURCE_PATH = join(__dirname, '..', '**', '*.entity{.ts,.js}');

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3333,
  database: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
  orm: {
    entities: [TodoEntity], // SOURCE_PATH not working
    synchronize: false,
    migrationsTableName: 'migration',
    migrations: ['apps/api/src/migration/*.ts'],
  },
  cli: {
    migrationsDir: 'apps/api/src/migrations',
  },
});
