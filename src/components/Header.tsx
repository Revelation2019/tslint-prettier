import React from 'react'

export interface IAddTodo {
  addTodo: (text: string) => void
}

// React.SFC 即将被弃用，改用React.FC
const Header: React.FC<IAddTodo> = ({ addTodo }) => {
  let input: HTMLInputElement

  // 表单的event类型用React.FormEvent<HTMLFormElement>
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodo(input.value)
  }
  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="please input your task"
          // 这里需要判断node是否为null，因为node为null时会报 不能将类型“HTMLInputElement | null”分配给类型“HTMLInputElement”
          // 或者使用静态断言
          ref={(node) =>
            // if (node) {
            //   input = node
            // }
            (input = node as HTMLInputElement)
          }
        />{' '}
        <button type="submit">新增任务</button>
      </form>
    </div>
  )
}

export default Header
