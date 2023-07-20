import Layout from '../Layout';
import style from './Main.module.css';

export const Main = ({children}) => {
  return (
    <Layout>
      {children}
    </Layout>
  )
}