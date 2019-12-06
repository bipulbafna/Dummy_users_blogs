/*
 *
 * UserList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, FETCH_USER_LIST, FETCH_USER_LIST_SUCCESS, FETCH_USER_LIST_ERROR,
} from './constants';

const initialState = fromJS({
  users: []
});

function userListReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FETCH_USER_LIST:
      return state;
    case FETCH_USER_LIST_SUCCESS:
      return state.set('users', action.response)
    case FETCH_USER_LIST_ERROR:
      return state;
    default:
      return state;
  }
}

export default userListReducer;
