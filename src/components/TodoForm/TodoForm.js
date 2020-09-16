import React from 'react';
import { PropTypes } from 'prop-types';
import { isEmpty } from 'lodash';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { input } = this.state;
    const { addItem } = this.props;
    if (!isEmpty(input)) {
      addItem(input);
      this.setState({ input: '' });
    }
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const { input } = this.state;
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)} className="flex justify-between justify-center">
          <input
            type="text"
            value={input}
            onChange={(e) => this.handleChange(e)}
            className="px-3 py-2 border border-gray-300 focus:outline-none flex-grow mr-3"
            placeholder="Todo..."
          />
          <button type="submit" className="px-3 py-2 text-white bg-blue-600 font-bold hover:bg-blue-800 focus:outline-none">Add Task</button>
        </form>
        <hr className="my-3" />
      </>
    );
  }
}

TodoForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default TodoForm;
