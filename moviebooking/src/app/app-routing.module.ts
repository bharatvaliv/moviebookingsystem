import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './movies/movie-list/movie-llst.component';
import { MovieComponent } from './movies/movie/movie.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movie/:index', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
