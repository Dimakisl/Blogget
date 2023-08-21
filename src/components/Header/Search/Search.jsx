import {useDispatch, useSelector} from 'react-redux';
import style from './Search.module.css';
import {ReactComponent as SearchIcon} from './img/search.svg';
import {useState} from 'react';
import {searchRequest} from '../../../store/search/searchAction';

export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const token = useSelector(state => state.tokenReducer.token);

  // dispatch({type: 'SUBMIT'});
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(searchRequest({token, search}));
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input
        className={style.search}
        type='search'
        onChange = {e => setSearch(e.target.value)}
        value={search}
      />
      <button className={style.button} type='submit'>
        <SearchIcon className={style.svg}/>
      </button>
    </form>
  );
};