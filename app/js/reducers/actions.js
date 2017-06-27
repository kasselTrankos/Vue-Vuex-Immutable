let nextTodoId = 0
export const addState = text => {
  return {
    type: 'ADD_STATE',
    id: nextTodoId++,
    text
  }
}

export const getStates = filter => {
  return {
    type: 'GET_STATES',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}