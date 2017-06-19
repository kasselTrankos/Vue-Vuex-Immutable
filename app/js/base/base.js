var base = function(){

}
/**
  Objeto List
  uses __<name_function> to declare private methods;
  uses __<name_property> to declare private properties.
*/
var List = function (){

  __position = 0;
  __object =  {};


  return {
    get: get,
    index: index,
    next: next,
    push: push,
    pull:pull,
    stack:stack,
    jumper:jumper,
    sinon:sinon
  }
  //__contructor(arguments);

  function __contructor(){
    console.log(arguments, 'load');
  }
  function get(){return __object;}
  function __getNextKeyValue(){

  }

  function index(){
    return _.size(__object) || __position;
  }

  function next(){
    __position++;
    return (__object.length<=__position)? __object[__position]: false;
  }

  function push(name, value){
      __position++;
    __object[name] = value;
    return __object;
  }

  function pull(){

  }
  /**
  Creacion de un scope dinámico
  //stack==apilar
  */
  function stack(resolve){
    //primero le inyectamos el metodo(resolve)
    //el cual devolvemos, como function predicativa que es!!
    return function(k, v){
      //si no existe se crea!!
      //joder es la misma puerta logica.
      //Si no existe lo crea. y devuelve
      //crea u
      var stack = __object[k] || [];
      __object[k] = resolve(stack, v);

      return __object;
    }
  }
  /**
    function que recorre internamente un array, ofreciendoles, los keys
    integrando el arbol hacia el interior
  */
  function jumper(resolve){
    return function(k, arr){
      var _return =  resolve(k,arr[k].children) || false;
      return _return;
    }
  }
  function obten(){

  }
  /**
  vamos por pasos.
  Lo primero sinon, solo me hace falta para crear un metodo nomad
  */
  function sinon(o, pattern, resolve){
    __object = o;
    __pattern = str;
    __init = 0;
    __seed = str.split('.');
    console.log(__object, __pattern, '|| pattern', __init, '|| init');

      return function(arr, k){
        function iterator(arr){
          return resolve(arr, __init);
        }
      __init++;
      iterator(__object);
    }


    /*rerurn function(k, arr){
      return resolve(k, arr);
    }*/
  }

}
