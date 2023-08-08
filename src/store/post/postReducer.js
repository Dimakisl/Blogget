import {POST_REQUEST, POST_REQUEST_ERROR, POST_REQUEST_SUCCESS} from './action';

const initialState = {
  loading: false,
  posts: {},
  error: '',
};

export const postReducer = (state = initialState, action) => {
  console.log(action.data, 'actionData');
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        error: ''
      };
    case POST_REQUEST_ERROR:
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