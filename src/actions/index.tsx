let id = 0
export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  id: id++,
  text,
})

export const deleteTodo = (taskId: number) => ({
  type: 'DELETE_TODO',
  taskId,
})
