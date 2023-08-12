import {Text} from '../../../../../UI/Text';
import style from './Content.module.css';
import {Link, useParams} from 'react-router-dom';

export const Content = ({title, author, markdown, id}) => {
  const {page} = useParams();

  return (
    <div className={style.content}>
      <Text As='h2' fontWeight='bold' className={style.title}>
        <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
          <Text size={18} tsize={24} className={style.linkPost}>{title ? title.toString() : '' }</Text>
        </Link>
      </Text>
      <Text As='a' size={12} tsize={14} color='orange' className={style.linkAuthor} href="#author">{author ? author.toString() : ''}</Text>
    </div>
  );
};