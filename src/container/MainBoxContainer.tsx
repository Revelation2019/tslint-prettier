import { connect } from 'react-redux'
import MainBox from '../components/MainBox'
import { deleteTodo } from '../actions/index'

const mapStateToProps = (state: { todos: any }) => ({
  todos: state.todos,
})
const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  deleteTodo: (id: number) => dispatch(deleteTodo(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(MainBox)
