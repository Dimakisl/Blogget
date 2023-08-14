// import {useContext} from 'react';
import style from './List.module.css';
import Post from './Post';

// import {usePostBest} from '../../../hooks/usePostBest';
import Loader from '../../../UI/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useRef} from 'react';
import {postBestRequestAsync} from '../../../store/postBest/action';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  // const token = useSelector(state => state.tokenReducer.token);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postBestRequestAsync());
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
    dispatch(postBestRequestAsync(page));
  }, [page]);

  // useEffect(() => {
  //   console.log(page, 'page');
  //   if (!page) {
  //     dispatch(postBestRequestAsync('rising'));
  //   }
  // }, [token]);

  return (
    <>
      {loading ? (<Loader />) : null}
      <ul className={style.list}>
        {posts ? posts.map(postData => <Post key={postData.data.id + new Date().toDateString()} postData={postData}/>) :
          null
        }
        <li ref={endList} className={style.end}/>
      </ul>
      <Outlet />
    </>
  );
};