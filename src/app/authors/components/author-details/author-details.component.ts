import { Component, Input } from '@angular/core';

import { IAuthor } from '../../interfaces';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss'],
})
export class AuthorDetailsComponent {

  @Input()
  public author!: IAuthor | null;

}
