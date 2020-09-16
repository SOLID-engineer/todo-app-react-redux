import React from 'react';
import { PropTypes } from 'prop-types';
import TodoItem from '../TodoItem/index';
import { FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETED } from '../../constants';

const getFilteredItems = (items, filter) => {
  if (filter === FILTER_ALL) return items;
  return items.filter((item) => item.completed === (filter === FILTER_COMPLETED));
};

function TodoList({ items, filter, changeFilter }) {
  const filteredItems = getFilteredItems(items, filter);
  return (
    <>
      <div className="mb-3">
        <select value={filter} onChange={(e) => changeFilter(e.target.value)} className="py-2 px-3 border border-gray-300 mr-3 focus:outline-none">
          <option value={FILTER_ALL}>All</option>
          <option value={FILTER_ACTIVE}>Active</option>
          <option value={FILTER_COMPLETED}>Completed</option>
        </select>
        <span className="text-gray-600">
          {`${filteredItems.length} item(s)`}
        </span>
      </div>
      <div className="mb-3">
        {filteredItems.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default TodoList;
