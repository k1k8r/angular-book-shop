import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import {
  AuthorsListComponent,
  AuthorDetailsComponent,
} from './components';
import {
  AuthorsListContainer,
  AuthorDetailsContainer,
} from './containers';


@NgModule({
  declarations: [
    AuthorsListComponent,
    AuthorDetailsComponent,
    AuthorsListContainer,
    AuthorDetailsContainer,
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
  ],
})
export class AuthorsModule { }
