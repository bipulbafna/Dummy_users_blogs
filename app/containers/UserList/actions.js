/*
 *
 * UserList actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_USER_LIST,
  FETCH_USER_LIST_SUCCESS,
  FETCH_USER_LIST_ERROR
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchUserListData() {
  return {
    type: FETCH_USER_LIST,
  };
}
export function fetchUserListDataSuccess(response) {
  return {
    type: FETCH_USER_LIST_SUCCESS,
    response
  };
}
export function fetchUserListDataError(err) {
  return {
    type: FETCH_USER_LIST_ERROR,
    err
  };
}
