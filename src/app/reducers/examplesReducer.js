/**
 * Created by leonardli on 3/25/17.
 */
import * as ActionTypes from '../constants/actionTypes';
import Immutable from 'immutable';
export default function (state = Immutable.OrderedMap(), action = {}){
  switch(action.type){
    case ActionTypes.ADD_EXAMPLE:
      return state.set(action.id, Immutable.Map({id: action.id, name: action.name}));
      break;
    default:
      return state;
      break;
  }
}