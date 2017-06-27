var fs = require("fs"),
	babelify = require('babelify'),
	watchify = require('watchify'),
	browserify = require("browserify");

var _convert = [
	{in: 'app/immutable/index.js' , out: 'app/js/immutable/bundle.js'},
	{in: 'app/vue/index.js' , out: 'app/js/vue.js'},
];
console.log(_convert.length);
for(var i=0; i<_convert.length; i++){
	var b = browserify({
	  entries: [`${_convert[i].in}`],
	  cache: {},
	  debug: true,
	  packageCache: {},
	  plugin: [watchify]
	})
  .transform(babelify, {presets: ["es2015"]});

b.on('update', bundle)
  .bundle()
  .pipe(fs.createWriteStream(`${_convert[i].out}`));
console.log(`${_convert[i].in} created code at ${new Date().toISOString()}`);


}
function getFile(_file){
	if(_file.lastIndexOf('vue')){
		return _convert[1].out;
	}
	if(_file.lastIndexOf('immutable')){
		return _convert[0].out;
	}
}
function bundle(ids){
	var _file = getFile(ids);
	console.log('updated code at '+new Date().toISOString(), _file);
	b.bundle().pipe(fs.createWriteStream(_file));
}
