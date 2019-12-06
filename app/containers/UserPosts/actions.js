/*
 *
 * UserPosts actions
 *
 */

import {
  DEFAULT_ACTION, FETCH_BLOGS, FETCH_BLOGS_SUCCESS, FETCH_BLOGS_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function fetchBlogs(id) {
  return {
    type: FETCH_BLOGS,
    id
  };
}
export function fetchBlogsSuccess(response) {
  return {
    type: FETCH_BLOGS_SUCCESS,
    response
  };
}
export function fetchBlogsError(err) {
  return {
    type: FETCH_BLOGS_ERROR,
    err
  };
}
