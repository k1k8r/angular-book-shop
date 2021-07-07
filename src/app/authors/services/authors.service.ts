import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { IAuthor } from '../interfaces/author.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {

  private readonly _authorsListUrl = 'api/authors';

  constructor(private readonly _httpClient: HttpClient) { }

  public list(): Observable<IAuthor[]> {
    return this._httpClient.get<IAuthor>(this._authorsListUrl)
      .pipe(
        pluck('authors'),
      );
  }

}
