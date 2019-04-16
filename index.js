const request = require('request-promise');

request({
    method: 'POST',
    uri: `${SECRETS.serverUrl}/api/v1/refresh`,
    body: {},
    json: true // Automatically stringifies the body to JSON
})
    .then((resp) => {
        console.log(resp);
    })
    .catch((err) => {
        // POST failed...
        console.error(err);
    });