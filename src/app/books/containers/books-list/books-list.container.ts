import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

import { IResponse } from '@app/common';

import { BooksService } from '../../services/books.service';
import { IBook } from '../../interfaces/book.interface';

@Component({
  selector: 'app-books-list-container',
  templateUrl: './books-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksListContainer implements OnInit {

  public booksData$!: Observable<IResponse<IBook>>;

  public books$ = new Subject<IResponse<IBook>>();
  public queryParams = {
    page: 1,
    limit: 10,
  };

  constructor(private _bookService: BooksService) {}

  public ngOnInit(): void {
    this.getBooks();
  }

  public getBooks(): void {
    this.booksData$ = this.books$.asObservable()
      .pipe(
      startWith(''),
      switchMap(() => {
        return this._bookService.list(this.queryParams);
      }),
    );
  }

  public changePage(data: HttpParams): void {
    this.queryParams.page = +data.get('page')!;
    this.queryParams.limit = +data.get('limit')!;

    this.books$.next();
  }

}
