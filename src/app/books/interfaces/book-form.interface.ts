import { IAuthor } from '@app/authors';
import { IGenre } from '@app/genres';

export interface IBookForm {
  description: string;
  author: IAuthor;
  title: string;
  price: number;
  genres: IGenre[];
  writingDate: Date;
  releaseDate: Date;
}
