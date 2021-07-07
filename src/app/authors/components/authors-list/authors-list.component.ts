import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthorsService } from '../../services/authors.service';
import { IAuthor } from '../../interfaces/author.interface';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
})
export class AuthorsListComponent implements OnInit, OnDestroy {

  public authors: IAuthor[] = [];

  private readonly _destroy$ = new Subject<void>();

  constructor(private _authorsService: AuthorsService) { }

  public ngOnInit(): void {
    this._getAuthors();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _getAuthors(): void {
    this._authorsService.getAuthors()
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((authors) => this.authors = authors);
  }

}
