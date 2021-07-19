import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IAuthor } from '@app/authors';

import { IBookForm } from '../../interfaces/book-form.interface';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent {

  @Input()
  public authors!: IAuthor[] | null;

  @Output()
  public formSubmit = new EventEmitter();

  public book: Partial<IBookForm> = {};

  constructor() { }

  public submit(): void {
    this.formSubmit.emit(this.book);
  }

}
