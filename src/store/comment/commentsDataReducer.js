import {COMMENTSDATA_REQUEST, COMMENTSDATA_REQUEST_ERROR, COMMENTSDATA_REQUEST_SUCCESS} from './action';

const initialState = {
  loading: false,
  commentsData: [],
  error: '',
};

export const commentsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTSDATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case COMMENTSDATA_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        commentsData: action.comments.data,
        error: ''
      };
    case COMMENTSDATA_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        commentsData: []
      };
    default:
      return state;
  }
};