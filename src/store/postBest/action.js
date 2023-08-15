import axios from 'axios';
import {deleteToken} from '../tokenReducer';
import {createAsyncThunk} from '@reduxjs/toolkit';

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

export const postBestRequestAsync = createAsyncThunk('posts/fetch', (newPage, {getState}) => {
  let page = getState().posts.page;
  if (newPage) {
    page = newPage;
    // dispatch(changePage(page));
  }
  console.log(page, 'page');
  const token = getState().tokenReducer.token;
  const after = getState().posts.after;
  const loading = getState().posts.loading;
  // const isLast = getState().posts.isLast;


  if (!token || loading) return;
  return axios(`https://oauth.reddit.com/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    }
  })
    .then(({data}) => {
      console.log(data.data.children, 'data');
      // return data.data.children;
      return data.data;
      // if (after) {
      //   // dispatch(postRequestSuccessAfter(data.data));
      //   console.log(data, 'data');
      //   return data;
      // } else {
      //   return data;
      //   // dispatch(postRequestSuccess(data.data));
      // }
    }).catch(error => {
      // console.log(err);
      // dispatch(deleteToken());
      // dispatch(postRequestError(err.toString()));
      return {error: error.toString()};
    });
});


export const postBestRequestAsync2 = (newPage) => (dispatch, getState) => {
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