import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';

export const Auth = ({token}) => {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    console.log(token, 'token222');
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    }).then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      }).catch(err => {
        console.log(err);
        setAuth({});
      });
  }, [token]);


  return (
    <div className={style.container}>
      {auth.name ? (
        <button>
          <img className={style.img} src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`}/>
          <Text>{auth.name}</Text>
        </button>
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