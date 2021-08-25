import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { IResponse } from '@app/common';

import { IBook, IBookForm } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  public books$ = new Subject<IResponse<IBook>>();

  private readonly _booksListUrl = 'api/books';

  public constructor(
    private readonly _httpClient: HttpClient) { }

  public list(options: any): Observable<IResponse<IBook>> {

    return this._httpClient.get<IResponse<IBook>>(this._booksListUrl, { params: options });
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
