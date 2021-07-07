import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresListComponent } from './components/genres-list/genres-list.component';


@NgModule({
  declarations: [
    GenresListComponent,
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
  ],
})
export class GenresModule { }
