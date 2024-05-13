#!/usr/bin/node

const request = require('request');
const WedgeAntilles = 'https://swapi-api.hbtn.io/api/people/18/';

request(process.argv[2], function (err, reponse, body) {
  if (err) {
    console.log(err);
  } else {
    const movieName = JSON.parse(body).results;
    let count = 0;

    movieName.forEach(function (film) {
      if (film.characters.includes(WedgeAntilles)) {
        count += 1;
      }
    });
    console.log(count);
  }
});
