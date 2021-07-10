import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthorsService } from '../../services/authors.service';
import { IAuthor } from '../../interfaces/author.interface';

@Component({
  selector: 'app-authors-list-container',
  templateUrl: './authors-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsListContainer {

  public readonly authors$!: Observable<IAuthor[]>;

  constructor(private _authorsService: AuthorsService) {
    this.authors$ = this._authorsService.list();
  }

}
