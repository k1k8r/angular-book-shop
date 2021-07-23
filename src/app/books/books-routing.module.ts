import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksListContainer, BookDetailsContainer, BookFormContainer } from './containers';

const routes: Routes = [
  { path: '', component: BooksListContainer },
  { path: 'create', component: BookFormContainer },
  { path: ':id', component: BookDetailsContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule { }
