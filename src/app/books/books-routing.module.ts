import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksListContainer } from './containers/books-list/books-list.container';

const routes: Routes = [
  { path: '', component: BooksListContainer },
  { path: 'books/:id', component: BookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule { }
