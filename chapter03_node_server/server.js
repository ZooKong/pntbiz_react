const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('jwt-secret', config.secret);

app.post
