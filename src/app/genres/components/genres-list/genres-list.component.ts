import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GenresService } from '../../services/genres.service';
import { IGenre } from '../../interfaces/genre.interface';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.scss'],
})
export class GenresListComponent implements OnInit, OnDestroy {

  public genres: IGenre[] = [];

  private readonly _destroy$ = new Subject<void>();

  constructor(private genresService: GenresService) { }

  public ngOnInit(): void {
    this._getGenres();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _getGenres(): void {
    this.genresService.getGenres()
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((genres) => this.genres = genres);
  }

}
