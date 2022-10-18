import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies/movies.entity';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    MoviesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'movies',
      entities: [Movie],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
