import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenresListContainer } from './containers/genres-list/genres-list.container';

const routes: Routes = [
  { path: '', component: GenresListContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenresRoutingModule { }
