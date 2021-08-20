import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { IResponse } from '@app/common';

import { GenresService } from '../../services/genres.service';
import { IGenre } from '../../interfaces/genre.interface';

@Component({
  selector: 'app-genres-list-container',
  templateUrl: './genres-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenresListContainer {

  public readonly genresData$!: Observable<IResponse<IGenre>>;

  constructor(private _genresService: GenresService) {
    this.genresData$ = this._genresService.list();
  }

}
