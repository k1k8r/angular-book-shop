import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { BooksService } from '../../services/books.service';
import { IBook } from '../../interfaces/book.interface';
import { IResponse } from '../../../common/interfaces/response.interface';
import { IFilterDialog } from '../../interfaces/book-filter.interface';


@Component({
  selector: 'app-books-list-container',
  templateUrl: './books-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksListContainer {

  public readonly booksData$!: Observable<IResponse<IBook>>;

  constructor(private _bookService: BooksService) {
    this.booksData$ = this._bookService.list();
  }

  public submit(filterData: IFilterDialog): void {
  }

}
