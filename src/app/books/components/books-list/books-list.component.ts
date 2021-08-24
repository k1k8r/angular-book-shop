import { Component, Input, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IResponse } from '@app/common';

import { IBook } from '../../interfaces/book.interface';
import { BooksFilterContainer } from '../../containers/books-filter/books-filter.container';
import { BooksService } from '../../services/books.service';
import { IFilterDialog } from '../../interfaces/book-filter.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksListComponent implements OnDestroy {

  @Input('books')
  public books$!: Observable<IResponse<IBook>>;

  @Output()
  public changePage$ = new EventEmitter<HttpParams>();

  @Output()
  public closeDialog$ = new EventEmitter();

  private readonly _destroy$ = new Subject<void>();

  constructor(
    private readonly _location: Location,
    private readonly _router: Router,
    private readonly _matDialog: MatDialog,
    private readonly _bookService: BooksService,
    ) {
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public openDialog(): void {
    const dialogRef = this._matDialog.open(BooksFilterContainer, {
      width: '600px',
      height: '600px',
    });

    dialogRef.afterClosed()
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((queryParams) => {
        this._router.navigate([], {
          queryParams: { genres: queryParams.genre },
          queryParamsHandling: 'merge',
        });
        this.closeDialog$.emit(queryParams);
      });
  }

  public onPageChange(event: PageEvent): void {
    const params = new HttpParams().appendAll({
      page: `${event.pageIndex + 1}`,
      limit: `${event.pageSize}`,
    });

    this._location.replaceState(
      location.pathname,
      params.toString(),
    );

    this.changePage$.emit(params);
  }

}
