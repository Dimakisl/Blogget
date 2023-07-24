import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 24,
      date: '2023-07-23T12:30:00.00Z',
      id: '123',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 224,
      date: '2023-07-24T15:25:00.00Z',
      id: '456',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 324,
      date: '2023-07-25T14:48:00.00Z',
      id: '789',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 424,
      date: '2023-07-26T19:50:00.00Z',
      id: '1234',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map(postData => <Post key={postData.id} postData={postData}/>)}
    </ul>
  );
};