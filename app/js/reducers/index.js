const manageState = (state = 'GET_STATES', action) => {
  switch (action.type) {
    case 'ADD_STATE':
      return action.filter
    default:
      return state
  }
}

export default manageState