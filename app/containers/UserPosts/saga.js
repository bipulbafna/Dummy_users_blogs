import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_BLOGS } from './constants';
import request from 'utils/request';
import { fetchBlogsSuccess, fetchBlogsError } from './actions';


/**
 * Github repos request/response handler
 */
export function* fetchPosts({ id }) {
  const requestURL = new URL(`https://jsonplaceholder.typicode.com/posts`);
  requestURL.searchParams.append('userId', id);
  try {
    const response = yield call(request, requestURL);
    yield put(fetchBlogsSuccess(response));
  } catch (err) {
    yield put(fetchBlogsError(err));
  }
}


export default function* defaultSaga() {
  yield takeLatest(FETCH_BLOGS, fetchPosts);
}
