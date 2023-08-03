import {useContext, useRef} from 'react';
import {authContext} from '../../../context/authContext';
import style from './FormComment.module.css';

export const FormComment = () => {
  const {auth} = useContext(authContext);
  const text = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text.current.value);
  };

  return (
    <form className={style.form} onSubmit={(e) => onSubmit(e)}>
      <h3>{auth.name}</h3>
      <textarea className={style.textarea} ref={text}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};