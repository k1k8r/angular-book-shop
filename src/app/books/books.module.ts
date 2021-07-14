import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { BooksRoutingModule } from './books-routing.module';
import {
  BooksListComponent,
  BookDetailsComponent,
  BookCreateComponent,
} from './components';
import {
  BooksListContainer,
  BookDetailsContainer
} from './containers';
import { BookCreateContainer } from './containers/book-create/book-create.container';


@NgModule({
  declarations: [
    BooksListComponent,
    BookDetailsComponent,
    BookCreateComponent,
    BooksListContainer,
    BookDetailsContainer,
    BookCreateContainer,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class BooksModule { }
