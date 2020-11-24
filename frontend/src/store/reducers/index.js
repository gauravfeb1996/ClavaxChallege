import { combineReducers } from 'redux';
import issueReducer from './issuesReducer';


const rootReducer = combineReducers({
    issuesStore: issueReducer,
});

export default rootReducer;
