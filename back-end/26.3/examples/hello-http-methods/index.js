const axios = require('axios').default;

// simple get
axios.get('https://postman-echo.com/get?param1=teste')
  .then((response) => response.data)
  .then((data) => console.log(data))
  .catch((errorOrResponse) => {
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    console.error(errorOrResponse);
});


// get with headers
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

const headers = { Authorization: API_TOKEN };

axios.get('https://postman-echo.com/get?param1=teste', { headers })
  .then((response) => response.data)
  .then((data) => console.log(data))
  .catch((errorOrResponse) => {
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    console.error(errorOrResponse);
  });
