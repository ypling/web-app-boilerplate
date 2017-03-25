/**
 * Created by leonardli on 3/25/17.
 */
import * as ActionTypes from '../constants/actionTypes';

export function addExample (name) {
  return (dispatch, getStore) => {
    const id = getStore().examples.size + 1;
    dispatch({
      type: ActionTypes.ADD_EXAMPLE,
      id,
      name
    })
  }
}