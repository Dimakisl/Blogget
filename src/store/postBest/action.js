import axios from 'axios';
import {deleteToken} from '../tokenReducer';

export const POST_BEST_REQUEST = 'POST_BEST_REQUEST';
export const POST_BEST_REQUEST_SUCCESS = 'POST_BEST_REQUEST_SUCCESS';
export const POST_BEST_REQUEST_ERROR = 'POST_BEST_REQUEST_ERROR';


export const postRequest = () => ({
  type: POST_BEST_REQUEST,
});

export const postRequestSuccess = (posts) => ({
  type: POST_BEST_REQUEST_SUCCESS,
  posts
});

export const postRequestError = (error) => ({
  type: POST_BEST_REQUEST_ERROR,
  error
});


export const postBestRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;
  dispatch(postRequest());
  axios(`https://oauth.reddit.com/best`, {
    headers: {
      Authorization: `bearer ${token}`,
    }
  })
    .then(({data}) => {
      dispatch(postRequestSuccess(data));
    }).catch(err => {
      console.log(err);
      dispatch(deleteToken());
      dispatch(postRequestError(err.toString()));
    });
};