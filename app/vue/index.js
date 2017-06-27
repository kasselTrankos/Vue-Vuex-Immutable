import Vue from 'vue';
import actState from './components/myComponent.jsx';
import Home from './templates/home.vue';
import store from './store'

new Vue({
	store,
  	el: '#app',
  	render: function (createElement) {
    	return createElement(Home)
  	}
})