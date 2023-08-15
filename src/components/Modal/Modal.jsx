import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {Comments} from './Comments/Comments';
import FormComment from './FormComment';
import {useDispatch, useSelector} from 'react-redux';
import {getCommentDataRequestAsync, getCommentsRequestAsync} from '../../store/comment/action';
import Loader from '../../UI/Loader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
  const token = useSelector(state => state.tokenReducer.token);
  const {id, page} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const overlayRef = useRef(null);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current || e.key === 'Escape') {
      navigate(`/category/${page}`);
    }
  };

  useEffect(() => {
    if (!token) {
      return;
    } else {
      dispatch(getCommentsRequestAsync(id));
      dispatch(getCommentDataRequestAsync(id));
    }
  }, [token, id]);


  // const comments = useSelector(state => state.comments?.comments?.data?.data?.children[0]);
  const comments = useSelector(state => state.comments.comments);
  console.log(comments, 'comments-1');
  const loading = useSelector(state => state.comments?.loading);
  const error = useSelector(state => state.comments?.error);

  const {title, author, selftext: markdown} = comments || '';

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keyup', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keyup', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {loading &&
        <div
          style={{
            position: 'fixed',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
        ><Loader /></div>}
        {error && <p style={{marginTop: '10px', marginBottom: '10px', color: 'red'}}>Ошибка загрузки статьи</p>}
        <h2 className={style.title}>{title}</h2>
        <div className={style.content}>
          <Markdown options={{
            overrides: {
              a: {
                props: {
                  target: '_blank',
                },
              },
            },
          }}>
            {markdown === undefined ? '' : markdown}
          </Markdown>
        </div>
        <p className={style.author}>{author}</p>
        <Comments />
        <FormComment />
        <button className={style.close}>
          <CloseIcon
            onClick={() => navigate(`/category/${page}`) }
          />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};


Modal.propsTypes = {
  markdown: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  closeModal: PropTypes.func,
};