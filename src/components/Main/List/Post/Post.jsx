import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import Rating from './Rating';
import DateTime from './DateTime';
import DeleteBtn from './DeleteBtn';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title} />
      <div className={style.content}>
        <h2 className={style.title}>
          <a className={style.linkPost} href="#post">{title}</a>
        </h2>
        <a className={style.linkAuthor} href="#author">{author}</a>
      </div>
      <Rating ups={ups}/>
      <DateTime date={date}/>
      <DeleteBtn />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};