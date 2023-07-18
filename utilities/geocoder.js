const NodeGeocoder = require('node-geocoder');

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: 'https', 
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null   
};

const geocoder = NodeGeocoder(options);

// geocoder.geocode('29 first-mechanic road port harcourt, Nigeria', function(err, res) {
//     console.log(res);
// });

module.exports = geocoder;