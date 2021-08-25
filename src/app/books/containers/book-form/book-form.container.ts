import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IAuthor, AuthorsService } from '@app/authors';

import { BooksService } from '../../services/books.service';
import { IBookForm } from '../../interfaces/book-form.interface';
import { IResponse } from '../../../common/interfaces/response.interface';

@Component({
  selector: 'app-book-form-container',
  templateUrl: './book-form.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookFormContainer implements OnDestroy {

  public authorsData$!: Observable<IResponse<IAuthor>>;
  private readonly _destroy$ = new Subject();

  constructor(
    private readonly _booksService: BooksService,
    private readonly _authorsService: AuthorsService,
  ) {
    this.authorsData$ = this._authorsService.list();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public create(formData: IBookForm): void {
    const authorId = +formData.author;

    this._booksService.create(authorId, formData)
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe();
  }


}
