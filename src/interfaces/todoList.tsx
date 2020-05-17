export interface ITodo {
  id: number
  text: string
  deleteTodo: (id: number) => void
}

export interface ITodos<T> {
  todos: T[]
  deleteTodo: (id: number) => void
}

export interface IAddAction {
  type: string
  id: number
  text: string
}
