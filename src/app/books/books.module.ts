import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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


@NgModule({
  declarations: [
    BooksListComponent,
    BookDetailsComponent,
    BookFormComponent,
    BooksListContainer,
    BookDetailsContainer,
    BookFormContainer,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class BooksModule { }
