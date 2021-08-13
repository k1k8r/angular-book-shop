import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IGenre } from '../interfaces/genre.interface';

import { IResponse } from './../../common/interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class GenresService {

  private readonly _genresListUrl = 'api/genres';

  constructor(private readonly _httpClient: HttpClient) { }

  public list(): Observable<IResponse<IGenre>> {
    return this._httpClient.get<IResponse<IGenre>>(this._genresListUrl);
  }

}
