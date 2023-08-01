import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import Rating from './Rating';
import DateTime from './DateTime';
import DeleteBtn from './DeleteBtn';
import {Text} from '../../../../UI/Text';

export const Post = ({postData}) => {
  const {title, author, ups, thumbnail, created} = postData.data;
  return (
    <li className={style.post}>
      <img className={style.img} src={thumbnail !== 'self' ? thumbnail : notphoto} alt={title} />
      <div className={style.content}>
        <Text As='h2' fontWeight='bold' className={style.title}>
          <Text As='a' size={18} tsize={24} className={style.linkPost} href="#post">{title ? title.toString() : ''}</Text>
        </Text>
        <Text As='a' size={12} tsize={14} color='orange' className={style.linkAuthor} href="#author">{author ? author.toString() : ''}</Text>
      </div>
      <Rating ups={ups}/>
      <DateTime date={created}/>
      <DeleteBtn />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};