import { all, fork } from "redux-saga/effects"; 
import getIssues from "./getIssuesRequest";

// Redux Saga: Root Saga
export function* rootSaga() {
    yield all([
        fork(getIssues),
    ]);
}
