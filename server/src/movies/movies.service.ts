import { Injectable } from '@nestjs/common';
import { Movie } from './movies.entity';

@Injectable()
export class MoviesService {
  getMovies(): Movie[] {
    return [];
  }
}
