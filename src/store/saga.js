// import {takeEvery} from 'redux-saga/effects';

import {watchSearch} from './search/searchSaga';

// function* workerSaga(action) {
//   yield console.log('work');
// }

// export function* watchSaga() {
//   yield takeEvery('SUBMIT', workerSaga);
// }

export default function* rootSaga() {
  yield watchSearch();
}