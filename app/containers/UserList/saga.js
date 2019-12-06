import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USER_LIST } from './constants';
import request from 'utils/request';
import { fetchUserListDataSuccess, fetchUserListDataError } from './actions';


/**
 * Github repos request/response handler
 */
export function* fetchUsers() {
  const requestURL = `https://jsonplaceholder.typicode.com/users`;

  try {
    const response = yield call(request, requestURL);
    yield put(fetchUserListDataSuccess(response));
  } catch (err) {
    yield put(fetchUserListDataError(err));
  }
}


export default function* defaultSaga() {
  yield takeLatest(FETCH_USER_LIST, fetchUsers);
}
