import { IGenre } from '@genres/index';

export interface IBook {
  id: number;
  description: string;
  author_id: number;
  title: string;
  price: number;
  genres: IGenre[];
  previews: any;
  image: string;
  writing_date: Date;
  release_date: Date;
}
