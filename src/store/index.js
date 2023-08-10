import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {postBestReducer} from './postBest/postReducer';
import {commentsDataReducer} from './comment/commentsDataReducer';
import {commentsReducer} from './comment/commentsReducer';


const rootReducer = combineReducers({
  tokenReducer,
  commentReducer,
  auth: authReducer,
  posts: postBestReducer,
  comments: commentsReducer,
  commentsData: commentsDataReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));