const request = require('request');

const fetchBreedDescription = (breedName , done) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    if (error) {
      return done(error);

    }
    const data = JSON.parse(body);

    if (!data.length) {
      return done('Breed Not Found', null);
    }

    done(null, data[0].description);

  });
};

module.exports = { fetchBreedDescription };

