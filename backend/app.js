const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

const movies = [
  {
    id: 1,
    title: 'Ready Player One',
    image:
      'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg',
    description:
      'James Halliday designs a virtual reality and hides the keys to his fortune in it for a worthy player to find after his death. Wade, a teenager, sets out on a quest to find the keys and the fortune.',
    total_seats: {
      platinum: {
        seats: 10,
        cost: 250,
      },
      gold: {
        seats: 20,
        cost: 200,
      },
      silver: {
        seats: 30,
        cost: 150,
      },
    },
    schedule: {
      time: '10:15',
      seatsOccupied: [],
    },
  },
  {
    id: 2,
    title: 'Ready Player One',
    image:
      'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg',
    description:
      'James Halliday designs a virtual reality and hides the keys to his fortune in it for a worthy player to find after his death. Wade, a teenager, sets out on a quest to find the keys and the fortune.',
    total_seats: {
      platinum: {
        seats: 10,
        cost: 250,
      },
      gold: {
        seats: 20,
        cost: 200,
      },
      silver: {
        seats: 30,
        cost: 150,
      },
    },
    schedule: {
      time: '10:15',
      seatsOccupied: [],
    },
  },
  {
    id: 3,
    title: 'Ready Player One',
    image:
      'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg',
    description:
      'James Halliday designs a virtual reality and hides the keys to his fortune in it for a worthy player to find after his death. Wade, a teenager, sets out on a quest to find the keys and the fortune.',
    total_seats: {
      platinum: {
        seats: 10,
        cost: 250,
      },
      gold: {
        seats: 20,
        cost: 200,
      },
      silver: {
        seats: 30,
        cost: 150,
      },
    },
    schedule: {
      time: '10:15',
      seatsOccupied: [],
    },
  },
];

app.get('/movies', (req, res, next) => {
  res.status(200).json({
    movies: movies,
  });
});

module.exports = app;
