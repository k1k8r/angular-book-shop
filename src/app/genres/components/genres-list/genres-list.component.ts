import { Component, Input } from '@angular/core';

import { IGenre } from '../../interfaces/genre.interface';
import { IResponse } from '../../../common/interfaces/response.interface';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.scss'],
})
export class GenresListComponent {

  @Input()
  public genresData!: IResponse<IGenre> | null;

}
