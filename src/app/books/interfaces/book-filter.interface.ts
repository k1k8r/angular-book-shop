import { IAuthor } from '@app/authors';
import { IGenre } from '@app/genres';

export interface IFilterDialog {
  author: IAuthor[];
  genres: IGenre[];
  maxPrice: number;
  minPrice: number;
}
