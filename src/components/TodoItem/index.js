import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { toggleItem, removeItem } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  toggleItem: (id) => dispatch(toggleItem(id)),
  removeItem: (id) => dispatch(removeItem(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
