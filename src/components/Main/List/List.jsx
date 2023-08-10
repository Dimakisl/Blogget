// import {useContext} from 'react';
import style from './List.module.css';
import Post from './Post';

import {usePostBest} from '../../../hooks/usePostBest';
import Loader from '../../../UI/Loader';

export const List = () => {
  const [posts, loading] = usePostBest();

  return (
    <ul className={style.list}>
      {loading ? (<Loader />) : posts ? posts.map(postData => <Post key={postData.data.id} postData={postData}/>) :
        null
      }
    </ul>
  );
};