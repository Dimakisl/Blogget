import axios from 'axios';
import {deleteToken} from '../tokenReducer';

export const POST_BEST_REQUEST = 'POST_BEST_REQUEST';
export const POST_BEST_REQUEST_SUCCESS = 'POST_BEST_REQUEST_SUCCESS';
export const POST_BEST_REQUEST_ERROR = 'POST_BEST_REQUEST_ERROR';
export const POST_BEST_REQUEST_SUCCESS_AFTER = 'POST_BEST_REQUEST_SUCCESS_AFTER';

export const CHANGE_PAGE = 'CHANGE_PAGE';


export const postRequest = () => ({
  type: POST_BEST_REQUEST,
});

export const postRequestSuccess = (posts) => ({
  type: POST_BEST_REQUEST_SUCCESS,
  posts: posts.children,
  after: posts.after
});

export const postRequestSuccessAfter = (posts) => ({
  type: POST_BEST_REQUEST_SUCCESS_AFTER,
  posts: posts.children,
  after: posts.after
});

export const postRequestError = (error) => ({
  type: POST_BEST_REQUEST_ERROR,
  error
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page
});


export const postBestRequestAsync = (newPage) => (dispatch, getState) => {
  let page = getState().posts.page;
  if (newPage) {
    page = newPage;
    dispatch(changePage(page));
  }
  const token = getState().tokenReducer.token;
  const after = getState().posts.after;
  const loading = getState().posts.loading;
  const isLast = getState().posts.isLast;


  if (!token || loading || isLast) return;
  dispatch(postRequest());
  axios(`https://oauth.reddit.com/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    }
  })
    .then(({data}) => {
      if (after) {
        dispatch(postRequestSuccessAfter(data.data));
      } else {
        dispatch(postRequestSuccess(data.data));
      }
    }).catch(err => {
      console.log(err);
      dispatch(deleteToken());
      dispatch(postRequestError(err.toString()));
    });
};