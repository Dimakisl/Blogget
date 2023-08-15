import axios from 'axios';
// import {commentsSlice} from './commentsSlice';
import {createAsyncThunk} from '@reduxjs/toolkit';
// import {useSelector} from 'react-redux';
// import {deleteToken} from '../tokenReducer';

// export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
// export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
// export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';


//комментарии
export const COMMENTSDATA_REQUEST = 'COMMENTSDATA_REQUEST';
export const COMMENTSDATA_REQUEST_SUCCESS = 'COMMENTSDATA_REQUEST_SUCCESS';
export const COMMENTSDATA_REQUEST_ERROR = 'COMMENTSDATA_REQUEST_ERROR';


// export const commentRequest = () => ({
//   type: COMMENTS_REQUEST,
// });

// export const commentRequestSuccess = (comments) => ({
//   type: COMMENTS_REQUEST_SUCCESS,
//   comments
// });

// export const commentRequestError = (error) => ({
//   type: COMMENTS_REQUEST_ERROR,
//   error
// });
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
export const getCommentsRequestAsync2 = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  // dispatch(commentRequest());
  // dispatch(commentsSlice.actions.commentRequest());
  axios(`https://oauth.reddit.com/comments/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(data => {
      // dispatch(commentRequestSuccess(data));
      // dispatch(commentsSlice.actions.commentRequestSuccess(data));
    })
    .catch((error) => {
      // dispatch(commentRequestError(err.toString()));
      // dispatch.commentsSlice.actions.commentDataRequestError({error: error.toString()});
    });
};

export const getCommentsRequestAsync = createAsyncThunk('comments/fetch', (id, {getState}) => {
  const token = getState().tokenReducer.token;
  console.log(token, 'token');
  if (!token) return;
  return axios(`https://oauth.reddit.com/comments/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `bearer ${token}`,
    }
  }).then(
    ({
      data: [
        {
          data: {
            children: [{data: post}],
          },
        },
        {
          data: {children},
        }
      ],
    }) => {
      const comments = children.map((item) => item.data);
      return {post, comments};
    }
  )
    .catch((error) => {
    // dispatch(commentRequestError(err.toString()));
    // dispatch.commentsSlice.actions.commentDataRequestError({error: error.toString()});
      return {error: error.toString()};
    });
});
//commentData - комментарии getCommentData
export const getCommentDataRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  dispatch(commentDataRequest());
  // axios(`https://oauth.reddit.com/r/funnysigns/comments/${id}/`, {
  axios(`https://oauth.reddit.com/comments/${id}`, {

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