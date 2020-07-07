import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
}
