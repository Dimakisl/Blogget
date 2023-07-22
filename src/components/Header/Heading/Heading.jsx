import style from './Heading.module.css';

export const Heading = ({text}) => {
  return <div className={style.heading}>{text}</div>
}