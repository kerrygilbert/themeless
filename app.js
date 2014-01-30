var express = require('express')
  , routes = require('./router')
  , nunjucks = require('nunjucks')
  , http = require('http')
  , path = require('path')
  , moment = require('moment');

var app = express();

// Setup Nunjucks
var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(__dirname + '/views'), { 
  dev: true, 
  autoescape: true 
});

// Attach Nunjucks filters (!!! move this to a different file soon)
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
  return moment(date).format('MM/DD/YYYY h:mma')
});


app.configure(function(){
  app.set('views', __dirname + '/views');
  
  //Feed app to nunjucks environment
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
var mongo = require('./db/mongo-store');
mongo({env: process.env.DB || 'development'});

// Setup routes
routes(app, {});

http.createServer(app).listen(3000, function(){
  console.log("Express server listening");
});
