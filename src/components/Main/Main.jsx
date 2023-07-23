import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
// import style from './Main.module.css';

export const Main = ({children}) => {
  return (
    <Layout>
      {/* {children} */}
      <Tabs />
      <List />
    </Layout>
  );
};