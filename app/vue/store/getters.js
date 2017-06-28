export const getState = state => {
	if(state.states.length==0) return [];
	if(state.current>=0) {
		var _reset = state.states[state.current].get('text').toJS();
		state.current = -1;
		return _reset;
	}
	return state.states.slice(-1)[0].get('text').toJS();
}
export const getLengthStates = state =>{
	return states.states.length;
}
export const getAllStates = state =>{
	return state.states;
}