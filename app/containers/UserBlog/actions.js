/*
 *
 * UserBlog actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_OR_DELETE_BLOG,
  GET_OR_DELETE_BLOG_SUCCESS,
  GET_OR_DELETE_BLOG_ERROR,
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function getOrDeleteBlog(id, method) {
  return {
    type: GET_OR_DELETE_BLOG,
    id,
    method
  };
}
export function getOrDeleteBlogSuccess(response) {
  return {
    type: GET_OR_DELETE_BLOG_SUCCESS,
    response
  };
}
export function getOrDeleteBlogError(err) {
  return {
    type: GET_OR_DELETE_BLOG_ERROR,
    err
  };
}

export function fetchComments(id) {
  return {
    type: FETCH_COMMENTS,
    id
  };
}
export function fetchCommentsSuccess(response) {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    response
  };
}
export function fetchCommentsError(err) {
  return {
    type: FETCH_COMMENTS_ERROR,
    err
  };
}
