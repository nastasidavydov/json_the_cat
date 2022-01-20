const request = require('request');
const breedName = process.argv[2].toLowerCase().slice(0, 4);


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  if (!data.length) {
    console.log('Breed Not Found');
    return;
  }
  console.log(data[0].description);

});