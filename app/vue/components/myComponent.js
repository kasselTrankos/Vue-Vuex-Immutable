import Vue from 'vue';
import tpl from'./myComponent.vue';
Vue.component('myComponent', {
    render: function (createElement) {
	    return createElement(tpl)
  	}
});