import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateBookComponent } from './components';
import {
  AuthorsListContainer,
  AuthorDetailsContainer,
} from './containers';

const routes: Routes = [
  { path: '', component: AuthorsListContainer },
  { path: ':id', component: AuthorDetailsContainer, children: [
    { path: 'books', component: CreateBookComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsRoutingModule { }
