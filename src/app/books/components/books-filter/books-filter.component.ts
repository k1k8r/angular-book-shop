import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MatDialogRef } from '@angular/material/dialog';

import { IAuthor } from '@app/authors';
import { IGenre } from '@app/genres';

import { IResponse } from '../../../common/interfaces/response.interface';

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

  @Output()
  public dialogSubmit$ = new EventEmitter();

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

  public filter(): void {
    this._router.navigate([], { relativeTo: this._activatedRoute, queryParams: {
      author: this.filterForm.value.author,
      genre: this.filterForm.value.genre,
      maxPrice: this.filterForm.value.maxPrice,
      minPrice: this.filterForm.value.minPrice,
    }});

    this.closeDialog();
  }

  public submit(): void {
    this.dialogSubmit$.emit(this.filterForm.value);
  }

  private _createForm(): FormGroup {
    return this._formBuilder.group({
      author: ['', Validators.required],
      genre: ['', Validators.required],
      maxPrice: ['', Validators.required],
      minPrice: ['', Validators.required],
    });
  }

}
