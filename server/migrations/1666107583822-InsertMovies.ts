import axios from 'axios';
import { MigrationInterface, QueryRunner } from 'typeorm';

const endpointUrl = 'http://www.omdbapi.com/?apikey=5eec5adc';

export class InsertMovies1666107583822 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const fetchAllMovies = async (acc = [], page = 1) => {
      const response = await axios.get(
        `${endpointUrl}&y=2020&s=love&page=${page}`,
      );
      const movies = acc.concat(response.data.Search);
      if (acc.length >= response.data.totalResults || page > 10) return movies;
      else return fetchAllMovies(movies, page + 1);
    };

    const movies = await fetchAllMovies();
    const values = movies.reduce(
      (values, movie) => [
        ...values,
        `('${movie.Title.replace("'", "''") || 'No title'}', 2020, '${
          movie.Type
        }', '${movie.Poster}')`,
      ],
      [],
    );
    return queryRunner.query(
      `INSERT INTO movies (name, year, type, poster_image_url) VALUES ${values.join(
        ', ',
      )};`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.query('DELETE FROM movies');
  }
}
