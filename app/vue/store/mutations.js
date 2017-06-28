import { Map, List }  from 'immutable';
export const state = {
	current: -1,
	states: []
};
export const mutations = {
  addState (state, texts) {
   return state.states.push(Map({text: List(texts)}));
  },
  setState(state, current){
  	state.current = current;
  }
}
