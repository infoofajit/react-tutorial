export const setTodo = (payload) => {
  return {
    type: 'SET_TODO',
    payload: payload
  }
}

export const fetchTodos = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todo = await response.json()
    dispatch(setTodo(todo))
  }
}
