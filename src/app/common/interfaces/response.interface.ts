import { IMeta } from './meta.interface';

type keys = 'books' | 'authors' | 'genres';

export interface IResponse<T> extends Record<keys, T[]> {
  meta: IMeta;
}

