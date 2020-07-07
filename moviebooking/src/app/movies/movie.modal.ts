export interface seats_cost {
  seats: number;
  cost: number;
}

export interface total_seats {
  platinum: seats_cost;
  gold: seats_cost;
  silver: seats_cost;
}

export interface schedule {
  time: string;
  seatsOccupied?: string[];
}

export interface Movie {
  id: number;
  title: string;
  image: string;
  description: string;
  total_seats: total_seats;
  schedule: schedule[];
}
