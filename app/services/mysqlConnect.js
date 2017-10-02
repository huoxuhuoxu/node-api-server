
const mysql = require('mysql');
const mysql_config = {
    host: process.env.DB_HOST,
    post: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};
let pool = mysql.createPool(mysql_config);

// 通用语句
const QUERY = function (str){
    return new Promise(function(resolve, reject){
        pool.getConnection((err, conn) => {
            if(err){
                err.status = 12001;
                throw err;
            }
            conn.query(str, function(err, rows, fields){
                conn.release();
                if(err){
                    err.status = 12002;
                    reject(err);
                    return ;
                }
                resolve(rows);
            });
        });
    });
};

module.exports = {
    QUERY
};
