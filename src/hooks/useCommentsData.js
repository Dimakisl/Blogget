// // import {useState} from 'react';
// // import {useEffect} from 'react';
// // import {getCommentsRequestAsync} from '../store/comment/action';
// // import {useDispatch, useSelector} from 'react-redux';

// export const useCommentsData = () => {
//   // const dispatch = useDispatch();
//   // const token = useSelector(state => state.tokenReducer.token);
//   // const [comments, setComments] = useState([]);
//   // const [commentData, setCommentData] = useState([]);


//   // const getCommentData = (token, id) => {
//   //   getCommentDataRequestAsync(token, id);
//   //   // fetch(`https://oauth.reddit.com/r/funnysigns/comments/${id}/`, {

//   //   //   method: 'GET',
//   //   //   headers: {
//   //   //     Authorization: `bearer ${token}`,
//   //   //   }
//   //   // }).then(response => {
//   //   //   return response.json();
//   //   // })
//   //   //   .then(data => {
//   //   //     if (data) {
//   //   //       setCommentData(data[1]?.data?.children);
//   //   //     }
//   //   //   });
//   // };
//   // const comments = useSelector(state => state.comments.data?.children);
//   // const commentData = useSelector(state => state.commentData);
//   // const loading = useSelector(state => state.commentData.loading);


//   // const getComments = (token, id) => {
//   //   console.log(token, id), '999999';
//   //   dispatch(getCommentsRequestAsync(token, id));
//   //   // getCommentDataRequestAsync(token, id);
//   //   // fetch(`https://oauth.reddit.com/comments/${id}`, {
//   //   //   method: 'GET',
//   //   //   headers: {
//   //   //     Authorization: `bearer ${token}`,
//   //   //   },
//   //   // }).then(response => {
//   //   //   return response.json();
//   //   // })
//   //   //   .then(data => {
//   //   //     setComments(data);
//   //   //     getCommentData(token, id);
//   //   //   });
//   // };

//   // useEffect(() => {
//   //   dispatch(getCommentsRequestAsync(token, id));
//   // }, [token, id]);


//   // return [comments, commentData];
// };