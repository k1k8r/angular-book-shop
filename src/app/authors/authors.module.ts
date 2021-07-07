import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { AuthorsListContainer } from './containers/authors-list/authors-list.container';


@NgModule({
  declarations: [
    AuthorsListComponent,
    AuthorsListContainer,
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
  ],
})
export class AuthorsModule { }
