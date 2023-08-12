import {CHANGE_PAGE, POST_BEST_REQUEST, POST_BEST_REQUEST_ERROR, POST_BEST_REQUEST_SUCCESS, POST_BEST_REQUEST_SUCCESS_AFTER} from './action';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: ''
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
        posts: action.posts.children,
        error: '',
        after: action.after,
        isLast: !action.after
      };
    case POST_BEST_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.posts.children],
        error: '',
        after: action.after
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        after: '',
        isLast: false
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