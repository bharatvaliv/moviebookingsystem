import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Movie, schedule } from '../movie.modal';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './mvoie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: Movie;
  index: any;
  selectedTime: schedule;
  selectedSeats: string[] = [];
  totalCost: number = 0;

  constructor(
    public route: ActivatedRoute,
    public movieService: MovieService,
    private router: Router
  ) {}
  ngOnInit() {
    this.movieService.getMovies();
    this.movieService.getMovieUpdateListener().subscribe((movies) => {
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('index')) {
          this.index = paramMap.get('index');
          this.movie = movies[this.index];
        }
      });
    });
  }

  getArray(length) {
    return Array(length).fill(1);
  }

  selectTime(time: schedule) {
    this.selectedTime = time;
    this.selectedSeats = [];
  }

  isBooked(seatNo: string) {
    return this.selectedTime.seatsOccupied.indexOf(seatNo) == -1 ? false : true;
  }

  selectSeat(seat: string, cost: number) {
    let seatIndex = this.selectedSeats.indexOf(seat);
    if (seatIndex == -1) {
      this.selectedSeats.push(seat);
      this.totalCost += cost;
    } else {
      this.selectedSeats.splice(seatIndex, 1);
      this.totalCost -= cost;
    }
  }

  isSelected(seatNo: string) {
    return this.selectedSeats.indexOf(seatNo) == -1 ? false : true;
  }

  isSelectedSlot(time: schedule) {
    return this.selectedTime === time;
  }

  gotoCheckout() {
    this.movieService.setCheckout(
      this.movie,
      this.selectedTime,
      this.selectedSeats,
      this.totalCost
    );
    this.router.navigate(['/checkout']);
  }
}
