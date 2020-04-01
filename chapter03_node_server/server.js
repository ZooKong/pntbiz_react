const express = require('express');
var multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');
const port = process.env.PORT || 3000;

const app = express();
const upload = multer();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.set('jwt-secret', config.secret);

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

app.post('/auth/login', (req, res) => {
    var body =  req.body;
    console.log();
});
