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
