var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob';

var updateData = function(db, callback) {
    //连接到表
    var collection = db.collection('site');
    //更新数据
    var whereStr = {"name":'菜鸟工具'};
    var updateStr = {$set: { "url" : "www.runoob.com" }};
    var multi = { multi: true };//更新多条记录
    collection.update(whereStr,updateStr,multi,function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    updateData(db, function(result) {
        console.log(result);
        db.close();
    });
});