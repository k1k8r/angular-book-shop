import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { AuthorsService, IAuthor } from '@app/authors';
import { IGenre, GenresService } from '@app/genres';

import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-filter-container',
  templateUrl: './books-filter.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksFilterContainer {

  public authorsData$!: Observable<IAuthor[]>;
  public genresData$!: Observable<IGenre[]>;

  constructor(
    private readonly _booksService: BooksService,
    private readonly _authorsService: AuthorsService,
    private readonly _genresService: GenresService,
  ) {
    this.authorsData$ = this._authorsService.list()
      .pipe(
        pluck('authors'),
      );
    this.genresData$ = this._genresService.list()
      .pipe(
        pluck('genres'),
      );
  }

}
