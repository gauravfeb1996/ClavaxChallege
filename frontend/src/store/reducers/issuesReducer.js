import produce from 'immer';
import { GET_ISSUES_DATA_SUCCESS, UPDATE_STAR_COUNT } from '../constants/getIssuesData';

const initialState = {
    issues: [],
    stars: 0,
};


const issuesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ISSUES_DATA_SUCCESS:
        draft.issues = [...draft.issues, ...action.data];
      break;
      case UPDATE_STAR_COUNT:
        if(action.operation === 'star'){
          draft.stars = draft.stars+1;
        }
        if(action.operation === 'unstar'){
          draft.stars = draft.stars-1;
        }
      break;
      default: {
        return draft;
      }
    }
  });

export default issuesReducer;
