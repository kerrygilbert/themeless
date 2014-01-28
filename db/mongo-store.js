module.exports = function(options) {
  options = options || {};
  var mongoose = require('mongoose')
  , config = require('./config');

  module.exports.mongoose = mongoose;

  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

  mongoose.connection.once('open', function() {
    console.log('MongoDB connection opened');
  });

  var mongoUrl = function(obj) {
    obj.hostname = (obj.hostname || 'localhost');
    obj.port = (obj.port || 27017);
    obj.db = (obj.db);
    if (obj.username && obj.password) {
      return "mongodb://" + obj.username + ":" + obj.password + "@" + obj.hostname + ":" + obj.port + "/" + obj.db;
    } else {
      return "mongodb://" + obj.hostname + ":" + obj.port + "/" + obj.db;
    }
  }

  var mongo = config.mongodb[options.env];
  var mongourl = mongoUrl(mongo);

  if (mongoose.connection.readyState == 0) {
    module.exports.db = mongoose.connect(mongourl);
  }
}