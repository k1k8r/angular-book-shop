import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent, BookDetailsComponent } from './components';
import { BooksListContainer } from './containers/books-list/books-list.container';


@NgModule({
  declarations: [
    BooksListComponent,
    BookDetailsComponent,
    BooksListContainer,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
  ],
})
export class BooksModule { }
