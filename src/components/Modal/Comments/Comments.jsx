import {useSelector} from 'react-redux';
import DateTime from '../../Main/List/Post/DateTime';
import style from './Comments.module.css';

export const Comments = () => {
  const commentsData = useSelector(state => state.commentsData?.commentsData[1]?.data?.children);
  const loading = useSelector(state => state.commentsData?.loading);
  return (
    <ul className={style.list}>
      {commentsData ? commentsData.map(com => {
        return (
          com.data.body && <li key={com.data.link_id + com.data.created} className="item">
            <h3 className={style.author}>{com.data.author}</h3>
            <p className={style.comment}>{com.data.body}</p>
            <DateTime date={com.data.created} />
            <br />
          </li>
        );
      }) : loading || commentsData !== undefined ? <p>Загрузка комментариев...</p> : <p>Нет комментариев</p>
      }
    </ul>
  );
};