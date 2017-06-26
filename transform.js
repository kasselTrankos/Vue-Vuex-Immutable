var browserify = require('browserify'),
	babelify = require("babelify"),
	fs = require('fs'),
	watchify = require('watchify'),
	path = require('path'),
	source = require('vinyl-source-stream');

var _file = "app/js/immutable/bundle.js";
var b = browserify({
    debug: true,
    plugin: [watchify],
    cache: {},
  	packageCache: {},
    entries: ['app/immutable/index.js']
})
	.transform(babelify.configure({
		presets:['es2015']
}));
b.on('update', function(){
	console.log('update it');
	b.bundle().pipe(fs.createWriteStream(_file));
})
.bundle()
.pipe(fs.createWriteStream(_file));

