import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './movies/movie-list/movie-llst.component';
import { MovieComponent } from './movies/movie/movie.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movie/:index', component: MovieComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
