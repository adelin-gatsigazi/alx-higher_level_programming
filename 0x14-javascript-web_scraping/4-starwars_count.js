#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    const moviesWithWedgeAntilles = data.results.filter(movie => {
      return movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
    });

    console.log(`Number of movies with Wedge Antilles: ${moviesWithWedgeAntilles.length}`);
  }
});
