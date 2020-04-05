const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');

const loginService = require('./service/LoginService');

const port = process.env.PORT || 3000;
const app = express();
const upload = multer();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(upload.array());
app.use(cors());

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

app.post('/auth/login', (req, res) => {
    let loginInfo =  req.body;
    let token = loginService.getToken(
        loginInfo.id,
        loginInfo.password
    );

    res.status(200).json({
        result : token ? 'success' : 'fail',
        message : token ? 'Login success' : 'Login Fail',
        token : token
    });
});

app.post('/auth/verify', (req, res) => {
    let token =  req.headers.token;

    let result = loginService.verifyToken(token);

    if(result)
        res.status(200).json({
            result : result ? 'success' : 'fail',
            message : result ? 'Valid' : 'Not valid',
        });
});