import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookCreateComponent } from './components';
import { BooksListContainer, BookDetailsContainer } from './containers';

const routes: Routes = [
  { path: '', component: BooksListContainer },
  { path: 'book-create', component: BookCreateComponent },
  { path: ':id', component: BookDetailsContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule { }
