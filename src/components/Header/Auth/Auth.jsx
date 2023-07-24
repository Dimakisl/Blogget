import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = ({auth}) => {
  return (
    <button className={style.button}>
      {auth ? auth :
        <LoginIcon className={style.svg}/>
      }
    </button>
  );
};