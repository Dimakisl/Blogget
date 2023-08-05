import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';
import {useState, useContext, useEffect} from 'react';
import {authContext} from '../../../context/authContext';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken, updateToken} from '../../../store';


export const Auth = () => {
  const [logoutBtn, setLogoutBtn] = useState(false);
  const {auth, clearAuth} = useContext(authContext);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) return;
    dispatch(updateToken(token));
  }, [token]);


  const logOut = () => {
    dispatch(deleteToken());
    clearAuth();
  };


  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button onClick={() => setLogoutBtn(!logoutBtn)}>
            <img className={style.img} src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`}/>
            <Text>{auth.name}</Text>
          </button>
          {logoutBtn && <button className={style.logout} onClick={() => logOut()}>Выйти</button>}
        </>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg}/>
        </Text>
        )
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};