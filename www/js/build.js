(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
listener = require('./base/listener.js');
route = require('./base/route.js')(listener);
route('#juano');

},{"./base/listener.js":2,"./base/route.js":3}],2:[function(require,module,exports){
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
module.exports = listener;

},{}],3:[function(require,module,exports){
/////////////////////////////////////////////////////
////
/// modelo que se autocarga, y se le inyecta listener.
/// maneja el routing
//////////////////////////////////////////////////////
module.exports = (function(listener){

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
  });

},{}]},{},[1]);
