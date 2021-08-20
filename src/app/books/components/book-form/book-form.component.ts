import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { IAuthor } from '@app/authors';
import { IResponse } from '@app/common';

import { IBookForm } from '../../interfaces/book-form.interface';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent {

  @Input()
  public authorsData!: IResponse<IAuthor> | null;

  @Output()
  public formSubmit = new EventEmitter<IBookForm>();

  public readonly createBookForm!: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {
    this.createBookForm = this._createForm();
  }

  public submit(): void {
    this.formSubmit.emit(this.createBookForm.value);
  }

  private _createForm(): FormGroup {
    return this._formBuilder.group({
      title: [null],
      description: [null],
      author: [null],
      genres: [null],
      price: [null],
    });
  }

}
