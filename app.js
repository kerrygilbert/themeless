var express = require('express')
  , routes = require('./router')
  , nunjucks = require('nunjucks')
  , http = require('http')
  , path = require('path');

var app = express();

//nunjucks setup
var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(__dirname + '/views'), { 
    dev: true, 
    autoescape: true 
});

env.addFilter('shorten', function(str, count) {
  if(str.length > count) {
    return str.slice(0, count)+'...';
  } else {
    return str;
  }
});

env.addFilter('json', function(data) {
  return JSON.stringify(data);
});

env.addFilter('date', function(date){
  return moment(date).format('MM/DD h:mma')
})
//

app.configure(function(){
  app.set('views', __dirname + '/views');
  // app.set('view engine', 'ejs');
  
  //feed app to nunjucks environment
  env.express(app);

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());


  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Connect mongoose
var options = {};
var mongo = require('./db/mongo-store');
mongo(options);

// Setup routes
routes(app, options);

http.createServer(app).listen(3000, function(){
  console.log("Express server listening");
});
