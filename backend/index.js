const express = require ('express');

const app = express();

app.get('/', (request, response) => {
    return response.send('Testing...')
});

app.listen(3333);

