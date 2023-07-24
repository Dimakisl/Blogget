import {Text} from '../../../../../UI/Text';
import style from './Rating.module.css';

export const Rating = ({ups}) => {
  return (
    <div>
      <div className={style.rating}>
        <button className={style.up} aria-label='Повысить рейтинг'/>
        <Text As='p' size={12} tsize={14} fontWeight='bold' color='green' className={style.ups}>{ups.toString()}</Text>
        <button className={style.down} aria-label='Понизить рейтинг'/>
      </div>
    </div>
  );
};