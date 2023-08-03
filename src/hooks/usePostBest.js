import {useState} from 'react';

export const usePostBest = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = (token) => {
    fetch(`https://oauth.reddit.com/best`, {
      method: 'GET',
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(response => {
      return response.json();
    })
      .then(data => {
        setPosts(data);
      });
  };
  return {posts, getPosts};
};