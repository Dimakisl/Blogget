import axios from 'axios';
// import {useSelector} from 'react-redux';
// import {deleteToken} from '../tokenReducer';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';


//комментарии
export const COMMENTSDATA_REQUEST = 'COMMENTSDATA_REQUEST';
export const COMMENTSDATA_REQUEST_SUCCESS = 'COMMENTSDATA_REQUEST_SUCCESS';
export const COMMENTSDATA_REQUEST_ERROR = 'COMMENTSDATA_REQUEST_ERROR';


export const commentRequest = () => ({
  type: COMMENTS_REQUEST,
});

export const commentRequestSuccess = (comments) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  comments
});

export const commentRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  error
});
//комментарии
export const commentDataRequest = () => ({
  type: COMMENTSDATA_REQUEST,
});

export const commentDataRequestSuccess = (comments) => ({
  type: COMMENTSDATA_REQUEST_SUCCESS,
  comments
});

export const commentDataRequestError = (error) => ({
  type: COMMENTSDATA_REQUEST_ERROR,
  error
});


//comments - текст статьи getComments
export const getCommentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  dispatch(commentRequest());
  axios(`https://oauth.reddit.com/comments/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(data => {
      dispatch(commentRequestSuccess(data));
    })
    .catch(err => {
      dispatch(commentRequestError(err.toString()));
    });
};
//commentData - комментарии getCommentData
export const getCommentDataRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  dispatch(commentDataRequest());
  axios(`https://oauth.reddit.com/r/funnysigns/comments/${id}/`, {

    method: 'GET',
    headers: {
      Authorization: `bearer ${token}`,
    }
  })
    .then(data => {
      if (data) {
        dispatch(commentDataRequestSuccess(data));
      }
    })
    .catch(err => {
      dispatch(commentDataRequestError(err));
    });
};