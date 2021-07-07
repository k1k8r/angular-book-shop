import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { IGenre } from '../interfaces/genre.interface';

@Injectable({
  providedIn: 'root',
})
export class GenresService {

  private readonly _genreUrl = 'api/genres';

  constructor(private readonly _http: HttpClient) { }

  public getGenres(): Observable<IGenre[]> {
    return this._http.get<IGenre>(this._genreUrl)
      .pipe(
        pluck('genres'),
      );
  }

}
