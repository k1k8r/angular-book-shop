import { IMeta } from './meta.interface';

type Entities = 'books' | 'authors' | 'genres';

export interface IResponse<T> extends Record<Entities, T[]> {
  meta?: IMeta;
}

