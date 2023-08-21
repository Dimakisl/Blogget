import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {authReducer} from './auth/authReducer';
// import {postBestReducer} from './postBest/postReducer';
import postBestReducer from './postBest/postsSlice';
import {commentsDataReducer} from './comment/commentsDataReducer';
import commentsReducer from './comment/commentsSlice';
import {configureStore} from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    auth: authReducer,
    // posts: postBestReducer,
    posts: postBestReducer,
    comments: commentsReducer,
    commentsData: commentsDataReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenMiddleware),
});