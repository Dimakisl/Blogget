import style from './StartPage.module.css';

export const StartPage = () => {
  return (
    <div className={style.center}>
      <h2>Стартовая страница</h2>
      <p className={style.paragraph}>Авторизуйтесь и выберите категорию!</p>
    </div>
  );
};