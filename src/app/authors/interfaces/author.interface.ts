import { IBook } from '@app/books';

export interface IAuthor {
  id: number;
  firstName: string;
  lastName: string;
  books: IBook[];
}
