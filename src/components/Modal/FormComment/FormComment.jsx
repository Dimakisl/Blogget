import style from './FormComment.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store/commentReducer';
import {useAuth} from '../../../hooks/useAuth';

export const FormComment = () => {
  const value = useSelector(state => state.commentReducer.comment);
  const dispatch = useDispatch();

  const [auth] = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={(e) => onSubmit(e)}>
      <h3>{auth.name}</h3>
      <textarea className={style.textarea} defaultValue={value} onChange={handleChange}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};