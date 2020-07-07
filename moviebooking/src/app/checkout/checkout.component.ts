import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movies/movie.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkout: any;
  appliedCoupon: string;
  discount: number = 0;

  coupons = [
    {
      code: 'MOV01',
      discount: 5,
    },
    {
      code: 'MOV02',
      discount: 10,
    },
    { code: 'MOV03', discount: 15 },
    { code: 'MOV04', discount: 20 },
  ];

  constructor(public movieService: MovieService) {}

  ngOnInit() {
    this.checkout = this.movieService.getCheckout();
    console.log(this.checkout);
  }

  applyCoupon() {
    console.log(this.appliedCoupon);
    let isValid: boolean = false;
    let couponDiscount: number = 0;

    for (let i = 0; i < this.coupons.length; i++) {
      if (this.appliedCoupon === this.coupons[i].code) {
        isValid = true;
        couponDiscount = this.coupons[i].discount;
        break;
      }
    }

    if (!isValid) {
      this.appliedCoupon = '';
      alert('Invalid Coupon');
    } else {
      this.discount = this.checkout.totalCost * (couponDiscount / 100);
    }
  }
}
