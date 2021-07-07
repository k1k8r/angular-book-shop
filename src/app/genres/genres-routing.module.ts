import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenresListComponent } from './components/genres-list/genres-list.component';

const routes: Routes = [
  { path: '', component: GenresListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenresRoutingModule { }
