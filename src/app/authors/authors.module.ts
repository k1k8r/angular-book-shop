import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import {
  AuthorsListComponent,
  AuthorDetailsComponent,
  CreateBookComponent,
} from './components';
import {
  AuthorsListContainer,
  AuthorDetailsContainer,
  CreateBookContainer,
} from './containers';


@NgModule({
  declarations: [
    AuthorsListComponent,
    AuthorDetailsComponent,
    CreateBookComponent,
    AuthorsListContainer,
    AuthorDetailsContainer,
    CreateBookContainer,
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
  ],
})
export class AuthorsModule { }
