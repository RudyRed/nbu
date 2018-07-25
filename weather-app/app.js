const yargs = require('yargs');
require('dotenv').config();
//
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true,
//     },
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });
// 'https://api.darksky.net/forecast/[key]/[latitude],[longitude]'

const request = require('request');

// const cb = (error, )

request({
  url: `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/43.86985980000001,-79.4557975`,
  json: true,
}, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather');
  }
});
