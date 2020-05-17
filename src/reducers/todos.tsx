import { IAddAction } from '../interfaces/todoList'
export const todos = (state = [], action: IAddAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ]
    default:
      return state
  }
}
