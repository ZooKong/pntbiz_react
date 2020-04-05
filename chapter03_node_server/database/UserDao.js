var mysql = require('sync-mysql');

class UserDao {

    constructor() {
        this.connection = new mysql({
            host     : 'localhost',
            user     : 'root',
            password : '123456',
            port     : 3306,
            database : 'pntbiz_react'
        });
    }

    getUserInfo(id,pw){
        let user = null;
        let result = this.connection.query(`SELECT * from USER WHERE id='${id}' AND pw='${pw}'`);

        if(result.length == 1)
            user = result[0];

        return user;
    }

}

module.exports = new UserDao();