import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./books').then((m) => m.BooksModule),
  },
  { path: 'authors',
    loadChildren: () => import('./authors').then((m) => m.AuthorsModule),
  },
  { path: 'genres',
    loadChildren: () => import('./genres').then((m) => m.GenresModule),
  },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
