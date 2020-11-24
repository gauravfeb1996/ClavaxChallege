import {
    all,
    fork,
    takeLatest,
    put,
    call,
  } from 'redux-saga/effects';
// import * as actions from '../actions/actionMethods';
import * as actions from '../constants/getIssuesData';
import { getIssuesDataSuccess } from '../actions/getIssuesData';
import apiHandler from '../../utils/api/apiHandler.js';
import { BASE_URL } from '../../utils/constants';


function* getIssuesRequestSaga(action) {
    try {
        const res = yield call(apiHandler.getDataAPI, `${BASE_URL}?page=${action.pageNumber}`);
        yield put(getIssuesDataSuccess(res));
    } catch (error) {
        console.log(error);
    }
}


export function* watchGetIssuesRequestSaga() {
    yield takeLatest(actions.GET_ISSUES_DATA_REQUEST, getIssuesRequestSaga);
}

export default function* rootSaga() {
    yield all([fork(watchGetIssuesRequestSaga)]);
}
  