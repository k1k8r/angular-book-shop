import { IBook } from '@books/interfaces';

export interface IAuthor {
  id: number;
  firstName: string;
  lastName: string;
  books: IBook[];
}
