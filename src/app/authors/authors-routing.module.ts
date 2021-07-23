import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AuthorsListContainer,
  AuthorDetailsContainer,
} from './containers';

const routes: Routes = [
  { path: '', component: AuthorsListContainer },
  { path: ':id', component: AuthorDetailsContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsRoutingModule { }
