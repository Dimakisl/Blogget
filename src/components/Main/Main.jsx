import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';


export const Main = ({children}) => {
  return (
    <Layout>
      <Tabs />
      <List />
    </Layout>
  );
};