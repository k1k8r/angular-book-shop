import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooksService } from '../../services/books.service';
import { IBook } from '../../interfaces/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit, OnDestroy {

  public books: IBook[] = [];

  private readonly _destroy$ = new Subject<void>();

  constructor(private _bookService: BooksService) { }

  public ngOnInit(): void {
    this._getBooks();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _getBooks(): void {
    this._bookService.getBooks()
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((books) => this.books = books);
  }

}
