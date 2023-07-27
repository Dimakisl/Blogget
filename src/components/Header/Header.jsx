import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';

export const Header = () => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading text='Blogger'/>
          <Search />
          <Auth />
        </div>
      </Layout>
    </header>
  );
};

// Auth.propTypes = {
//   token: PropTypes.string,
// };