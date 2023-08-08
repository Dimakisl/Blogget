// import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../store/post/action';
import {useEffect} from 'react';

export const usePostBest = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenReducer.token);
  // const [posts, setPosts] = useState([]);

  // const getPosts = (token) => {
  //   fetch(`https://oauth.reddit.com/best`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `bearer ${token}`,
  //     },
  //   }).then(response => {
  //     return response.json();
  //   })
  //     .then(data => {
  //       setPosts(data);
  //     });
  // };
  const posts = useSelector(state => state.post.posts.data?.children);
  const loading = useSelector(state => state.post.loading);
  console.log(posts, 'child');

  useEffect(() => {
    dispatch(postRequestAsync());
  }, [token]);
  // const getPosts = () => {
  //   dispatch(postRequestAsync());
  // };
  // return {posts, getPosts};
  return [posts, loading];
};