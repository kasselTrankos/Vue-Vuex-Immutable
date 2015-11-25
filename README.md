# functional-react-flux
Case Study of programming functional with react and flux( will change :))

Me siento con ganas y estoy creando el objeto <List>, como ejercicio de programacion funcional.

`npm run serve`

desde http://127.0.0.1:8000

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

Como ejercicio, estoy creando un simple modelo routing, con listener.
