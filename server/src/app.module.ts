import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';
import { dataSourceOptions } from 'src/orm.config';

@Module({
  imports: [
    MoviesModule,
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
})
export class AppModule {}
