// import {useContext} from 'react';
import style from './List.module.css';
import Post from './Post';
// import {postContext} from '../../../context/postContext';
import {usePostBest} from '../../../hooks/usePostBest';
import {AuthLoader} from '../../Header/Auth/AuthLoader/AuthLoader';
// import {useSelector} from 'react-redux';
// const posts = useSelector(state => state.post.posts.data.children);
export const List = () => {
  // const {posts} = useContext(postContext);
  const [posts, loading] = usePostBest();
  // const {posts} = useSelector(state => state.post.post);
  console.log(posts, 'posts-llist');

  return (
    <ul className={style.list}>
      {loading ? (<AuthLoader />) : posts ? posts.map(postData => <Post key={postData.data.id} postData={postData}/>) :
        null
      }
    </ul>
  );
};