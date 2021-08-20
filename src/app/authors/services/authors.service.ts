import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IResponse } from '@app/common';

import { IAuthor } from '../interfaces';


@Injectable({
  providedIn: 'root',
})
export class AuthorsService {

  private readonly _baseUrl = 'api/authors';

  constructor(private readonly _httpClient: HttpClient) { }

  public list(): Observable<IResponse<IAuthor>> {
    return this._httpClient.get<IResponse<IAuthor>>(this._baseUrl);
  }

  public view(id: number): Observable<IAuthor> {
    const authorUrl = `${this._baseUrl}/${id}`;

    return this._httpClient.get<IAuthor>(authorUrl);
  }

}
