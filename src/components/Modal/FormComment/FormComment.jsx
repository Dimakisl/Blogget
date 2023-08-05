import {useContext} from 'react';
import {authContext} from '../../../context/authContext';
import style from './FormComment.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store';

export const FormComment = () => {
  const value = useSelector(state => state.comment);
  const dispatch = useDispatch();

  const {auth} = useContext(authContext);

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