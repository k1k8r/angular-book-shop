import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';

import { BooksService } from '../../services/books.service';
import { IBook } from '../../interfaces/book.interface';


@Component({
  selector: 'app-books-list-container',
  templateUrl: './books-list.container.html',
})
export class BooksListContainer {

  public readonly books$!: Observable<IBook[]>;

  constructor(private _bookService: BooksService) {
    this.books$ = this._bookService.list();
  }

}
