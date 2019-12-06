import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_OR_DELETE_BLOG, FETCH_COMMENTS } from './constants';
import request from 'utils/request';
import { getOrDeleteBlogSuccess, getOrDeleteBlogError, fetchCommentsSuccess, fetchCommentsError } from './actions';


/**
 * Github repos request/response handler
 */
export function* fetchBlog({ id, method }) {
  const requestURL = new URL(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (method) {
    const requestPayoad = {
      method
    }
    try {
      const response = yield call(request, requestURL, requestPayoad);
      yield put(getOrDeleteBlogSuccess(response));
    } catch (err) {
      yield put(getOrDeleteBlogError(err));
    }
  } else {
    try {
      const response = yield call(request, requestURL)
      yield put(getOrDeleteBlogSuccess(response));
    } catch (err) {
      yield put(getOrDeleteBlogError(err));
    }
  }
}
export function* fetchComments({ id }) {
  const requestURL = new URL(`https://jsonplaceholder.typicode.com/comments`);
  requestURL.searchParams.append('postId', id);
  try {
    const response = yield call(request, requestURL);
    yield put(fetchCommentsSuccess(response));
  } catch (err) {
    yield put(fetchCommentsError(err));
  }

}


export default function* defaultSaga() {
  yield [takeLatest(GET_OR_DELETE_BLOG, fetchBlog),
  takeLatest(FETCH_COMMENTS, fetchComments)
  ]
}
