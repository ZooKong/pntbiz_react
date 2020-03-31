var mysql = require('chapter03_node_server/database/mysql');

class UserDao {

    constructor(sad) {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '123456',
            port     : 3306,
            database : 'pntbiz_react'
        });
        connection.connect();
        this.asdsd = 'sad';
    }

    getUserInfo(id,pw){
        this.connection.query(`SELECT * from USER WHERE id={id} AND pwd={pw)}`, function (err, rows) {
            
        });
        return;
    }


}