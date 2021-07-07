import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IBook } from '../../interfaces/book.interface';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  public book!: IBook;

  private readonly _destroy$ = new Subject<void>();

  constructor(
    private _route: ActivatedRoute,
    private _bookService: BooksService,
    ) { }

  public ngOnInit(): void {
    this._getBook();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _getBook(): void {
    const id = +this._route.snapshot.params.id;

    this._bookService.getBook(id)
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((book) => this.book = book);
  }

}
