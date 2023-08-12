import DateTime from '../../Main/List/Post/DateTime';
import style from './Comments.module.css';

export const Comments = ({comments}) => {
  return (
    <ul className={style.list}>
      {comments?.length > 0 ? comments.map(com => {
        return (
          com.body && <li key={com.data.link_id + com.data.created} className="item">
            <h3 className={style.author}>{com.data.author}</h3>
            <p className={style.comment}>{com.data.body}</p>
            <DateTime date={com.data.created} />
            <br />
          </li>
        );
      }) : comments?.length === 0 || comments !== undefined ? <p>Загрузка комментариев...</p> : <p>Нет комментариев</p>
      }
    </ul>
  );
};