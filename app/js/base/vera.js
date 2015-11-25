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
    function dispatch(name, arguments){
      if(typeof(listeners[name])!='undefined'){
        var i=0, l=listeners[name].length;
        for(i;i<l;i++)
          listeners[name][i][0].apply(listeners[name][i][1], arguments);
      }
    }
})();


/////////////////////////////////////////////////////
////
/// modelo que se autocarga, y se le inyecta listener.
//////////////////////////////////////////////////////
var route = (function(listener){
  var paths = [];
  var event, el;
  __init();

  var app ={
    init: function(){
      console.log('solut');
      return app;
    },
    rest: function(){
      console.log('rest');
    }
  }
  return function(){
    var args = Array.prototype.slice.call(arguments);
    var _path = args.slice(-1)[0];
    console.log(args.length, args);
    event = __getMouseEvent(args);
    el = __getThis(args);
    if(event) event.preventDefault();

    return (__set(_path)) ? app : false;
  }
  function __getMouseEvent(args){
    var i = 0, l = args.length;
    for(i;i<l;i++)
      if(args[i]!==null && args[i].currentTarget) return args[i];
    return null;
  }

  function __getThis(args){
    var i = 0, l = args.length;
    for(i;i<l;i++)
      if(args[i]!==null && args[i].innerHTML) return args[i];
    return null;
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
    if (window.addEventListener)
      window.addEventListener('hashchange', __onChange, false);
    else if (window.attachEvent)
      window.attachEvent('hashchange', __onChange);
    return true;
  }
  
  function __onChange(){
    if(listener)
      listener.dispatch('HASH_CHAGE', [event, el, window.location.hash]);
    return paths;
  }
})(listener);

var r = route(null, '#home');

listener.add('HASH_CHAGE', function(e, el, hash){
  var elm = document.getElementById('test-route');
  elm.innerHTML+= '<p>site link actual: '+hash+'</p>';
});
console.log(r, 'pp');
