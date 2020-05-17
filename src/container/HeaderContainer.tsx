import { connect } from 'react-redux'
import Header from '../components/Header'
import { addTodo } from '../actions/index'

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
  addTodo: (text: string) => {
    dispatch(addTodo(text))
  },
})

export default connect(null, mapDispatchToProps)(Header)
