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

let movies = [
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
    schedule: [
      {
        time: '12:00',
        seatsOccupied: ['g1', 'p5', 's3'],
      },
      {
        time: '3:00',
        seatsOccupied: ['g2', 'g5', 's4'],
      },
      {
        time: '9:00',
        seatsOccupied: ['s3', 'p6', 'p5'],
      },
    ],
  },
  {
    id: 2,
    title: 'Dunkirk',
    image:
      'https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
    description:
      'During World War II, soldiers from the British Empire, Belgium and France try to evacuate from the town of Dunkirk during a arduous battle with German forces',
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
    schedule: [
      {
        time: '12:00',
        seatsOccupied: ['g4', 'p5', 's7'],
      },
      {
        time: '3:00',
        seatsOccupied: ['g1', 'g2', 'g3'],
      },
      {
        time: '9:00',
        seatsOccupied: ['s1', 'p2', 'p3'],
      },
    ],
  },
  {
    id: 3,
    title: '1917',
    image:
      'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg',
    description:
      'During World War I, two British soldiers -- Lance Cpl. Schofield and Lance Cpl. Blake -- receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver a message that could potentially save 1,600 of their fellow comrades -- including Blakes own brother.',
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
    schedule: [
      {
        time: '12:00',
        seatsOccupied: ['g10', 'p2', 's3'],
      },
      {
        time: '3:00',
        seatsOccupied: ['g5', 'g6', 's10'],
      },
      {
        time: '9:00',
        seatsOccupied: ['s2', 'p6', 'p5'],
      },
    ],
  },
];

app.get('/movies', (req, res, next) => {
  res.status(200).json(movies);
});

app.post('/booktickets', (req, res, next) => {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == req.body.selectedMovie.id) {
      for (let j = 0; j < movies[i].schedule.length; j++) {
        if (movies[i].schedule[j].time == req.body.selectedSlot.time) {
          movies[i].schedule[j].seatsOccupied = movies[i].schedule[
            j
          ].seatsOccupied.concat(req.body.selectedSeats);
          break;
        }
      }
      break;
    }
  }
  res.status(201).json({ message: 'Tickets Booked Succesfully' });
});

module.exports = app;
