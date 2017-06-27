import Vue from 'vue';
import actState from './components/myComponent.jsx';
import Home from './templates/home.vue';
import { Map }  from 'immutable';
import {combineReducers} from 'redux-immutable';
import {createStore} from 'redux';

import todos from './reducers/todos.js'
import manageState from './reducers/index.js'

const initialState = Map();
const rootReducer = combineReducers({todos, manageState});
const store = createStore(rootReducer, initialState);

new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(Home)
  }
})