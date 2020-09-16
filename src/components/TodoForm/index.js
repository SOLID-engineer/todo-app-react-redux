import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import { addItem } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  addItem: (text) => dispatch(addItem(text)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
