import React from 'react'
// 在typescript中使用redux报错"找不到redux模块"
// 在tsconfig.json中compilerOptions添加"moduleResolution": "Node",
import { createStore } from 'redux'
import { render } from 'react-dom'
import HeaderContainer from '@src/container/HeaderContainer'
import MainBoxContainer from '@src/container/MainBoxContainer'
import reducer from '@src/reducers/index'
import { Provider } from 'react-redux'

const store = createStore(reducer)

const App: React.FC = () => (
  <Provider store={store}>
    <HeaderContainer />
    <MainBoxContainer />
  </Provider>
)

render(<App />, document.getElementById('app'))
