import {
  ADD_ITEM, CHANGE_FILTER, REMOVE_ITEM, TOOGLE_ITEM,
} from './types';

export function addItem(text) {
  return { payload: { text }, type: ADD_ITEM };
}

export function toogleItem(id) {
  return { payload: { id }, type: TOOGLE_ITEM };
}

export function removeItem(id) {
  return { payload: { id }, type: REMOVE_ITEM };
}

export function changeFilter(value) {
  return { payload: { value }, type: CHANGE_FILTER };
}
