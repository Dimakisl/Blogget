import {useContext, useEffect, useState} from 'react';
import {tokenContext} from '../context/tokenContext';
// import {URL_API} from '../api/const';


export const usePostBest = () => {
//   alert('777');
  const {token} = useContext(tokenContext);
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://oauth.reddit.com/best`, {
      method: 'GET',
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(response => {
      return response.json();
    })
      .then(data => {
        setPost(data);
      });
  }, [token]);

  return [post, setPost];
};