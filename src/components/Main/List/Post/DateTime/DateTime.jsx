import formatDate from '../../../../../utils/formatDate';
import style from './DateTime.module.css';

export const DateTime = ({date}) => {
  return (
    <time className={style.date} dateTime={date}>{formatDate(date)}</time>
  );
};