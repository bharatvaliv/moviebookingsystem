import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Movie } from '../movie.modal';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './mvoie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: Movie;
  index: any;

  constructor(
    public route: ActivatedRoute,
    public movieService: MovieService
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('index')) {
        this.index = paramMap.get('index');
        this.movie = this.movieService.getMovie(this.index);
        console.log(this.movie);
      }
    });
  }
}
