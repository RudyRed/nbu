const yargs = require('yargs');
const axios = require('axios');
require('dotenv').config();


const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true,
    },
  })
  .help()
  .alias('help', 'h')
  .argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find address');
  }

  const { lat, lng } = response.data.results[0].geometry.location;
  const weatherUrl = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);

  return axios.get(weatherUrl);
}).then(response => {
  const { temperature, apparentTemperature } = response.data.currently;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch(e => {
  if (e.code === 'ENOTFOUND') {
    console.log('unable to connect to API servers');
  } else {
    console.log(e.message);
  }
});
