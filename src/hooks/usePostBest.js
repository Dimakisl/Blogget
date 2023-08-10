// import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postBestRequestAsync} from '../store/postBest/action';
import {useEffect} from 'react';

export const usePostBest = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenReducer.token);
  const posts = useSelector(state => state.posts.posts.data?.children);
  const loading = useSelector(state => state.posts.loading);


  useEffect(() => {
    dispatch(postBestRequestAsync());
  }, [token]);

  return [posts, loading];
};