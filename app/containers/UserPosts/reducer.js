/*
 *
 * UserPosts reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
} from './constants';

const initialState = fromJS({
  blogs: []
});

function userPostsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FETCH_BLOGS:
      return state;
    case FETCH_BLOGS_SUCCESS:
      return state.set('blogs', action.response);
    case FETCH_BLOGS_ERROR:
      return state;
    default:
      return state;
  }
}

export default userPostsReducer;
