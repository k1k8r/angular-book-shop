import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { BooksRoutingModule } from './books-routing.module';
import {
  BooksListComponent,
  BookDetailsComponent,
  BookFormComponent,
  BooksFilterComponent,
} from './components';
import {
  BooksListContainer,
  BookDetailsContainer,
  BookFormContainer,
  BooksFilterContainer,
} from './containers';

@NgModule({
  declarations: [
    BooksListComponent,
    BookDetailsComponent,
    BookFormComponent,
    BooksFilterComponent,
    BooksListContainer,
    BookDetailsContainer,
    BookFormContainer,
    BooksFilterContainer,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class BooksModule { }
