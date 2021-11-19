const axios = require('axios').default;

axios.get('https://postman-echo.com/get?param1=teste')
  .then((response) => response.data)
  .then((data) => console.log(data))
  .catch((errorOrResponse) => {
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    console.error(errorOrResponse);
});
