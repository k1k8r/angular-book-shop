import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent, BookDetailsComponent } from './components';
import { BooksListContainer, BookDetailsContainer } from './containers';


@NgModule({
  declarations: [
    BooksListComponent,
    BookDetailsComponent,
    BooksListContainer,
    BookDetailsContainer,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
  ],
})
export class BooksModule { }
