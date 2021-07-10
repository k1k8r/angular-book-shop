import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresListComponent } from './components/genres-list/genres-list.component';
import { GenresListContainer } from './containers/genres-list/genres-list.container';


@NgModule({
  declarations: [
    GenresListComponent,
    GenresListContainer,
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
  ],
})
export class GenresModule { }
