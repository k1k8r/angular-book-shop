import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { IAuthor } from '../interfaces/author.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {

  private readonly _authorUrl = 'api/authors';

  constructor(private readonly _http: HttpClient) { }

  public getAuthors(): Observable<IAuthor[]> {
    return this._http.get<IAuthor>(this._authorUrl)
      .pipe(
        pluck('authors'),
      );
  }

}
