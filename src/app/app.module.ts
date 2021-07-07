import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GenresModule } from './genres';
import { AuthorsModule } from './authors';
import { BooksModule } from './books';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BooksModule,
    AuthorsModule,
    GenresModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
