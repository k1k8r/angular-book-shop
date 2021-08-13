import { Component, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { IBook } from '../../interfaces/book.interface';
import { IResponse } from '../../../common/interfaces/response.interface';
import { BooksFilterContainer } from '../../containers/books-filter/books-filter.container';

@Component({
  selector: 'app-book-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {

  @Input()
  public booksData!: IResponse<IBook> | null;

  constructor(private readonly _matDialog: MatDialog) {
  }

  public openDialog(): void {
    const dialogRef = this._matDialog.open(BooksFilterContainer, {
      width: '600px',
      height: '600px',
    });
  }

}
