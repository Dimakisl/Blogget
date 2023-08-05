import {useState} from 'react';

export const useCommentsData = () => {
  const [comments, setComments] = useState([]);
  const [commentData, setCommentData] = useState([]);

  const getCommentData = (token, id) => {
    fetch(`https://oauth.reddit.com/r/funnysigns/comments/${id}/`, {

      method: 'GET',
      headers: {
        Authorization: `bearer ${token}`,
      }
    }).then(response => {
      return response.json();
    })
      .then(data => {
        if (data) {
          setCommentData(data[1]?.data?.children);
        }
      });
  };


  const getComments = (token, id) => {
    fetch(`https://oauth.reddit.com/comments/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(response => {
      return response.json();
    })
      .then(data => {
        setComments(data);
        getCommentData(token, id);
      });
  };


  return {comments, getComments, commentData};
};