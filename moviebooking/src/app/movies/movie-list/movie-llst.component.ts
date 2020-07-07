import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Movie } from '../movie.modal';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  private movieSub: Subscription;
  constructor(public movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovies();
    this.movieSub = this.movieService
      .getMovieUpdateListener()
      .subscribe((movies) => {
        this.movies = movies;
      });
  }
}
