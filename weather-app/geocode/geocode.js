const request = require('request');

const geocodeAddress = (address, cb) => {
  const encodedAdress = encodeURIComponent(address);

  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`,
    json: true,
  }, (error, response, body) => {

    if (error) {
      cb('Unable to connect to Google servers');
    } else if (body.status === 'ZERO_RESULTS') {
      cb('Unable to find address');
    } else if (body.status === 'OK') {

      cb(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng,
      });

    }

  });

}

module.exports = {
  geocodeAddress,
}
