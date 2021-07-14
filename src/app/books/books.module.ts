import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
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
  BookDetailsContainer,
  BookCreateContainer,
} from './containers';


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
    FormsModule,
    BooksRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class BooksModule { }
