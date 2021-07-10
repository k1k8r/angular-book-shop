import { Component, Input } from '@angular/core';

import { IBook } from '../../interfaces/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {

  @Input()
  public books!: IBook[] | null;

}
