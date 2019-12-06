/*
 *
 * UserBlog reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_OR_DELETE_BLOG,
  GET_OR_DELETE_BLOG_SUCCESS,
  GET_OR_DELETE_BLOG_ERROR,
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
} from './constants';

const initialState = fromJS({
  blog: {},
  comments: []
});

function userBlogReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_OR_DELETE_BLOG:
      return state;
    case GET_OR_DELETE_BLOG_SUCCESS:
      return state.set("blog", action.response);
    case GET_OR_DELETE_BLOG_ERROR:
      return state;
    case FETCH_COMMENTS:
      return state;
    case FETCH_COMMENTS_SUCCESS:
      return state.set("comments", action.response);
    case FETCH_COMMENTS_ERROR:
      return state;
    default:
      return state;
  }
}

export default userBlogReducer;
