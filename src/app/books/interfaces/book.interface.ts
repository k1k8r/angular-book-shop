import { IGenre } from '@genres/interfaces';
import { IAuthor } from '@authors/interfaces';

export interface IBook {
  id: number;
  description: string;
  author: IAuthor;
  title: string;
  price: number;
  genres: IGenre[];
  previews: any;
  image: string;
  writingDate: Date;
  releaseDate: Date;
}
