# functional Study

Case Study of programming functional with react and flux( will change :))

Me siento con ganas y estoy creando el objeto <List>, como ejercicio de programacion funcional.



Añadiendo Vue js como motor de render, server nativo con http-statics de node js.


Pendiente de implementar.



`node static_server.js`

desde http://127.0.0.1:9001


He añadido la librería de  Vuex para uso del concepto Redux en Vuejs, y agrego el mantenimiento del Satate con immutable.


```javascript
var t = new LazyChain($scope)
.invoke('one', 90)
.invoke('two', $scope.value)
.invoke('toString')
.force();
```

Lazy load chaining, combine n functions, ideal para angular. Ya que actualiz el $scope, en cada invocación y then force.

Validación de Object by string en validQueryObject, retorna false si no existe, en caso de existir la posición pedida: 
```javascript
  var isValid = validQueryObject('_demosObject[0].children[0].ids')(_demosObject);
  console.log(isValid, 9999);
  return position of object or final value of object if is founded or false if is not exists.
```

```javascript
var result = iterator(pattern)(object);
```
recorre un object localizando los children, debo darle una vuelta para:
1. que el pattern, sea una function personal
2. que el filtro de busqueda tambien

```javascript
function pattern(){}
```
ahora inyecto la function de patron, la cual crea un array de mapa.

```javascript
function compare()
```
Me estaba complicando en exceso a la hora de reiniciar el object. En el bucle que recorre el patron se resetea con el compare. Este metodo es semi anonimo, en el return.


bien ahora estoy estudiando el punto de recursividad.
Encuentro las funciones trampoline, las cuales de una forma muy simple, evitando TCO ["tail call optimisation"](http://www.integralist.co.uk/posts/js-recursion.html)
consigo hacer busqueda en deep ( nested tree, vamos el que quiera, greaaat.)
```javascript
function deepSearch(stack, compare, next);
```
