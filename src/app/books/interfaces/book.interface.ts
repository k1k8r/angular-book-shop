import { IGenre } from '@genres/interfaces';
import { IAuthor } from '@authors/interfaces';

export interface IBook {
  id: number;
  description: string;
  author: IAuthor;
  author_id: number;
  title: string;
  price: number;
  genres: IGenre[];
  previews: any;
  image: string;
  writing_date: Date;
  release_date: Date;
}
