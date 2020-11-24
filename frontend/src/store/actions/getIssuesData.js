import { GET_ISSUES_DATA_REQUEST, GET_ISSUES_DATA_SUCCESS, UPDATE_STAR_COUNT } from '../constants/getIssuesData';

export const getIssuesDataRequest = (pageNumber) => {
    return{
        type: GET_ISSUES_DATA_REQUEST,
        pageNumber
    };
}

export const getIssuesDataSuccess = (data) => {
    return {
        type: GET_ISSUES_DATA_SUCCESS,
        data,
    };
}

export const updateStarCount = (operation) => {
    return {
        type: UPDATE_STAR_COUNT,
        operation,
    };
}