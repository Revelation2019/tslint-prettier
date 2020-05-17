import React from 'react'
import { ITodo } from '../interfaces/todoList'

const Todo: React.FC<ITodo> = ({ id, children, deleteTodo }) => (
  <li>
    <span>{children}</span>{' '}
    <button
      onClick={() => {
        deleteTodo(id)
      }}
    >
      delete
    </button>
  </li>
)

export default Todo
