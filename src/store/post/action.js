import axios from 'axios';
import {deleteToken} from '../tokenReducer';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';


export const postRequest = () => ({
  type: POST_REQUEST,
});

export const postRequestSuccess = (posts) => ({
  type: POST_REQUEST_SUCCESS,
  posts
});

export const postRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error
});


export const postRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  console.log(token, 'toka');
  if (!token) return;
  dispatch(postRequest());
  axios(`https://oauth.reddit.com/best`, {
    headers: {
      Authorization: `bearer ${token}`,
    }
  })
    .then(({data}) => {
      console.log(data, 'data-22');
      dispatch(postRequestSuccess(data));
    }).catch(err => {
      console.log(err);
      dispatch(deleteToken());
      dispatch(postRequestError(err.toString()));
    });
};