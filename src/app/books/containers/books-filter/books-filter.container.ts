import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthorsService, IAuthor } from '@app/authors';
import { IGenre, GenresService } from '@app/genres';

import { IResponse } from '../../../common/interfaces/response.interface';

@Component({
  selector: 'app-books-filter-container',
  templateUrl: './books-filter.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksFilterContainer {

  public _authorsData$!: Observable<IResponse<IAuthor>>;
  public _genresData$!: Observable<IResponse<IGenre>>;

  constructor(
    private readonly _authorsService: AuthorsService,
    private readonly _genresService: GenresService,
  ) {
    this._authorsData$ = this._authorsService.list();
    this._genresData$ = this._genresService.list();
  }

}
