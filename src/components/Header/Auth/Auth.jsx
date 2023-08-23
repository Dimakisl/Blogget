import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
// import {authContext} from '../../../context/authContext';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken, updateToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import AuthLoader from '../../../UI/AuthLoader';


export const Auth = () => {
  const [logoutBtn, setLogoutBtn] = useState(false);
  // const {auth, clearAuth} = useContext(authContext);
  // const auth = useSelector(state => state.auth.data);
  const [auth, loading, clearAuth] = useAuth();
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) return;
    dispatch(updateToken(token));
  }, [token]);


  const logOut = () => {
    dispatch(deleteToken());
    window.location.replace('https://blogget-nine.vercel.app/');
    clearAuth();
  };


  return (
    <div className={style.container}>
      {loading ? (<AuthLoader />) : auth.name ? (
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