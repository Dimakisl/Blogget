import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import Rating from './Rating';
import DateTime from './DateTime';
import DeleteBtn from './DeleteBtn';
import {Content} from './Content/Content';

export const Post = ({postData}) => {
  const {title, author, ups, thumbnail, created, selftext: markdown, id} = postData?.data || [];
  return (
    postData?.data && <li className={style.post}>
      <img className={style.img} src={thumbnail !== 'self' ? thumbnail : notphoto} alt={title} />
      <Content title={title ? title : ''} author={author ? author : ''} markdown={markdown ? markdown : ''} id={id}/>
      <Rating ups={ups}/>
      <DateTime date={created ? created : new Date()}/>
      <DeleteBtn />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
  markdown: PropTypes.string,
};