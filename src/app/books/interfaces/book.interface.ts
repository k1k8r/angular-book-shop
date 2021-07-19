import { IGenre } from '@app/genres';
import { IAuthor } from '@app/authors';

export interface IBook {
  id: number;
  description: string;
  authorId: number;
  author: IAuthor;
  title: string;
  price: number;
  genres: IGenre[];
  previews: any;
  image: string;
  writingDate: Date;
  releaseDate: Date;
}
