import style from './ErrorPage.module.css';

export const ErrorPage = () => {
  return (
    <div className={style.center}>
      <p className={style.paragraph}>Такой страницы нет. (404)</p>
      <p className={style.paragraph}>Выберите категорию!</p>
    </div>
  );
};