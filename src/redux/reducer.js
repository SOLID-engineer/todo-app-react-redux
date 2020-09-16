import { FILTER_ALL } from '../constants';
import {
  ADD_ITEM, CHANGE_FILTER, REMOVE_ITEM, TOGGLE_ITEM,
} from './types';

export const initialState = {
  filter: FILTER_ALL,
  items: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { id: Date.now(), text: payload.text, completed: false }],
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === payload.id) return { ...item, completed: !item.completed };
          return item;
        }),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => (item.id !== payload.id)),
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: payload.value,
      };
    default:
      return state;
  }
}

export default reducer;
