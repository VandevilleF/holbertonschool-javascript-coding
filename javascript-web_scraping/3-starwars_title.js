#!/usr/bin/node

const request = require('request');
const url = (`https://swapi-api.hbtn.io/api/films/${process.argv[2]}`);

request(url, function (err, reponse, body) {
  if (err) {
    console.log(err);
  } else {
    const movieName = JSON.parse(body);
    console.log(movieName.title);
  }
});
