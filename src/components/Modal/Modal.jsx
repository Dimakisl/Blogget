import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Comments} from './Comments/Comments';
import FormComment from './FormComment';
import {useSelector} from 'react-redux';

export const Modal = ({closeModal, id}) => {
  const token = useSelector(state => state.tokenReducer.token);
  const overlayRef = useRef(null);
  const {comments, getComments, commentData} = useCommentsData();
  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current || e.key === 'Escape') {
      closeModal();
    }
  };

  const {title, selftext: markdown} = comments.length ? comments[0].data.children[0].data : '';


  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keyup', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keyup', handleClick);
    };
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    } else {
      getComments(token, id);
    }
  }, [token, id]);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
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
            {markdown === undefined ? 'Загрузка...' : markdown}
          </Markdown>
        </div>
        <p className={style.author}>{comments.author}</p>
        <Comments comments={commentData}/>
        <FormComment />
        <button className={style.close}>
          <CloseIcon onClick={() => closeModal()}/>
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