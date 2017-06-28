import Vuex from 'vuex';
import Vue from 'vue'
import {state,  mutations } from './mutations';
import plugins from './plugins';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
	state,
	getters,
 	mutations,
  	plugins
});