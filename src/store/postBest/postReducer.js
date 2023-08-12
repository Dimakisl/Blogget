import {POST_BEST_REQUEST, POST_BEST_REQUEST_ERROR, POST_BEST_REQUEST_SUCCESS} from './action';

const initialState = {
  loading: false,
  posts: {},
  error: '',
};

export const postBestReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_BEST_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case POST_BEST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        error: ''
      };
    case POST_BEST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        posts: {}
      };
    default:
      return state;
  }
};