import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/actions/count'
import { fetchTodos } from '../redux/actions/todo'

const TodoList = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.count)
  const todo = useSelector(state => state.todo.todos)
  
  function incrementCount() {
    dispatch(increment())
  }

  function decrementCount() {
    dispatch(decrement())
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])
  
  return (
    <div>
      <h1>Helloworld React & Redux! Count: {count} Todos: {todo.length}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}

export default TodoList
