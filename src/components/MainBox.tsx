import React from 'react'
import Todo from './Todo'
import { ITodos, ITodo } from '../interfaces/todoList'

const MainBox: React.FC<ITodos<ITodo>> = ({ todos, deleteTodo }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} deleteTodo={deleteTodo}>
        {todo.text}
      </Todo>
    ))}
  </ul>
)

export default MainBox
