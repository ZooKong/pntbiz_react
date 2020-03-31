const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('jwt-secret', config.secret);

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

app.post('/auth/login', (req, res) => {
    console.log();
});
