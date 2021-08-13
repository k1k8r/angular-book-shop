import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { BooksRoutingModule } from './books-routing.module';
import {
  BooksListComponent,
  BookDetailsComponent,
  BookFormComponent,
} from './components';
import {
  BooksListContainer,
  BookDetailsContainer,
  BookFormContainer,
} from './containers';
import { BooksFilterComponent } from './components/books-filter/books-filter.component';
import { BooksFilterContainer } from './containers/books-filter/books-filter.container';


@NgModule({
  declarations: [
    BooksListComponent,
    BookDetailsComponent,
    BookFormComponent,
    BooksListContainer,
    BookDetailsContainer,
    BookFormContainer,
    BooksFilterComponent,
    BooksFilterContainer,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class BooksModule { }
