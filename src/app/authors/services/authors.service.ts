import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';

import { IAuthor } from '../interfaces/author.interface';

import { IResponse } from './../../common/interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {

  private readonly _authorsListUrl = 'api/authors';

  constructor(private readonly _httpClient: HttpClient) { }

  public list(): Observable<IAuthor[]> {
    return this._httpClient.get<IResponse<'authors', IAuthor>>(this._authorsListUrl)
      .pipe(
        pluck('authors'),
      );
  }

}
