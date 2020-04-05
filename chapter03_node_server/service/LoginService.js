const jwtService = require('./JwtService');
const userDao = require('../database/UserDao');

class LoginService {

    verifyToken(token) {
        return jwtService.verify(token);
    }

    getToken(id, pw) {

        let user = userDao.getUserInfo(id, pw);
        let token = null;

        if(user)
            token = jwtService.create(user);

        return token;
    }

}

module.exports = new LoginService();