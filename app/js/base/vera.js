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
  var paths = [];
  var ___i = 0;
  ////if(listener) listener.add('ON_PATH', update, ['pepe', 'paco']);
  __init();
  console.log('inicio la app');


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

  }

  function __applied(path){
    return (window.location.hash.lastIndexOf(path)>-1);
  }
  function __set(path)
  {
    if(!__applied(path)){

      window.location.hash = __cleanPath(path);
      return true;
    }
    return false;
  }

  function __cleanPath(path){
    return (/^\#/.test(path)) ? path.split('#')[1] : path;
  }
  function __init()
  {
    console.log('CALLED: TIMES!!!!');
    if (window.addEventListener)
      window.addEventListener('hashchange', __onChange, false);
    else if (window.attachEvent)
      window.attachEvent('hashchange', __onChange);

  }


  function set(path){

  }

  function __onChange(){
    ___i++;
    console.log(___i, ' CALLED =====');
    console.log('update from base', arguments);
  }
})(listener);
var r = route('#home');
console.log(r, 'pp');
