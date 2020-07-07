import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { Movie } from './movie.modal';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private movies: Movie[];
  private moviesUpdated = new Subject<Movie[]>();

  constructor(public http: HttpClient, private router: Router) {}

  getMovies() {
    this.http
      .get<Movie[]>('http://localhost:3000/movies')
      .subscribe((movies) => {
        this.movies = movies;
        this.moviesUpdated.next(this.movies);
        console.log(this.movies);
      });
  }

  getMovieUpdateListener() {
    return this.moviesUpdated.asObservable();
  }
}
