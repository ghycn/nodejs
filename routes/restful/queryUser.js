var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers.do', function (req, res) {
    fs.readFile("users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
});

var server = app.listen(8085, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});