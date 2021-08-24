import { Component, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MatDialogRef } from '@angular/material/dialog';

import { Observable, Subject } from 'rxjs';

import { IAuthor } from '@app/authors';
import { IGenre } from '@app/genres';

@Component({
  selector: 'app-books-filter',
  templateUrl: './books-filter.component.html',
  styleUrls: ['./books-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksFilterComponent implements OnDestroy {

  @Input('authors')
  public authorsData$!: Observable<IAuthor[]>;

  @Input('genres')
  public genresData$!: Observable<IGenre[]>;

  public readonly filterForm!: FormGroup;

  private readonly _destroy$ = new Subject<void>();


  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _formBuilder: FormBuilder,
    private readonly _dialogRef: MatDialogRef<BooksFilterComponent>,
  ) {
    this.filterForm = this._createForm();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public closeDialog(): void {
    this._dialogRef.close();
  }

  public submit(): void {
    this._dialogRef.close(this.filterForm.value);
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
