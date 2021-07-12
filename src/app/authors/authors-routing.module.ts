import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorsListContainer } from './containers/authors-list/authors-list.container';

const routes: Routes = [
  { path: '', component: AuthorsListContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsRoutingModule { }
