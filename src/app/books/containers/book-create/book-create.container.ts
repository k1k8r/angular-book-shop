import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IAuthor } from '@authors/interfaces';
import { AuthorsService } from '@authors/services';

import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-create-container',
  templateUrl: './book-create.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCreateContainer implements OnDestroy{

  public authors$!: Observable<IAuthor[]>;
  private readonly _destroy$ = new Subject();

  constructor(private _booksService: BooksService, private _authorsService: AuthorsService) {
    this.authors$ = this._authorsService.list();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public submit(formData: any): void {
    const id = formData.author;

    this._booksService.create(id, formData)
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe();
  }


}
