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
    stack:stack
  }
  __contructor(arguments);

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

}
