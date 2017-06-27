var fs = require("fs"),
	babelify = require('babelify'),
	watchify = require('watchify'),
	browserify = require("browserify");

var _file = 'app/js/immutable/bundle.js';
var b = browserify({
	  entries: ['app/immutable/index.js'],
	  cache: {},
	  debug: true,
	  packageCache: {},
	  plugin: [watchify]
	})
  .transform(babelify, {presets: ["es2015"]});

b.on('update', bundle)
  .bundle()
  .pipe(fs.createWriteStream(_file));
 console.log('created code at '+new Date().toISOString());
function bundle(){
	console.log('updated code at '+new Date().toISOString());
	b.bundle().pipe(fs.createWriteStream(_file));
}