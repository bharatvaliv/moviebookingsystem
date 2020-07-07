import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { Movie, schedule } from './movie.modal';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private movies: Movie[];
  private moviesUpdated = new Subject<Movie[]>();

  checkout: {
    selectedMovie: Movie;
    selectedSlot: schedule;
    selectedSeats: string[];
    totalCost: number;
  };

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

  getMovie(index: any) {
    return this.movies[index];
  }

  setCheckout(
    selectedMovie: Movie,
    selectedSlot: schedule,
    selectedSeats: string[],
    totalCost: number
  ) {
    this.checkout = { selectedMovie, selectedSlot, selectedSeats, totalCost };
  }

  getCheckout() {
    return this.checkout;
  }
}
