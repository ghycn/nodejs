var mysql = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    port            : '3306',
    password        : '123456',
    database        : 'test'
});


pool.query('SELECT * from user', function (error, results, fields) {
    if (error) throw error;
    console.log(results.length);
});
pool.end;

