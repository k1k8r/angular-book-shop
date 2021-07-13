import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { IAuthor } from '@authors/interfaces';

import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-author-details-container',
  templateUrl: './author-details.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorDetailsContainer {

  public readonly author$!: Observable<IAuthor>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authorsService: AuthorsService,
    ) {
    const authorId = +this._activatedRoute.snapshot.params.id;

    this.author$ = this._authorsService.view(authorId);
  }

}
