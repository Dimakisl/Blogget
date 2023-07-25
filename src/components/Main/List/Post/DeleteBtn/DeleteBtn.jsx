import style from './DeleteBtn.module.css';
import {ReactComponent as DeleteIcon} from '../img/delete.svg';

export const DeleteBtn = () => {
  return (
    <button className={style.delete}>
      <DeleteIcon />
    </button>
  );
};