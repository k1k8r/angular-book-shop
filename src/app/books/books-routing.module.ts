import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookDetailsContainer } from './containers/book-details/book-details.container';
import { BooksListContainer } from './containers/books-list/books-list.container';

const routes: Routes = [
  { path: '', component: BooksListContainer },
  { path: 'books/:id', component: BookDetailsContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule { }
