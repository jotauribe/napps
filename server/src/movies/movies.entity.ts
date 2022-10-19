import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movies' })
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  year: number;

  @Column()
  type: string;

  @Column({ name: 'poster_image_url' })
  posterImageUrl: string;
}
