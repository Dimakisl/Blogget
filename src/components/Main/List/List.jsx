// import {useContext} from 'react';
import style from './List.module.css';
import Post from './Post';

import Loader from '../../../UI/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useRef} from 'react';
import {changePage, postBestRequestAfterAsync, postBestRequestAsync} from '../../../store/postBest/action';
import {Outlet, useNavigate, useParams} from 'react-router-dom';

export const List = () => {
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const token = useSelector(state => state.tokenReducer.token);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postBestRequestAfterAsync());
      }
    }, {
      rootMargin: '100px',
    });
    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    dispatch(postBestRequestAsync(page));
    dispatch(changePage(page));
  }, [page]);

  return (
    <>
      {loading ? (<Loader />) : null}
      <ul className={style.list}>
        {posts ? posts.map((postData, idx) => <Post key={postData?.data?.id + new Date().toDateString() + idx} postData={postData}/>) :
          null
        }
        <li ref={endList} className={style.end}/>
      </ul>
      <Outlet />
    </>
  );
};