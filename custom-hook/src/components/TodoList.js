import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

const TodoList = () => {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')
  const [todo, setTodo] = useState(data)

  function handleToggleComplete(id) {
    setTodo((todo) => {
      const updatedTodo = todo.map((item) => {
        if(item.id === id) {
          return {...item, completed: !item.completed}
        }

        return item
      })

      return updatedTodo
    })
  }

  useEffect(() => {
    setTodo(data)
  }, [data])

  return (
    <div>
      <ul>
        {todo.map((row) => {
          return <li key={row.id}>
            {row.completed ? <s>{row.title}</s> : row.title}
            <input type="checkbox" checked={row.completed} onChange={(e) => handleToggleComplete(row.id)} />
          </li>
        })}
      </ul>
    </div>
  )
}

export default TodoList
