import style from './Rating.module.css';

export const Rating = ({ups}) => {
  return (
    <div>
      <div className={style.rating}>
        <button className={style.up} aria-label='Повысить рейтинг'/>
        <p className={style.ups}>{ups}</p>
        <button className={style.down} aria-label='Понизить рейтинг'/>
      </div>
    </div>
  );
};