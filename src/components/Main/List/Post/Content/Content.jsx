import {useState} from 'react';
import {Text} from '../../../../../UI/Text';
import style from './Content.module.css';
import Modal from '../../../../Modal';

export const Content = ({title, author, markdown, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    setIsModalOpen(true);
  };
  return (
    <div className={style.content}>
      <Text As='h2' fontWeight='bold' className={style.title}>
        <Text As='a' size={18} tsize={24} className={style.linkPost} href="#post" onClick={() => handleClick()}>{title ? title.toString() : '' }</Text>
      </Text>
      <Text As='a' size={12} tsize={14} color='orange' className={style.linkAuthor} href="#author">{author ? author.toString() : ''}</Text>
      {/* {isModalOpen && <Modal markdown={markdown} title={title} author={author} closeModal={() => {
        setIsModalOpen(false);
      }}/>
      } */}
      {isModalOpen && <Modal id={id} closeModal={() => {
        setIsModalOpen(false);
      }}/>
      }
    </div>
  );
};