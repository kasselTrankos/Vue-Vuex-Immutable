const { Map } = require('immutable')
const map = Map({
	name: 'juan',
	appel: 'kiosko'
});
map.set('name', 'Antonio pascual');
console.log(map.get('name'), 'MAP from immutable');


