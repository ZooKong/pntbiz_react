const jwt = require('jsonwebtoken');
const userData = require('../database/UserDao');
const config = require('../config');

class JwtService {

    create(user) {
        let token = jwt.sign({
                id: user.id,
            },
            config.secret,
            {
                expiresIn: '365d',
                issuer: 'pntbiz',
                subject: 'userInfo'
            });
        return token;
    }

    verify(token) {
        return jwt.verify(token, config.secret);
    }

}

module.exports = new JwtService();