import {useContext} from 'react';
import style from './List.module.css';
import Post from './Post';
import {postContext} from '../../../context/postContext';

export const List = () => {
  const {posts} = useContext(postContext);

  return (
    <ul className={style.list}>
      {posts.data ? posts.data.children.map(postData => <Post key={postData.data.id} postData={postData}/>) :
        null
      }
    </ul>
  );
};