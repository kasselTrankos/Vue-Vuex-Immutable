# functional Study

Case Study of programming functional with react and flux( will change :))

Me siento con ganas y estoy creando el objeto <List>, como ejercicio de programacion funcional.



Añadiendo Vue js como motor de render, server nativo con http-statics de node js.


Pendiente de implementar.



`node static_server.js`

desde http://127.0.0.1:9000

```javascript
var t = new LazyChain($scope)
.invoke('one', 90)
.invoke('two', $scope.value)
.invoke('toString')
.force();
```


Validación de Object by string en validQueryObject, retorna false si no existe, en caso de existir la posición pedida(*necesita una revisión de código*): 
```javascript
  var _validQueryObject = validQueryObject('_demosObject[0].children[0].ids')(_demosObject);
  console.log(_validQueryObject, 9999);
```

Lazy load chaining, combine n functions, ideal para angular. Ya que actualiz el $scope, en cada invocación y then force.

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
