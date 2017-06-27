import {combineReducers} from 'redux-immutable';
import todos from './todos.js'

const stateApp = combineReducers({todos});
export default stateApp;