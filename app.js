
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
	, cons = require('consolidate')
	, swig = require("swig")
	, log4js = require("log4js")
	, middleware = require("./middleware")
	, boot = require("./boot")
  , path = require('path');

var app = express();
global.env = require('./config/env');

// all environments
app.set('port', process.env.PORT || 3000);
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(middleware.locals());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

swig.init({
	allowErrors: false,
	autoescape: true,
	cache: true,
	encoding: 'utf8',
	root: __dirname + '/views'
});

log4js.replaceConsole();

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var booter = boot.call(this, app);
console.log("booter:", booter);

// Load Routes
require('./routes').call(this, app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port') + " on %s mode", app.get('env') );
});
