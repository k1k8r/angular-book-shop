import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { IResponse } from '@app/common';

import { AuthorsService } from '../../services/authors.service';
import { IAuthor } from '../../interfaces/author.interface';

@Component({
  selector: 'app-authors-list-container',
  templateUrl: './authors-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsListContainer {

  public readonly authorsData$!: Observable<IResponse<IAuthor>>;

  constructor(private _authorsService: AuthorsService) {
    this.authorsData$ = this._authorsService.list();
  }

}
