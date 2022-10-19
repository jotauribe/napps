import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movies.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private repository: Repository<Movie>,
  ) {}

  getMovies(): Promise<Movie[]> {
    return this.repository.find();
  }
}
