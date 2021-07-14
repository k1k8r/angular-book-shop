import { Component, Output, EventEmitter, Input } from '@angular/core';

import { IAuthor } from '@authors/interfaces';
import { IBook } from '@books/interfaces';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
})
export class BookCreateComponent {

  @Input()
  public authors!: IAuthor[] | null;

  @Output()
  public formData = new EventEmitter();

  public book: Partial<IBook> = {};

  public submit(): void {
    this.formData.emit(this.book);
  }

}
