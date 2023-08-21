import {call, put, select, takeLatest} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';
import {SEARCH_REQUEST, searchRequestError, searchRequestSuccess} from './searchAction';

function* fetchSearch(search) {
  const token = yield select(state => state.tokenReducer.token);
  try {
    const request = yield call(axios, `${URL_API}/search?q=${search}`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    });
    yield put(searchRequestSuccess(request.data.data));
  } catch (e) {
    yield put(searchRequestError(e));
  }
//   return request.data;
}

// function* workerSeacrh(action) {
//   const token = yield select(state => state.tokenReducer.token);
//   //   const {data} = yield fetchSearch(action);
//   const {data} = yield call(fetchSearch, action.search, token);
//   console.log(data, 'dat');
//   yield put(searchRequestSuccess(data));
// }

export function* watchSearch() {
//   yield takeLatest(SEARCH_REQUEST, workerSeacrh);
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}