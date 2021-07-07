import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { IBook } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  private readonly _booksUrl = 'api/books';

  public constructor(private readonly _http: HttpClient) { }

  public list(): Observable<IBook[]> {
    return this._http.get<IBook>(this._booksUrl)
      .pipe(
        pluck('books'),
      );
  }

  public view(id: number): Observable<IBook> {
    const currentBookUrl = `${this._booksUrl}/${id}`;

    return this._http.get<IBook>(currentBookUrl);
  }

}
