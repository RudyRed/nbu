const request = require('request');

const getWeather = (lat, lng, cb) => {

  request({
    url: `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${lat},${lng}`,
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      cb(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
      });
    } else {
      cb('Unable to fetch weather');
    }
  });

};





module.exports = {
  getWeather,
}
