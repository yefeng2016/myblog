 var mongo = require('mongodb'),
      Server = mongo.Server;
      Db = mongo.Db;
  
  var server = new Server('localhost', 27017, {auto_reconnect: true});
  var db = new Db('foo', server);
  console.log(server);
  db.open(function(err, db) {
      if(!err) {
         console.log("We are connected");
     } });