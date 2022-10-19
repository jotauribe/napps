import { Movie } from './movies/movies.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import path from 'path';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'movies',
  entities: [Movie],
  synchronize: true,
  migrations: [path.join(__dirname, "..", "/migrations/**/*.ts")]
};

export default new DataSource(dataSourceOptions);
