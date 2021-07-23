import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { IBook } from '../interfaces';
import { IResponse } from '../../common/interfaces/response.interface';
import { IBookForm } from '../interfaces/book-form.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  private readonly _booksListUrl = 'api/books';

  public constructor(private readonly _httpClient: HttpClient) { }

  public list(): Observable<IBook[]> {
    return this._httpClient.get<IResponse<'books', IBook>>(this._booksListUrl)
      .pipe(
        pluck('books'),
      );
  }

  public view(id: number): Observable<IBook> {
    const currentBookUrl = `${this._booksListUrl}/${id}`;

    return this._httpClient.get<IBook>(currentBookUrl);
  }

  public create(authorId: number, formData: IBookForm): Observable<IBook> {
    const authorLink = `api/authors/${authorId}/books`;

    return this._httpClient.post<IBook>(authorLink, formData);
  }

}
