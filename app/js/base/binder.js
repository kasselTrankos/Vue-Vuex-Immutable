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
  one: function(){
    console.log(1111);
    this.value++;
    return this;
  },
  two: function(){
    if(this.value>6){
      console.log(77777);
    }
    console.log(2222);
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
var doubles = [open , $scope.one, close].map(function(x) {
   return x.call();
});
