import { Component, Input } from '@angular/core';

import { IResponse } from '@app/common';

import { IAuthor } from '../../interfaces/author.interface';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
})
export class AuthorsListComponent {

  @Input()
  public authorsData!: IResponse<IAuthor> | null;

}
