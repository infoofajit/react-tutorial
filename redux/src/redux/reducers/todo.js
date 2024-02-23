const initialState = {
  todos: []
}

function todo(state = initialState, action) {
  switch (action.type) {
    case 'SET_TODO':
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state
  }
}

export default todo