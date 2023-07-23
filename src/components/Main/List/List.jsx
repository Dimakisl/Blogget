import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Nickname',
    ups: 24,
    date: '2023-07-23T14:48:00.00Z',
  };
  return (
    <ul className={style.list}>
      <Post postData={postData}/>
    </ul>
  );
};