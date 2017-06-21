/*var example = Rx.Observable.of(null);
//delay output of each by an extra second
var message = Rx.Observable.concat(
    example.mapTo('Hello'),
    example.mapTo('World!1').delay(67),
    example.mapTo('Goodbye').delay(2000),
    example.mapTo('World!').delay(1000)
  );
//output: 'Hello'...'World!'...'Goodbye'...'World!'
var subscribe = message.subscribe(function(val){ console.log(val)});
var emitter;
var observable = Rx.Observable.create(function(e) { emitter = e});

var observer = {
   next:function (x) {
        console.log('Next: ' + x);
    },
    error:function (err) {
        console.log('Error: ' + err);
    },
    complete:function () {
        console.log('Completed');
    }
  }
observable.subscribe(observer);

var apd = function() {
  emitter.next('foo');
emitter.next('bar');
emitter.next('baz');
emitter.complete();

}*/
var Capsule = (function Capsule(){
  var method;
  return {
    method: function(m){
      
      method = m;
      return this;  
    }
  }
})(this);
function complete(methods){
  console.log(methods);
  i=0;
  while (methods[i].call()){
    console.log(i);
    i++;
  }
}
var $scope = {
  value: 6,
  error:false,
  one: function(value){
    this.value+= value;
    console.log(5555);
    return this;
  },
  two: function(newVal){
    if(this.value>6){
      console.log(77777);
    }
    this.value+=newVal;
    return this;
  },
  toString: function(){
    this.str = '{value: '+this.value+'}'
    return this;
  }
};
var open = function(){
  console.log('0pen');
  //return false;
}
var close = function(){
  console.log('close');
  //return false;
}
//$scope.one().two();
/*var doubles = [open , $scope.one, close].map(function(x, i) {
   return x.call();
});*/
var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = _.compose(open, close);

//console.log(welcome('moe'), 99999);
/// 'hi: MOE!'
function LazyChain(obj) {
  this._calls = [];
  this._target = obj;
}
/*function go() {
  var d = $.Deferred();
  $.when("")
  .then(function() {
  setTimeout(function() {
  console.log("sub-task 1");
  }, 1000)
  })
  .then(function() {
  setTimeout(function() {
  console.log("sub-task 2");
  }, 1200)
  })
  .then(function() {
    
  setTimeout(function() {
    d.resolve("done done done done");
  }, 2200)
  })
  return d.promise();
}*/


LazyChain.prototype.invoke = function(methodName /*, args */) {
  var args = [].slice.call(arguments, 1);// quitando underscore
  this._calls.push(function(target) {
    var meth = target[methodName];
    return meth.apply(target, args);
  });
  return this;
};
LazyChain.prototype.force = function() {
    ///quitado underscore
    return this._calls.reduce(function(target, thunk, indice, vector){
      return thunk(target);
    }, this._target);
};
var t = new LazyChain($scope)
.invoke('one', 90)
.invoke('two', $scope.value)
.invoke('toString')
.force();
console.log(t.str, 'is 9999999999999999');
/*console.log(t, 77777);
var yearning = go().done(function(e){
  console.log(e);
});*/
