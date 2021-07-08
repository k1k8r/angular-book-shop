import { IGenre } from '@genres/.';
import { IAuthor } from '@authors/.';

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
