var listener = (function(){
    listeners = {};

    return{
      add: add,
      remove : remove,
      dispatch: dispatch
    }

    function add(name, callback, arguments){
      if(typeof(listeners[name]) == 'undefined') listeners[name] = [];
      listeners[name].push([callback, arguments]);

    }
    function remove(){

    }
    function dispatch(name){
      if(typeof(listeners[name])!='undefined'){
        var i=0, l=listeners[name].length;
        for(i;i<l;i++)
          listeners[name][i][0].apply(null,listeners[name][i][1]);
      }
    }
})();


/////////////////////////////////////////////////////

var route = (function(listener){
  var doc = document.location.href;
  var paths = [];
  if(listener) listener.add('ON_PATH', update, ['pepe', 'paco']);




  var app ={
    init: function(){
      console.log('solut');
      return app;
    },
    rest: function(){
      console.log('rest');
    }
  }
  return function(path){
    return (__set(path)) ? app : false;
  }

  function __apply(path){
    if(doc.lastIndexOf(path)>-1) return false;
  }

  function __applied(path){
    return (window.location.hash.lastIndexOf(path)>-1);
  }
  function __set(path)
  {
    if(!__applied(path)){
      listener.dispatch('ON_PATH');
      window.location.hash = __cleanPath(path);
      return true;
    }
    return false;
  }

  function __cleanPath(path){
    return (/^\#/.test(path)) ? path.split('#')[1] : path;
  }


  function set(path){

  }

  function update(arg0, arg1){
    console.log('update from base', arguments, arg0);
  }
})(listener);
var r = route('#home');
console.log(r, 'pp');
