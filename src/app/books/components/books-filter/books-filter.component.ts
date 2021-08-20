import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MatDialogRef } from '@angular/material/dialog';

import { IAuthor } from '@app/authors';
import { IGenre } from '@app/genres';
import { IResponse } from '@app/common';

@Component({
  selector: 'app-books-filter',
  templateUrl: './books-filter.component.html',
  styleUrls: ['./books-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksFilterComponent {

  @Input()
  public authorsData!: IResponse<IAuthor> | null;

  @Input()
  public genresData!: IResponse<IGenre> | null;

  public readonly filterForm!: FormGroup;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _formBuilder: FormBuilder,
    private readonly _dialogRef: MatDialogRef<BooksFilterComponent>,
  ) {
    this.filterForm = this._createForm();
  }

  public closeDialog(): void {
    this._dialogRef.close();
  }

  private _createForm(): FormGroup {
    return this._formBuilder.group({
      // author: [null, Validators.required],
      genre: [null, Validators.required],
      // writingDate: [null, Validators.required],
      // maxPrice: [null, Validators.required],
      // minPrice: [null, Validators.required],
    });
  }

}
