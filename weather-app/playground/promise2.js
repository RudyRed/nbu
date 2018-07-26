const request = require('request');

const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    const encodedAdress = encodeURIComponent(address);

    request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`,
      json: true,
    }, (error, response, body) => {

      if (error) {
        reject('Unable to connect to Google servers');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find address');
      } else if (body.status === 'OK') {

        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng,
        });

      }

    });
  })
};

geocodeAddress('90210').then(location => {
  console.log(JSON.stringify(location, undefined, 2))
}, e => {
  console.log(e);
});
